const DEBUG = false;

const FISH_ICONS = {
  ColdSteel: {
    鳌虾: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/鳌虾.webp"
      ),
      width: 82,
      height: 72,
    },
    冰霜鳌虾: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/冰霜螯虾.webp"
      ),
      width: 82,
      height: 72,
    },
    大口鲈鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/大口鲈鱼.webp"
      ),
      width: 82,
      height: 72,
    },
    大山椒鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/大山椒鱼.webp"
      ),
      width: 82,
      height: 72,
    },
    鲑鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/鲑鱼.webp"
      ),
      width: 82,
      height: 72,
    },
    黑鲑: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/黑鲑.webp"
      ),
      width: 82,
      height: 72,
    },
    虹鳟鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/虹鳟鱼.webp"
      ),
      width: 82,
      height: 72,
    },
    花蟹: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/花蟹.webp"
      ),
      width: 82,
      height: 72,
    },
    金鲑: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/金鲑.webp"
      ),
      width: 82,
      height: 72,
    },
    金龙鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/金龙鱼.webp"
      ),
      width: 82,
      height: 72,
    },
    巨鲶: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/巨鲶.webp"
      ),
      width: 82,
      height: 72,
    },
    巨刃鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/巨刃鱼.webp"
      ),
      width: 82,
      height: 72,
    },
    巨血蟹: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/巨血蟹.webp"
      ),
      width: 82,
      height: 72,
    },
    鲤鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/鲤鱼.webp"
      ),
      width: 82,
      height: 72,
    },
    鳗鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/鳗鱼.webp"
      ),
      width: 82,
      height: 72,
    },
    刃鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/刃鱼.webp"
      ),
      width: 82,
      height: 72,
    },
    山椒鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/山椒鱼.webp"
      ),
      width: 82,
      height: 72,
    },
    亚诺鲁鲫鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/亚诺鲁鲫鱼.webp"
      ),
      width: 82,
      height: 72,
    },
    岩穴鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/岩穴鱼.webp"
      ),
      width: 82,
      height: 72,
    },
    银伞鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/银伞鱼.png"
      ),
      width: 85,
      height: 78,
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
  DEBUG && console.log("GetIcon, args => ", { name, category });
  const checkCategory = Object.keys(FISH_ICONS).includes(category);
  DEBUG && console.log("GetIcon, checkCategory => ", checkCategory);
  if (checkCategory) {
    const icon = Object.keys(FISH_ICONS[category]).includes(name)
      ? FISH_ICONS[category][name]
      : null;
    DEBUG && console.log("GetIcon, checkCategory true, return => ", icon);
    return icon;
  }
  DEBUG && console.log("GetIcon, checkCategory false, return => ", null);
  return null;
};

const GetDisplaySize = (icon, size) => {
  const { width, height } = icon;
  return Math.round((width * size) / height);
};

const ToHTML = (fish, options) => {
  const {
    Name,
    file: { link, path },
  } = fish;
  const { size, category } = options;
  const icon = GetIcon(Name, category);
  if (icon) {
    return `<img width="${GetDisplaySize(icon, size)}" src="${
      this.app.vault.adapter.basePath
    }/${icon.file.path}" /> ${link}`;
  } else {
    DEBUG && console.error(fish);
    return "";
  }
};

const RenderFish = (fish, options) => {
  const { raw } = options;
  const fishObject = dv.page(fish.path || fish.file.path);
  return raw
    ? ToHTML(fishObject, options)
    : dv.span(ToHTML(fishObject, options));
};

const RenderFishes = (fishes, options) => {
  const { raw } = options;
  fishes = fishes.map((f) => dv.page(f.path || f.file.path));
  const { inline, seperator } = options;
  const HTML = inline
    ? fishes.map((f) => ToHTML(f, options)).join(seperator)
    : fishes.map((f) => ToHTML(f, options));
  return raw ? HTML : inline ? dv.span(HTML) : dv.list(HTML);
};

const { fish, options } = input;
DEBUG && console.log("Fish.js, Input => ", input);
return Array.isArray(fish)
  ? RenderFishes(fish, MergeOptions(options))
  : RenderFish(fish, MergeOptions(options));
