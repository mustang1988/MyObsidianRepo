const DEBUG = true;
const TROPHY_ICONS = {
  Platinum: {
    file: dv.fileLink("图片/白金奖杯.png"),
    width: 60,
    height: 64,
  },
  Gold: {
    file: dv.fileLink("图片/白金奖杯.png"),
    width: 60,
    height: 64,
  },
  Silver: {
    file: dv.fileLink("图片/白金奖杯.png"),
    width: 60,
    height: 64,
  },
  Bronze: {
    file: dv.fileLink("图片/白金奖杯.png"),
    width: 60,
    height: 64,
  },
};
const DEFAULT_OPTIONS = {
  size: 20,
  inline: true,
  seperator: " , ",
  raw: false,
};
const DEFAULT_INNER_ICON_SIZE = 240;

const MergeOptions = (options) => {
  return Object.assign(DEFAULT_OPTIONS, options);
};

const GetIcon = (name) => {
  return Object.keys(TROPHY_ICONS).includes(name) ? TROPHY_ICONS[name] : null;
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

const GetInnerIcon = (trophy) => {
  const { Icon = null } = trophy;
  if (Icon) {
    return {
      file: dv.fileLink(Icon.path),
      width: DEFAULT_INNER_ICON_SIZE,
      height: 240,
    };
  }
  return null;
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
  const { size } = options;
  const icon =
    GetInnerIcon(trophyObject) || GetIcon(GetTrophyType(trophyObject));
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
  const result = raw
    ? ToHTML(trophyObject, options)
    : dv.span(ToHTML(trophyObject, options));
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

const { trophy = null, trophies = null, options } = input;
DEBUG && console.debug("Trophy, args: ", input);
return trophy
  ? RenderTrophy(trophy, MergeOptions(options))
  : trophies && trophies.length > 0
  ? RenderTrophies(trophy, MergeOptions(options))
  : "";
