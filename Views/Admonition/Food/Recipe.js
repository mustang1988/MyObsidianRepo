const DEBUG = true;
const DEFAULT_OPTIONS = {
  collapse: true,
};
const GetItem = (itemLink) => {
  const {
    Name: { path, subpath },
    Cook = null,
    Num = null,
  } = itemLink;
  const [item = null] = dv.page(path).Items.filter((i) => i.ID === subpath);
  if (item !== null) {
    item.path = path;
    item.Cook = Cook;
    item.Num = Num;
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
const { Name, Superb, Regular, Peculiar, Unique, Ingredients, Time, How } = recipe;
const { collapse } = options;
const items = [Superb, Regular, Peculiar, Unique].map((link) => GetItem(link));
DEBUG && console.log("[Admonition/Recipe.js][items]: ", items);
return Promise.all([
  dv.view("Admonition/Food/Superb", {
    item: items[0],
    options: { raw: true, collapse: false },
  }),
  dv.view("Admonition/Food/Regular", {
    item: items[1],
    options: { raw: true, collapse: false },
  }),
  dv.view("Admonition/Food/Peculiar", {
    item: items[2],
    options: { raw: true, collapse: false },
  }),
  dv.view("Admonition/Food/Unique", {
    item: items[3],
    options: { raw: true, collapse: false },
  }),
]).then((items) => {
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
