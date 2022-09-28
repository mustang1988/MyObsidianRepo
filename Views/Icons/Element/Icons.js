const DEBUG = false;
const ELEMENT_ICONS = {
  Earth: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/元素_地.webp"),
    width: 34,
    height: 34,
    name: "地",
  },
  Water: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/元素_水.webp"),
    width: 34,
    height: 34,
    name: "水",
  },
  Fire: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/元素_火.webp"),
    width: 34,
    height: 34,
    name: "火",
  },
  Wind: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/元素_风.webp"),
    width: 34,
    height: 34,
    name: "风",
  },
  Time: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/元素_时.webp"),
    width: 34,
    height: 34,
    name: "时",
  },
  Space: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/元素_空.webp"),
    width: 34,
    height: 34,
    name: "空",
  },
  Mirage: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/元素_幻.webp"),
    width: 34,
    height: 34,
    name: "幻",
  },
  Dragon: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/元素_失落_龙.webp"),
    width: 24,
    height: 24,
    name: "龙",
  },
  Holy: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/元素_失落_圣.webp"),
    width: 24,
    height: 24,
    name: "圣",
  },
  Star: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/元素_失落_星.webp"),
    width: 24,
    height: 24,
    name: "星",
  },
  Moon: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/元素_失落_月.webp"),
    width: 24,
    height: 24,
    name: "月",
  },
  Sun: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/元素_失落_阳.webp"),
    width: 24,
    height: 24,
    name: "阳",
  },
};

const GetElementIcon = (name) => {
  DEBUG && console.log("ElementIcon.js, GetElementIcon() args: ", name);
  const keys = Object.keys(ELEMENT_ICONS);
  const names = Object.values(ELEMENT_ICONS).map((i) => i.name);
  let result = null;
  if (!keys.includes(name) && !names.includes(name)) {
    DEBUG &&
      console.error("ElementIcon.js, GetElementIcon() 未找到对应元素图标: ", {
        name,
      });
  } else if (keys.includes(name)) {
    result = ELEMENT_ICONS[name];
  } else if (names.includes(name)) {
    for (const i of Object.values(ELEMENT_ICONS)) {
      if (i.name === name) {
        result = i;
        break;
      }
    }
  }
  DEBUG && console.log("ElementIcon.js, GetElementIcon() return: ", result);
  return result;
};
const { name } = input;
DEBUG && console.log("ElementIcon.js, input: ", input);
return GetElementIcon(name);
