const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 15,
  raw: true,
};
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetArt = (link) => {
  const { path, subpath } = link;
  const [art = null] = dv.page(path).Arts.filter((a) => a.ID === subpath);
  if (art === null) {
    DEBUG &&
      console.error(
        "\t[导力魔法Admonition渲染][Views/Art/Admonition/view.js][GetArtLink()][未找到指定ID的导力魔法]:\n\t",
        { path, subpath, link }
      );
    return art;
  }
  return {
    art,
    link: dv.blockLink(path, subpath, false, art.Name),
  };
};
const GetIconSrc = (file) => `app://local/${this.app.vault.adapter.basePath}/${file.path}`;
const GetIconWidth = (width, height, target) =>
  Math.round((width * target) / height);
const GetElementIcon = async (element, size) => {
  return dv
    .view("Icons/Icon", { key: `Element.${element}`, options: { raw: true } })
    .then((icon) => {
      if (icon === null) {
        console.error(
          "\t[导力魔法InLine渲染][Views/Art/Admonition/view.js][GetElementIcon()][未找到指定元素的图标]:\n\t",
          element
        );
        return "";
      }
      const { File: file, Width: width, Height: height } = icon;
      console.debug(
        "\t[导力魔法InLine渲染][Views/Art/Admonition/view.js][GetElementIcon()][icon]:\n\t",
        icon
      );
      return `<img src="${GetIconSrc(file)}" width="${GetIconWidth(
        width,
        height,
        size
      )}" />`;
    });
};
// ===== Begin =====
let { link, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.debug("[导力魔法InLine渲染][Views/Art/InLine/view.js][Input]:\n", {
    link,
    options,
  });
const { art, link: artLink } = GetArt(link);
const { raw, size } = options;
const inline = GetElementIcon(art.Element, size).then((icon) => {
  if (icon === null) {
    return "";
  }
  return `${icon} ${artLink}`;
});
return raw ? inline : dv.span(inline);
