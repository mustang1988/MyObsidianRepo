/**
 * Buff 图标
 */
const DEBUG = false;
const BUFF_ICONS = {
  STRUpS: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_STR+.webp"),
    width: 41,
    height: 41,
    name: "STR+",
  },
  STRUpM: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_STR++.webp"),
    width: 41,
    height: 41,
    name: "STR++",
  },
  STRUpL: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_STR+++.webp"),
    width: 41,
    height: 41,
    name: "STR+++",
  },
  DEFUpS: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_DEF+.webp"),
    width: 41,
    height: 41,
    name: "DEF+",
  },
  DEFUpM: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_DEF++.webp"),
    width: 41,
    height: 41,
    name: "DEF++",
  },
  DEFUpL: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_DEF+++.webp"),
    width: 41,
    height: 41,
    name: "DEF+++",
  },
  ATSUpS: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_ATS+.webp"),
    width: 41,
    height: 41,
    name: "ATS+",
  },
  ATSUpM: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_ATS++.webp"),
    width: 41,
    height: 41,
    name: "ATS++",
  },
  ATSUpL: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_ATS+++.webp"),
    width: 41,
    height: 41,
    name: "ATS+++",
  },
  ADFUpS: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_ADF+.webp"),
    width: 41,
    height: 41,
    name: "ADF+",
  },
  ADFUpM: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_ADF++.webp"),
    width: 41,
    height: 41,
    name: "ADF++",
  },
  ADFUpL: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_ADF+++.webp"),
    width: 41,
    height: 41,
    name: "ADF+++",
  },
  SPDUpS: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_SPD+.webp"),
    width: 41,
    height: 41,
    name: "SPD+",
  },
  SPDUpM: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_SPD++.webp"),
    width: 41,
    height: 41,
    name: "SPD++",
  },
  SPDUpL: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_SPD+++.webp"),
    width: 41,
    height: 41,
    name: "SPD+++",
  },
  MOVUpS: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_MOV+.webp"),
    width: 41,
    height: 41,
    name: "MOV+",
  },
  MOVUpM: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_MOV++.webp"),
    width: 41,
    height: 41,
    name: "MOV++",
  },
  MOVUpL: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_MOV+++.webp"),
    width: 41,
    height: 41,
    name: "MOV+++",
  },
  Stealth: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_隐身.webp"),
    width: 41,
    height: 41,
    name: "隐身",
  },
  Insight: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_心眼.webp"),
    width: 41,
    height: 41,
    name: "心眼",
  },
  Unleash: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_觉醒.webp"),
    width: 41,
    height: 41,
    name: "觉醒",
  },
  Guard: {
    file: dv.fileLink(
      "图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_完全防御.webp"
    ),
    width: 41,
    height: 41,
    name: "完全防御",
  },
  CraftGuard: {
    file: dv.fileLink(
      "图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_物理免疫.webp"
    ),
    width: 41,
    height: 41,
    name: "物理免疫",
  },
  Reflect: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_反弹.webp"),
    width: 41,
    height: 41,
    name: "反弹",
  },
  ArtReflect: {
    file: dv.fileLink(
      "图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_魔法反弹.webp"
    ),
    width: 41,
    height: 41,
    name: "魔法反弹",
  },
  CraftReflect: {
    file: dv.fileLink(
      "图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_物理反弹.webp"
    ),
    width: 41,
    height: 41,
    name: "物理反弹",
  },
  HPUp: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_HP回复.webp"),
    width: 41,
    height: 41,
    name: "HP回复",
  },
  CPUp: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_BUFF_CP回复.webp"),
    width: 41,
    height: 41,
    name: "CP回复",
  },
};
const GetBuffIcon = (name) => {
  DEBUG && console.log("BuffIcon.js, GetDebuffIcon() args: ", name);
  const keys = Object.keys(BUFF_ICONS);
  const names = Object.values(BUFF_ICONS).map((i) => i.name);
  let result = null;
  if (!keys.includes(name) && !names.includes(name)) {
    DEBUG &&
      console.error("BuffIcon.js, GetBuffIcon() 未找到对应buff图标: ", {
        name,
      });
  } else if (keys.includes(name)) {
    result = BUFF_ICONS[name];
  } else if (names.includes(name)) {
    for (const i of Object.values(BUFF_ICONS)) {
      if (i.name === name) {
        result = i;
        break;
      }
    }
  }
  DEBUG && console.log("BuffIcon.js, GetBuffIcon() return: ", result);
  return result;
};
const { name } = input;
DEBUG && console.log("BuffIcon.js, input: ", input);
return GetBuffIcon(name);
