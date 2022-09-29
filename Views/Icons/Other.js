const DEBUG = false;
const OTHER_ICONS = {
  Slash: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/其他_攻击类型_斩.webp"),
    width: 32,
    height: 32,
    name: "斩",
  },
  Thrust: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/其他_攻击类型_突.webp"),
    width: 32,
    height: 32,
    name: "突",
  },
  Pierce: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/其他_攻击类型_射.webp"),
    width: 32,
    height: 32,
    name: "射",
  },
  Strike: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/其他_攻击类型_钢.webp"),
    width: 32,
    height: 32,
    name: "钢",
  },
  StarPersent_1: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/其他_进度_星_1.webp"),
    width: 24,
    height: 32,
    name: "星",
  },
  StarPersent_0: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/其他_进度_星_0.webp"),
    width: 24,
    height: 32,
    name: "空星",
  },
  Monster: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/其他_战斗笔记.png"),
    width: 120,
    height: 120,
    name: "怪物",
  },
  Boss: {
    file: dv.fileLink(
      "图片/游戏攻略/英雄传说/通用/图标/其他_战斗笔记_Boss.png"
    ),
    width: 120,
    height: 120,
    name: "Boss",
  },
};
const GetIcon = (name) => {
  const keys = Object.keys(OTHER_ICONS);
  const names = Object.values(OTHER_ICONS).map((i) => i.name);
  let result = null;
  if (!keys.includes(name) && !names.includes(name)) {
    DEBUG &&
      console.error("Other.js, GetIcon() 未找到对应图标: ", {
        name,
      });
  } else if (keys.includes(name)) {
    result = OTHER_ICONS[name];
  } else if (names.includes(name)) {
    for (const i of Object.values(OTHER_ICONS)) {
      if (i.name === name) {
        result = i;
        break;
      }
    }
  }
  return result;
};
const GetOtherIcon = (name) => {
  return Array.isArray(name) ? name.map((n) => GetIcon(n)) : GetIcon(name);
};
const { name } = input;
DEBUG && console.log("Other.js, input: ", input);
return GetOtherIcon(name);
