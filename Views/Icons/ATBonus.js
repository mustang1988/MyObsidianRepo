const DEBUG = false;
const AT_BONUS_ICONS = {
  SCraft: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/AT标记_S技.webp"),
    width: 48,
    height: 48,
    name: "S技",
  },
  Art: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/AT标记_魔法.webp"),
    width: 48,
    height: 48,
    name: "魔法",
  },
  BreaveOrder: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/AT标记_勇气指令.webp"),
    width: 48,
    height: 48,
    name: "勇气指令",
  },
  Craft: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/AT标记_战技.webp"),
    width: 48,
    height: 48,
    name: "战技",
  },
  ZeroArt: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/AT奖励_0驱动.webp"),
    width: 48,
    height: 48,
    name: "战技",
  },
  CP10: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/AT奖励_CP+10.webp"),
    width: 48,
    height: 48,
    name: "CP+10",
  },
  CP50: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/AT奖励_CP+50.webp"),
    width: 48,
    height: 48,
    name: "CP+50",
  },
  CP100: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/AT奖励_CP+100.webp"),
    width: 48,
    height: 48,
    name: "CP+100",
  },
  CPLost: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/AT奖励_CP清零.webp"),
    width: 48,
    height: 48,
    name: "CP清零",
  },
  EP10: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/AT奖励_EP+10.webp"),
    width: 48,
    height: 48,
    name: "EP+10%",
  },
  EP50: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/AT奖励_EP+50.webp"),
    width: 48,
    height: 48,
    name: "EP+50%",
  },
  HP10: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/AT奖励_HP+10.webp"),
    width: 48,
    height: 48,
    name: "HP+10%",
  },
  HP50: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/AT奖励_HP+50.webp"),
    width: 48,
    height: 48,
    name: "HP+50%",
  },
  Critical: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/AT奖励_暴击.webp"),
    width: 48,
    height: 48,
    name: "暴击",
  },
  Dead: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/AT奖励_即死.webp"),
    width: 48,
    height: 48,
    name: "即死",
  },
  Vanish: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/AT奖励_消失.webp"),
    width: 48,
    height: 48,
    name: "消失",
  },
  Sepith: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/AT奖励_耀晶片.webp"),
    width: 48,
    height: 48,
    name: "耀晶片",
  },
  BadAttack: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/AT奖励_负面状态.webp"),
    width: 48,
    height: 48,
    name: "负面状态",
  },
};
const GetIcon = (name) => {
  const keys = Object.keys(AT_BONUS_ICONS);
  const names = Object.values(AT_BONUS_ICONS).map((i) => i.name);
  let result = null;
  if (!keys.includes(name) && !names.includes(name)) {
    DEBUG &&
      console.error("ATBonus.js, GetIcon() 未找到对应AT奖励图标: ", {
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
DEBUG && console.log("ATBonus.js, input: ", input);
return GetATBonusIcon(name);
