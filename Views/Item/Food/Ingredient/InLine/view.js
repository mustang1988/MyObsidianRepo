// ===== Constraints =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 15,
  display_name: true,
  raw: true,
};
const INGREDIENT_ICON_KEY = "Item.Food.Ingredient";
// ===== Functions =====
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetIngredientIcon = async (options) => {
  return dv
    .view("Icons/Icon", { key: INGREDIENT_ICON_KEY, options: { raw: true } })
    .then((icon) => {
      if (icon === null) {
        return null;
      }
      const { File: file, Width: width, Height: height } = icon;
      return dv
        .view("Common/Image/Resize", { width, height, options })
        .then((w) => {
          return dv.view("Common/Image/Path", { file, options }).then((p) => {
            return `<img src="${p}" width="${w}" />`;
          });
        });
    });
};
// ===== Begin =====
let { link, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.debug(
    "[食材InLine渲染][Views/Item/Food/Ingredient/view.js][Input]:\n",
    {
      link,
      options,
    }
  );
const { raw } = options;

const inline = dv
  .view("Common/Query/Link", { link, options })
  .then(({ item: ingredientData, link: ingredientLink }) => {
    if (ingredientData === null) {
      return "";
    }
    return GetIngredientIcon(options).then((icon) => {
      if (icon === "") {
        return "";
      }
      return dv.view("Common/Link", { icon, link: ingredientLink, options });
    });
  });

return raw ? inline : dv.span(inline);
