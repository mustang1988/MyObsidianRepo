// ===== Constraints =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 15,
  display_name: true,
  raw: true,
};
const ICON_KEY = "Item.Food.Peculiar";
// ===== Functions =====
const MergeOptions = (options) => {
  return Object.assign(DEFAULT_OPTIONS, options);
};
const IsAttackFood = (effects) => {
  for (const eff of effects) {
    if (eff.startsWith("攻击")) {
      return true;
    }
  }
  return false;
};
const GetFoodIcon = (options) => {
  return dv.view("Icons/Icon", { key: ICON_KEY, options }).then((icon) => {
    if (icon === undefined) {
      return "";
    }
    const { File: file, Width: width, Height: height } = icon;
    return dv
      .view("Common/Image/Resize", { width, height, options })
      .then((w) => {
        return dv.view("Common/Image/Path", { file, options }).then((p) => {
          return `<img src="${p}" width="${w}"/>`;
        });
      });
  });
};
// ===== Begin =====
let { link, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.log("[Food/InLine/Peculiar/view.js][Input]: ", { link, options });

const inline = dv
  .view("Common/Query/Link", { link, options })
  .then(({ item: foodData, link: foodLink }) => {
    if (foodData === null) {
      return "";
    }
    if (IsAttackFood(foodData.Effects)) {
      return dv.view("Item/Food/Attack/InLine", { link, options });
    }
    return GetFoodIcon(options).then((icon) => {
      if (icon === "") {
        return "";
      }
      return dv.view("Common/Link", { icon, link: foodLink  , options });
    });
  });
const { raw } = options;
return raw ? inline : dv.span(inline);
