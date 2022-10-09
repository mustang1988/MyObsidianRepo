const DEBUG = false;
const DEFAULT_OPTIONS = {
  collapse: true,
};
const GetItem = (itemLink) => {
  DEBUG &&
    console.log("[Admonition/Food/Recipe.js][GetItem()][itemLink]:", itemLink);
  const {
    Name: { path, subpath },
    Cook = null,
    Num = null,
    Attack,
  } = itemLink;
  const [item = null] = dv.page(path).Items.filter((i) => i.ID === subpath);
  DEBUG && console.log("[Admonition/Food/Recipe.js][GetItem()][item]:", item);
  if (item !== null) {
    item.path = path;
    item.Cook = Cook;
    item.Num = Num;
    item.Attack = Attack;
  }
  return item;
};
const GetIngredientsTable = (ingredients) => {
  DEBUG &&
    console.log(
      "[Admonition/Recipe.js][GetIngredientsTable()][ingredients]: ",
      ingredients
    );
  const icon = dv.page("图片/游戏攻略/英雄传说/通用/图标/icon").Item.Food
    .Ingredient;
  const { File: file, Width: width, Height: height } = icon;
  const size = Math.round((width * 15) / height);
  const imagePath = `${this.app.vault.adapter.basePath}/${file.path}`;
  ingredients = ingredients.map((i) => {
    console.log(i);
    return `<img width="${size}" src="${imagePath}" /> ${dv.blockLink(
      i.path,
      i.ID,
      false,
      i.Name
    )} x ${i.Num}`;
  });
  DEBUG &&
    console.log(
      "[Admonition/Recipe.js][GetIngredientsTable()][ingredients]: ",
      ingredients
    );
  return ingredients;
};
let { recipe, options } = input;
options = Object.assign(DEFAULT_OPTIONS, options);
DEBUG && console.log("[Admonition/Recipe.js][Input]: ", { recipe, options });
const { Name, Superb, Regular, Peculiar, Unique, Ingredients, Time, How } =
  recipe;
DEBUG &&
  console.log("[Admonition/Recipe.js][Superb, Regular, Peculiar, Unique]: ", {
    Superb,
    Regular,
    Peculiar,
    Unique,
  });
const { collapse } = options;
const items = [Superb, Regular, Peculiar, Unique].map((link) => GetItem(link));
DEBUG && console.log("[Admonition/Recipe.js][items]: ", items);
const promiseList = [];
promiseList.push(
  dv.view("Admonition/Food/Superb", {
    item: items[0],
    options: { raw: true, collapse },
  })
);
promiseList.push(
  dv.view("Admonition/Food/Regular", {
    item: items[1],
    options: { raw: true, collapse },
  })
);
promiseList.push(
  items[2].Attack === true
    ? dv.view("Admonition/Food/Attack", {
        item: items[2],
        options: { raw: true, collapse },
      })
    : dv.view("Admonition/Food/Peculiar", {
        item: items[2],
        options: { raw: true, collapse },
      })
);
promiseList.push(
  dv.view("Admonition/Food/Unique", {
    item: items[3],
    options: { raw: true, collapse },
  })
);
return Promise.all(promiseList).then((items) => {
  DEBUG && console.log("[Admonition/Food/Recipe.js][items]: ", items);
  return `\`\`\`\`ad-Food-Regular
title: ${Name}
collapse: ${collapse ? "open" : "close"}
## 获取
${Time}

${How}

## 必要食材
${dv.markdownList(GetIngredientsTable(Ingredients.map((i) => GetItem(i))))}

## 获得道具
${items[0]}
${items[1]}
${items[2]}
${items[3]}
\`\`\`\``;
});
