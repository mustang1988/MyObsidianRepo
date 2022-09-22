const DEBUG = false;

const ED_TROPHY_ICONS = {
  ColdSteel: {
    Platinum: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/奖杯/白金.png"
      ),
      width: 240,
      height: 240,
    },
    Gold: {
      file: dv.fileLink("图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/奖杯/金.png"),
      width: 240,
      height: 240,
    },
    Silver: {
      file: dv.fileLink("图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/奖杯/银.png"),
      width: 240,
      height: 240,
    },
    Bronze: {
      file: dv.fileLink("图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/奖杯/铜.png"),
      width: 240,
      height: 240,
    },
  },
  ColdSteelII: {
    Platinum: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/奖杯/白金.png"
      ),
      width: 240,
      height: 240,
    },
    Gold: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/奖杯/金.png"
      ),
      width: 240,
      height: 240,
    },
    Silver: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/奖杯/银.png"
      ),
      width: 240,
      height: 240,
    },
    Bronze: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/奖杯/铜.png"
      ),
      width: 240,
      height: 240,
    },
  },
  ColdSteelIII: {
    Platinum: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/奖杯/白金.png"
      ),
      width: 240,
      height: 240,
    },
    Gold: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/奖杯/金.png"
      ),
      width: 240,
      height: 240,
    },
    Silver: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/奖杯/银.png"
      ),
      width: 240,
      height: 240,
    },
    Bronze: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/奖杯/铜.png"
      ),
      width: 240,
      height: 240,
    },
  },
  ColdSteelIV: {
    Platinum: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/奖杯/白金.png"
      ),
      width: 240,
      height: 240,
    },
    Gold: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/奖杯/金.png"
      ),
      width: 240,
      height: 240,
    },
    Silver: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/奖杯/银.png"
      ),
      width: 240,
      height: 240,
    },
    Bronze: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/奖杯/铜.png"
      ),
      width: 240,
      height: 240,
    },
  },
  Reverie: {
    Platinum: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/奖杯/白金.webp"
      ),
      width: 240,
      height: 240,
    },
    Gold: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/奖杯/金.webp"
      ),
      width: 240,
      height: 240,
    },
    Silver: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/奖杯/银.webp"
      ),
      width: 240,
      height: 240,
    },
    Bronze: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/奖杯/铜.webp"
      ),
      width: 240,
      height: 240,
    },
  },
};

const DEFAULT_OPTIONS = {
  size: 20,
  category: "ColdSteel",
  inline: true,
  seperator: " , ",
  raw: false,
};

const MergeOptions = (options) => {
  return Object.assign(DEFAULT_OPTIONS, options);
};

const GetIcon = (name, category) => {
  const checkCategory = Object.keys(ED_TROPHY_ICONS).includes(category);
  if (checkCategory) {
    return Object.keys(ED_TROPHY_ICONS[category]).includes(name)
      ? ED_TROPHY_ICONS[category][name]
      : null;
  }
  return null;
};

const GetTrophyType = (trophyObject) => {
  DEBUG && console.log("GetTrophyType, args: ", trophyObject);
  const tags = trophyObject.file.etags;
  const [tag] = tags.filter((t) => t.includes("奖杯/"));
  const splitedTag = tag.split("/");
  const typeString = splitedTag[splitedTag.length - 1];
  switch (typeString) {
    case "白金":
      return "Platinum";
    case "金":
      return "Gold";
    case "银":
      return "Silver";
    case "铜":
      return "Bronze";
  }
};

const GetDisplaySize = (icon, size) => {
  const { width, height } = icon;
  return Math.round((width * size) / height);
};

const ToHTML = (trophyObject, options) => {
  DEBUG && console.debug("ToHTML, args: ", { trophyObject, options });
  const {
    file: { link },
  } = trophyObject;
  const { size, category } = options;
  const icon = GetIcon(GetTrophyType(trophyObject), category);
  DEBUG && console.debug("ToHTML, icon: ", icon);
  if (icon) {
    return `<img width="${GetDisplaySize(icon, size)}" src="${
      this.app.vault.adapter.basePath
    }/${icon.file.path}" /> ${link}`;
  } else {
    DEBUG && console.error("Icon not found: ", trophyObject);
    return "";
  }
};

const RenderTrophy = (trophy, options) => {
  DEBUG && console.debug("RenderTrophy, args: ", { trophy, options });
  const { raw } = options;
  const trophyObject = dv.page(trophy.path || trophy.file.path);
  const result = raw ? ToHTML(trophyObject, options) : dv.span(ToHTML(trophyObject, options));
  DEBUG && console.debug("RenderTrophy, return: ", result);
  return result;
};

const RenderTrophies = (trophies, options) => {
  trophies = trophies.map((t) => dv.page(t.path || t.file.path));
  const { inline, raw, seperator } = options;
  const HTML = inline
    ? trophies.map((t) => ToHTML(t, options)).join(seperator)
    : trophies.map((t) => ToHTML(t, options));
  return raw ? HTML : inline ? dv.span(HTML) : dv.list(HTML);
};

const { trophy, options } = input;
DEBUG && console.debug("EDTrophy, args: ", input);
return Array.isArray(trophy)
  ? RenderTrophies(trophy, MergeOptions(options))
  : RenderTrophy(trophy, MergeOptions(options));
