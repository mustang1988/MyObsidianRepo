const DEBUG = false;

const CHARACTER_ICONS = {
  ColdSteel: {
    艾德尔: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/艾德尔.webp"
      ),
      width: 176,
      height: 148,
    },
    艾伦: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/艾伦.webp"
      ),
      width: 176,
      height: 148,
    },
    艾略特: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/艾略特.webp"
      ),
      width: 176,
      height: 148,
    },
    艾玛: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/艾玛.webp"
      ),
      width: 176,
      height: 148,
    },
    爱蜜莉: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/爱蜜莉.webp"
      ),
      width: 176,
      height: 148,
    },
    安洁莉卡: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/安洁莉卡.webp"
      ),
      width: 176,
      height: 148,
    },
    宝菈: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/宝菈.webp"
      ),
      width: 176,
      height: 148,
    },
    贝莉尔: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/贝莉尔.webp"
      ),
      width: 176,
      height: 148,
    },
    贝琪: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/贝琪.webp"
      ),
      width: 176,
      height: 148,
    },
    碧翠丝教官: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/碧翠丝.webp"
      ),
      width: 156,
      height: 130,
    },
    布莱希特: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/布莱希特.webp"
      ),
      width: 176,
      height: 148,
    },
    梵戴克学院长: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/梵戴克.webp"
      ),
      width: 156,
      height: 130,
    },
    菲: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/菲.webp"
      ),
      width: 176,
      height: 148,
    },
    菲莉丝: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/菲莉丝.webp"
      ),
      width: 176,
      height: 148,
    },
    弗列妲: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/弗列妲.webp"
      ),
      width: 176,
      height: 148,
    },
    盖乌斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/盖乌斯.webp"
      ),
      width: 176,
      height: 148,
    },
    海贝尔: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/海贝尔.webp"
      ),
      width: 176,
      height: 148,
    },
    亨利主任: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/亨利主任.webp"
      ),
      width: 176,
      height: 148,
    },
    贾斯柏: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/贾斯柏.webp"
      ),
      width: 176,
      height: 148,
    },
    科蕾特: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/科蕾特.webp"
      ),
      width: 176,
      height: 148,
    },
    克莱菈: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/克莱菈.webp"
      ),
      width: 176,
      height: 148,
    },
    克连: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/克连.webp"
      ),
      width: 176,
      height: 148,
    },
    克洛: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/克洛.webp"
      ),
      width: 176,
      height: 148,
    },
    肯尼斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/肯尼斯.webp"
      ),
      width: 176,
      height: 148,
    },
    兰伯特: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/兰伯特.webp"
      ),
      width: 176,
      height: 148,
    },
    劳拉: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/劳拉.webp"
      ),
      width: 176,
      height: 148,
    },
    雷克斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/雷克斯.webp"
      ),
      width: 176,
      height: 148,
    },
    黎恩: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/黎恩.webp"
      ),
      width: 176,
      height: 148,
    },
    琳黛: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/琳黛.webp"
      ),
      width: 176,
      height: 148,
    },
    罗金斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/罗金斯.webp"
      ),
      width: 176,
      height: 148,
    },
    萝德: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/萝德.webp"
      ),
      width: 176,
      height: 148,
    },
    萝西努: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/萝西努.webp"
      ),
      width: 176,
      height: 148,
    },
    马卡洛夫教官: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/马卡洛夫.webp"
      ),
      width: 176,
      height: 148,
    },
    马奇亚斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/马奇亚斯.webp"
      ),
      width: 176,
      height: 148,
    },
    玛格丽特: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/玛格丽特.webp"
      ),
      width: 176,
      height: 148,
    },
    玛丽教官: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/玛丽教官.webp"
      ),
      width: 176,
      height: 148,
    },
    孟亨: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/孟亨.webp"
      ),
      width: 176,
      height: 148,
    },
    米莉亚姆: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/米莉亚姆.webp"
      ),
      width: 176,
      height: 148,
    },
    敏特: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/敏特.webp"
      ),
      width: 176,
      height: 148,
    },
    莫妮卡: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/莫妮卡.webp"
      ),
      width: 176,
      height: 148,
    },
    奈特哈尔教官: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/奈特哈尔.webp"
      ),
      width: 176,
      height: 148,
    },
    尼可拉斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/尼可拉斯.webp"
      ),
      width: 176,
      height: 148,
    },
    派崔克: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/派崔克.webp"
      ),
      width: 176,
      height: 148,
    },
    裴德烈: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/裴德烈.webp"
      ),
      width: 176,
      height: 148,
    },
    乔治: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/乔治.webp"
      ),
      width: 176,
      height: 148,
    },
    瑟雷斯坦管家: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/瑟雷斯坦.webp"
      ),
      width: 176,
      height: 148,
    },
    莎拉教官: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/莎拉.webp"
      ),
      width: 176,
      height: 148,
    },
    莎莉法: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/莎莉法.webp"
      ),
      width: 176,
      height: 148,
    },
    史提芬: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/史提芬.webp"
      ),
      width: 176,
      height: 148,
    },
    泰蕾莎: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/泰蕾莎.webp"
      ),
      width: 176,
      height: 148,
    },
    汤玛斯教官: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/汤玛斯.webp"
      ),
      width: 176,
      height: 148,
    },
    桃乐丝: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/桃乐丝.webp"
      ),
      width: 176,
      height: 148,
    },
    托娃: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/托娃.webp"
      ),
      width: 176,
      height: 148,
    },
    薇薇: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/薇薇.webp"
      ),
      width: 176,
      height: 148,
    },
    文森: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/文森.webp"
      ),
      width: 176,
      height: 148,
    },
    雪伦: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/雪伦.webp"
      ),
      width: 176,
      height: 148,
    },
    亚莉莎: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/亚莉莎.webp"
      ),
      width: 176,
      height: 148,
    },
    尤西斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/尤西斯.webp"
      ),
      width: 176,
      height: 148,
    },
    雨果: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/雨果.webp"
      ),
      width: 176,
      height: 148,
    },
  },
  ColdSteelII: {},
  ColdSteelIII: {},
  ColdSteelIV: {},
  Reverie: {},
};

const DEFAULT_OPTIONS = {
  size: 20,
  category: "ColdSteel",
  inline: false,
  seperator: " , ",
  raw: false,
};

const MergeOptions = (options) => {
  return Object.assign(DEFAULT_OPTIONS, options);
};

const GetIcon = (name, category) => {
  const checkCategory = Object.keys(CHARACTER_ICONS).includes(category);
  DEBUG && console.log("GetIcon => ", { checkCategory });
  if (checkCategory) {
    DEBUG && console.log("GetIcon => ", CHARACTER_ICONS[category][name], name);
    return Object.keys(CHARACTER_ICONS[category]).includes(name)
      ? CHARACTER_ICONS[category][name]
      : null;
  }
  return null;
};

const GetDisplaySize = (icon, size) => {
  const { width, height } = icon;
  return Math.round((width * size) / height);
};

const ToHTML = (info, options) => {
  DEBUG && console.log("BuildHTML => ", { info, options });
  const {
    Character,
    file: { link },
  } = info;
  const { size, category } = options;
  const icon = GetIcon(Character, category);
  DEBUG && console.log("BuildHTML => ", { icon });
  if (icon) {
    return `<img width="${GetDisplaySize(icon, size)}" src="${
      this.app.vault.adapter.basePath
    }/${icon.file.path}" /> ${link}`;
  } else {
    DEBUG && console.error({ info, options });
    return "";
  }
};

const RenderCharacterInfo = (info, options) => {
  const { raw } = options;
  const infoObject = dv.page(info.path || info.file.path);
  raw ? ToHTML(infoObject, options) : dv.span(ToHTML(infoObject, options));
};

const RenderCharacterInfos = (infos, options) => {
  const { raw } = options;
  infos = infos.map((i) => dv.page(i.path || i.file.path));
  const { inline, seperator } = options;
  const HTML = inline
    ? infos.map((i) => ToHTML(i, options)).join(seperator)
    : infos.map((i) => ToHTML(i, options));
  return raw ? HTML : inline ? dv.span(HTML) : dv.list(HTML);
};

const { info, options } = input;
DEBUG && console.log(Object.keys(CHARACTER_ICONS["ColdSteel"]).length);
return Array.isArray(info)
  ? RenderCharacterInfos(info, MergeOptions(options))
  : RenderCharacterInfo(info, MergeOptions(options));
