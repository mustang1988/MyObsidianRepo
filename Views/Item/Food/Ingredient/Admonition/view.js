const DEBUG = false;
const DEFAULT_OPTIONS = {
  db: "游戏攻略/英雄传说 闪之轨迹/数据库/食材",
  raw: true,
};
const INGREDIENT_ICON_KEY = "Item.Food.Ingredient";
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
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
const { db, raw } = options;
const { ID } = ingredient;

const adm = dv
  .view("Common/Query/ID", { id: ID, db, options })
  .then(({ item: ingredientData, link: ingredientLink }) => {
    if (ingredientData === null) {
      return "";
    }
    return `\`\`\`ad-Food-Ingredient
title: ${ingredientLink}
\`\`\``;
  });

return raw ? adm : dv.span(adm);
