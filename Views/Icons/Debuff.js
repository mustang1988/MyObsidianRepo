const DEBUG = false;
const DEBUFF_ICONS = {
  Poison: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_中毒.webp"),
    width: 41,
    height: 41,
    name: "中毒",
  },
  Burn: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_炎伤.webp"),
    width: 41,
    height: 41,
    name: "炎伤",
  },
  Death: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_即死.webp"),
    width: 41,
    height: 41,
    name: "即死",
  },
  Seal: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_封技.webp"),
    width: 41,
    height: 41,
    name: "封技",
  },
  Freeze: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_冻结.webp"),
    width: 41,
    height: 41,
    name: "冻结",
  },
  Nightmare: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_噩梦.webp"),
    width: 41,
    height: 41,
    name: "噩梦",
  },
  Mute: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_封魔.webp"),
    width: 41,
    height: 41,
    name: "封魔",
  },
  Petrify: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_石化.webp"),
    width: 41,
    height: 41,
    name: "石化",
  },
  Delay: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_延迟.webp"),
    width: 41,
    height: 41,
    name: "延迟",
  },
  Blind: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_黑暗.webp"),
    width: 41,
    height: 41,
    name: "黑暗",
  },
  Faint: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_气绝.webp"),
    width: 41,
    height: 41,
    name: "气绝",
  },
  Vanish: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_消失.webp"),
    width: 41,
    height: 41,
    name: "消失",
  },
  Sleep: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_睡眠.webp"),
    width: 41,
    height: 41,
    name: "睡眠",
  },
  Confuse: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_混乱.webp"),
    width: 41,
    height: 41,
    name: "混乱",
  },
  SDown: {
    file: dv.fileLink(
      "图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_能力降低.webp"
    ),
    width: 41,
    height: 41,
    name: "能力降低",
  },
  LinkBreak: {
    file: dv.fileLink(
      "图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_断开LINK.webp"
    ),
    width: 41,
    height: 41,
    name: "断开连接",
  },
  Charm: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_魅惑.webp"),
    width: 39,
    height: 39,
    name: "魅惑",
  },
  Unbalance: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_BLN-.webp"),
    width: 41,
    height: 41,
    name: "失衡",
  },
  Weak: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_虚弱.webp"),
    width: 41,
    height: 41,
    name: "虚弱",
  },
  STRDownS: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_STR-.webp"),
    width: 41,
    height: 41,
    name: "STR-",
  },
  STRDownM: {
    file: dv.fileLink(
      "图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_STR--.webp"
    ),
    width: 41,
    height: 41,
    name: "STR--",
  },
  STRDownL: {
    file: dv.fileLink(
      "图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_STR---.webp"
    ),
    width: 41,
    height: 41,
    name: "STR---",
  },
  DEFDownS: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_DEF-.webp"),
    width: 41,
    height: 41,
    name: "DEF-",
  },
  DEFDownM: {
    file: dv.fileLink(
      "图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_DEF--.webp"
    ),
    width: 41,
    height: 41,
    name: "DEF--",
  },
  DEFDownL: {
    file: dv.fileLink(
      "图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_DEF---.webp"
    ),
    width: 41,
    height: 41,
    name: "DEF---",
  },
  ATSDownS: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_ATS-.webp"),
    width: 41,
    height: 41,
    name: "ATS-",
  },
  ATSDownM: {
    file: dv.fileLink(
      "图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_ATS--.webp"
    ),
    width: 41,
    height: 41,
    name: "ATS--",
  },
  ATSDownL: {
    file: dv.fileLink(
      "图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_ATS---.webp"
    ),
    width: 41,
    height: 41,
    name: "ATS---",
  },
  ADFDownS: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_ADF-.webp"),
    width: 41,
    height: 41,
    name: "ADF-",
  },
  ADFDownM: {
    file: dv.fileLink(
      "图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_ADF--.webp"
    ),
    width: 41,
    height: 41,
    name: "ADF--",
  },
  ADFDownL: {
    file: dv.fileLink(
      "图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_ADF---.webp"
    ),
    width: 41,
    height: 41,
    name: "ADF---",
  },
  MOVDownS: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_MOV-.webp"),
    width: 41,
    height: 41,
    name: "MOV-",
  },
  MOVDownM: {
    file: dv.fileLink(
      "图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_MOV--.webp"
    ),
    width: 41,
    height: 41,
    name: "MOV--",
  },
  MOVDownL: {
    file: dv.fileLink(
      "图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_MOV---.webp"
    ),
    width: 41,
    height: 41,
    name: "MOV---",
  },
  SPDDownS: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_SPD-.webp"),
    width: 41,
    height: 41,
    name: "SPD-",
  },
  SPDDownM: {
    file: dv.fileLink(
      "图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_SPD--.webp"
    ),
    width: 41,
    height: 41,
    name: "SPD--",
  },
  SPDDownL: {
    file: dv.fileLink(
      "图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_SPD---.webp"
    ),
    width: 41,
    height: 41,
    name: "SPD---",
  },
};
const GetIcon = (name) => {
  const keys = Object.keys(DEBUFF_ICONS);
  const names = Object.values(DEBUFF_ICONS).map((i) => i.name);
  let result = null;
  if (!keys.includes(name) && !names.includes(name)) {
    DEBUG &&
      console.error("Debuff.js, GetIcon() 未找到对应debuff图标: ", {
        name,
      });
  } else if (keys.includes(name)) {
    result = DEBUFF_ICONS[name];
  } else if (names.includes(name)) {
    for (const i of Object.values(DEBUFF_ICONS)) {
      if (i.name === name) {
        result = i;
        break;
      }
    }
  }
  return result;
};
const GetDebuffIcon = (name) => {
  return Array.isArray(name) ? name.map((n) => GetIcon(n)) : GetIcon(name);
};
const { name } = input;
DEBUG && console.log("Debuff.js, input: ", input);
return GetDebuffIcon(name);
