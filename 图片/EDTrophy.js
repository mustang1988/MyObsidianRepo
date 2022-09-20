const DEBUG = false;

const TrophyIcons = {
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
      file: dv.fileLink("图片/游戏攻略/英雄传说/英雄传说 创之轨迹/奖杯/金.webp"),
      width: 240,
      height: 240,
    },
    Silver: {
      file: dv.fileLink("图片/游戏攻略/英雄传说/英雄传说 创之轨迹/奖杯/银.webp"),
      width: 240,
      height: 240,
    },
    Bronze: {
      file: dv.fileLink("图片/游戏攻略/英雄传说/英雄传说 创之轨迹/奖杯/铜.webp"),
      width: 240,
      height: 240,
    },
  },
};

const DefaultOptions = {
  size: 20,
  category: "ColdSteel",
  mode: "inline",
  seperator: " , ",
};

const MergeOptions = (options) => {
  return Object.assign(DefaultOptions, options);
};

const GetIcon = (name, category) => {
  const checkCategory = Object.keys(TrophyIcons).includes(category);
  if (checkCategory) {
    return Object.keys(TrophyIcons[category]).includes(name)
      ? TrophyIcons[category][name]
      : null;
  }
  return null;
};

const GetTrophyType = (trophyObject) => {
  DEBUG && console.log("GetTrophyType, args: ", trophyObject);
  const tags = trophyObject.file.etags;
  const [tag] = tags.filter((t) => t.includes("奖杯"));
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

const BuildHTML = (trophyObject, options) => {
  const {
    file: { link },
  } = trophyObject;
  const { size, category } = options;
  const icon = GetIcon(GetTrophyType(trophyObject), category);
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
  const trophyObject = dv.page(trophy.path || trophy.file.path);
  dv.paragraph(BuildHTML(trophyObject, options));
};

const RenderTrophies = (tropjy, options) => {
  tropjy = tropjy.map((t) => dv.page(t.path || t.file.path));
  const { mode, seperator } = options;
  mode === "inline"
    ? dv.paragraph(tropjy.map((t) => BuildHTML(t, options)).join(seperator))
    : mode === "list"
    ? dv.list(tropjy.map((t) => BuildHTML(t, options)))
    : dv.table(
        [],
        tropjy.map((t) => [BuildHTML(t, options)])
      );
};

const { trophy, options } = input;
Array.isArray(trophy)
  ? RenderTrophies(trophy, MergeOptions(options))
  : RenderTrophy(trophy, MergeOptions(options));
