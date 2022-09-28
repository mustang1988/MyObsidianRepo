const DEBUG = false;
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
const GetIcon = async (name, category) => {
  return await dv.view("CharacterIcon", {
    name,
    options: { category, raw: true },
  });
};
const GetDisplaySize = (icon, size) => {
  const { width, height } = icon;
  return Math.round((width * size) / height);
};
const ToHTML = async (info, options) => {
  DEBUG && console.log("BuildHTML => ", { info, options });
  const {
    Character,
    file: { link },
  } = info;
  const { size, category } = options;
  const icon = await GetIcon(Character, category);
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
const RenderCharacterInfo = async (info, options) => {
  const { raw } = options;
  const infoObject = dv.page(info.path || info.file.path);
  raw
    ? await ToHTML(infoObject, options)
    : dv.span(ToHTML(infoObject, options));
};
const RenderCharacterInfos = async (infos, options) => {
  const { raw } = options;
  infos = infos.map((i) => dv.page(i.path || i.file.path));
  const { inline, seperator } = options;
  let HTML = "";
  if (inline) {
    HTML = await Promise.all(infos.map((i) => ToHTML(i, options))).join(
      seperator
    );
  } else {
    HTML = await Promise.all(infos.map((i) => ToHTML(i, options)));
  }
  return raw ? HTML : inline ? dv.span(HTML) : dv.list(HTML);
};
const { info, options } = input;
DEBUG && console.log("渲染人物信息, 参数: ", { info, options });
return Array.isArray(info)
  ? RenderCharacterInfos(info, MergeOptions(options))
  : RenderCharacterInfo(info, MergeOptions(options));
