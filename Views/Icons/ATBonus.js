const DEBUG = false;
const AT_BONUS_ICONS = {
    
};
const GetIcon = (name) => {
    const keys = Object.keys(AT_BONUS_ICONS);
    const names = Object.values(AT_BONUS_ICONS).map((i) => i.name);
    let result = null;
    if (!keys.includes(name) && !names.includes(name)) {
      DEBUG &&
        console.error("Item.js, GetIcon() 未找到对应物品图标: ", {
          name,
        });
    } else if (keys.includes(name)) {
      result = AT_BONUS_ICONS[name];
    } else if (names.includes(name)) {
      for (const i of Object.values(AT_BONUS_ICONS)) {
        if (i.name === name) {
          result = i;
          break;
        }
      }
    }
    return result;
  };
  const GetATBonusIcon = (name) => {
    return Array.isArray(name) ? name.map((n) => GetIcon(n)) : GetIcon(name);
  };
  const { name } = input;
  DEBUG && console.log("Element.js, input: ", input);
  return GetATBonusIcon(name);