const DEBUG = false;

const CharacterIcons = {
  ColdSteel: {
    艾德尔: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/艾德尔.webp"
      ),
      width: 256,
      height: 256,
    },
    艾伦: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/艾伦.webp"
      ),
      width: 256,
      height: 256,
    },
    艾略特: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/艾略特.webp"
      ),
      width: 256,
      height: 256,
    },
    艾玛: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/艾玛.webp"
      ),
      width: 256,
      height: 256,
    },
    爱蜜莉: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/爱蜜莉.webp"
      ),
      width: 256,
      height: 256,
    },
    安洁莉卡: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/安洁莉卡.webp"
      ),
      width: 256,
      height: 256,
    },
    宝菈: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/宝菈.webp"
      ),
      width: 256,
      height: 256,
    },
    贝莉尔: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/贝莉尔.webp"
      ),
      width: 256,
      height: 256,
    },
    贝琪: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/贝琪.webp"
      ),
      width: 256,
      height: 256,
    },
    碧翠丝教官: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/碧翠丝.webp"
      ),
      width: 256,
      height: 256,
    },
    布莱希特: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/布莱希特.webp"
      ),
      width: 256,
      height: 256,
    },
    梵戴克学院长: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/梵戴克.webp"
      ),
      width: 256,
      height: 256,
    },
    菲: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/菲.webp"
      ),
      width: 256,
      height: 256,
    },
    菲莉丝: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/菲莉丝.webp"
      ),
      width: 256,
      height: 256,
    },
    弗列妲: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/弗列妲.webp"
      ),
      width: 256,
      height: 256,
    },
    盖乌斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/盖乌斯.webp"
      ),
      width: 256,
      height: 256,
    },
    海贝尔: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/海贝尔.webp"
      ),
      width: 256,
      height: 256,
    },
    亨利主任: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/亨利主任.webp"
      ),
      width: 256,
      height: 256,
    },
    贾斯柏: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/贾斯柏.webp"
      ),
      width: 256,
      height: 256,
    },
    科蕾特: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/科蕾特.webp"
      ),
      width: 256,
      height: 256,
    },
    克莱菈: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/克莱菈.webp"
      ),
      width: 256,
      height: 256,
    },
    克连: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/克连.webp"
      ),
      width: 256,
      height: 256,
    },
    克洛: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/克洛.webp"
      ),
      width: 256,
      height: 256,
    },
    肯尼斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/肯尼斯.webp"
      ),
      width: 256,
      height: 256,
    },
    兰伯特: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/兰伯特.webp"
      ),
      width: 256,
      height: 256,
    },
    劳拉: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/劳拉.webp"
      ),
      width: 256,
      height: 256,
    },
    雷克斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/雷克斯.webp"
      ),
      width: 256,
      height: 256,
    },
    黎恩: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/黎恩.webp"
      ),
      width: 256,
      height: 256,
    },
    琳黛: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/琳黛.webp"
      ),
      width: 256,
      height: 256,
    },
    罗金斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/罗金斯.webp"
      ),
      width: 256,
      height: 256,
    },
    萝德: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/萝德.webp"
      ),
      width: 256,
      height: 256,
    },
    萝西努: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/萝西努.webp"
      ),
      width: 256,
      height: 256,
    },
    马卡洛夫教官: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/马卡洛夫.webp"
      ),
      width: 256,
      height: 256,
    },
    马奇亚斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/马奇亚斯.webp"
      ),
      width: 256,
      height: 256,
    },
    玛格丽特: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/玛格丽特.webp"
      ),
      width: 256,
      height: 256,
    },
    玛丽教官: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/玛丽教官.webp"
      ),
      width: 256,
      height: 256,
    },
    孟亨: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/孟亨.webp"
      ),
      width: 256,
      height: 256,
    },
    米莉亚姆: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/米莉亚姆.webp"
      ),
      width: 256,
      height: 256,
    },
    敏特: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/敏特.webp"
      ),
      width: 256,
      height: 256,
    },
    莫妮卡: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/莫妮卡.webp"
      ),
      width: 256,
      height: 256,
    },
    奈特哈尔教官: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/奈特哈尔.webp"
      ),
      width: 256,
      height: 256,
    },
    尼可拉斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/尼可拉斯.webp"
      ),
      width: 256,
      height: 256,
    },
    派崔克: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/派崔克.webp"
      ),
      width: 256,
      height: 256,
    },
    裴德烈: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/裴德烈.webp"
      ),
      width: 256,
      height: 256,
    },
    乔治: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/乔治.webp"
      ),
      width: 256,
      height: 256,
    },
    瑟雷斯坦管家: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/瑟雷斯坦.webp"
      ),
      width: 256,
      height: 256,
    },
    莎拉教官: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/莎拉.webp"
      ),
      width: 256,
      height: 256,
    },
    莎莉法: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/莎莉法.webp"
      ),
      width: 256,
      height: 256,
    },
    史提芬: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/史提芬.webp"
      ),
      width: 256,
      height: 256,
    },
    泰蕾莎: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/泰蕾莎.webp"
      ),
      width: 256,
      height: 256,
    },
    汤玛斯教官: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/汤玛斯.webp"
      ),
      width: 256,
      height: 256,
    },
    桃乐丝: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/桃乐丝.webp"
      ),
      width: 256,
      height: 256,
    },
    托娃: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/托娃.webp"
      ),
      width: 256,
      height: 256,
    },
    薇薇: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/薇薇.webp"
      ),
      width: 256,
      height: 256,
    },
    文森: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/文森.webp"
      ),
      width: 256,
      height: 256,
    },
    雪伦: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/雪伦.webp"
      ),
      width: 256,
      height: 256,
    },
    亚莉莎: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/亚莉莎.webp"
      ),
      width: 256,
      height: 256,
    },
    尤西斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/尤西斯.webp"
      ),
      width: 256,
      height: 256,
    },
    雨果: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/雨果.webp"
      ),
      width: 256,
      height: 256,
    },
  },
  ColdSteelII: {},
  ColdSteelIII: {},
  ColdSteelIV: {},
  Reverie: {},
};

const DefaultOptions = {
  size: 20,
  category: "ColdSteel",
  inline: false,
  seperator: " , ",
};

const MergeOptions = (options) => {
  return Object.assign(DefaultOptions, options);
};

const GetIcon = (name, category) => {
  const checkCategory = Object.keys(CharacterIcons).includes(category);
  DEBUG && console.log("GetIcon => ", { checkCategory });
  if (checkCategory) {
    DEBUG && console.log("GetIcon => ", CharacterIcons[category][name], name);
    return Object.keys(CharacterIcons[category]).includes(name)
      ? CharacterIcons[category][name]
      : null;
  }
  return null;
};

const GetDisplaySize = (icon, size) => {
  const { width, height } = icon;
  return Math.round((width * size) / height);
};

const BuildHTML = (info, options) => {
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
    }/${icon.file.path}" />${link}`;
  } else {
    DEBUG && console.error({ info, options });
    return "";
  }
};

const RenderCharacterInfo = (info, options) => {
  const infoObject = dv.page(info.path || info.file.path);
  dv.paragraph(BuildHTML(infoObject, options));
};

const RenderCharacterInfos = (infos, options) => {
  infos = infos.map((i) => dv.page(i.path || i.file.path));
  const { inline, seperator } = options;
  inline
    ? dv.paragraph(infos.map((i) => BuildHTML(i, options)).join(seperator))
    : dv.list(infos.map((i) => BuildHTML(i, options)));
};

const { info, options } = input;
DEBUG && console.log(Object.keys(CharacterIcons["ColdSteel"]).length);
Array.isArray(info)
  ? RenderCharacterInfos(info, MergeOptions(options))
  : RenderCharacterInfo(info, MergeOptions(options));
