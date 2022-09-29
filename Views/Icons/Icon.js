const DEBUG = true;
/**
 *
 * @param {string} name
 * @param {string} category
 * @returns
 */
const GetIcon = (name, category, options) => {
  switch (category.toLowerCase()) {
    case "atbonus":
      DEBUG && console.error("获取AT奖励图标:", { category, name });
      return dv.view("Icons/ATBonus", {
        name: name,
        options: { raw: true },
      });
    case "buff":
      DEBUG && console.log("获取Buff图标:", { category, name });
      return dv.view("Icons/Buff", {
        name: name,
        options: { raw: true },
      });
    case "debuff":
      DEBUG && console.log("获取Debuff图标:", { category, name });
      return dv.view("Icons/Debuff", {
        name: name,
        options: { raw: true },
      });
    case "item":
      DEBUG && console.log("获取物品图标:", { category, name });
      return dv.view("Icons/Item", {
        name: name,
        options: { raw: true },
      });
    case "other":
      DEBUG && console.log("获取其他图标:", { category, name });
      return dv.view("Icons/Other", {
        name: name,
        options: { raw: true },
      });
    case "element":
      DEBUG && console.log("获取元素图标:", { category, name });
      return dv.view("Icons/Element", {
        name: name,
        options: { raw: true },
      });
    default:
      DEBUG && console.error("无效的参数:", { category, name });
      return null;
  }
};
const { name, category, options } = input;
DEBUG && console.log("Icon.js, Input: ", { name, category });
return GetIcon(name, category, options);
