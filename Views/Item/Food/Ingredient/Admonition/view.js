const DEBUG = false;
const DEFAULT_OPTIONS = {
  raw: true,
  db: "游戏攻略/英雄传说 闪之轨迹/数据库/食材",
};
const INGREDIENT_ICON_KEY = "Item.Food.Ingredient";
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetSize = (width, height, size) => {
  return Math.round((width * size) / height);
};
const GetSource = (file) => {
  return `app://local/${this.app.vault.adapter.basePath}/${file.path}`;
};
const GetIngredient = (id, db) => {
  const [ingredient = null] = dv
    .page(db)
    .Ingredients.filter((i) => i.ID === id);
  if (ingredient === null) {
    return { ingredient: null, link: null };
  }
  return {
    ingredient,
    link: dv.blockLink(db, id, false, ingredient.Name),
  };
};
// ===== Begin =====
let { ingredient, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.debug(
    "[食材Admonition渲染][Views/Item/Food/Ingredient/view.js][Input]:\n",
    {
      ingredient,
      options,
    }
  );
const { size, db, raw } = options;
const { ID } = ingredient;
const { ingredient: i, link } = GetIngredient(ID, db);
if (i === null) {
  DEBUG &&
    console.debug(
      "[食材Admonition渲染][Views/Item/Food/Ingredient/view.js][未找到指定ID的食材]:\n",
      { ID, db }
    );
  return "";
}
const adm = `\`\`\`ad-Food-Ingredient
title: ${link}
\`\`\``;
return raw ? adm : dv.span(adm);
