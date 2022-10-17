/**
 * 以行内格式渲染导力魔法
 * @params {Object} link 导力魔法在其数据库文档中的块级连接路径
 * @params {String} link.path 导力魔法数据库文档路径
 * @params {String} link.subpath 导力魔法在其数据库文档中的block ID
 * @params {Object} options 可选配置参数
 * @params {Number} options.size 可选参数, 渲染的连接图标的尺寸, 单位像素, 默认值: 15
 * @params {Boolean} options.raw 是否返回渲染元素, true: 返回渲染的HTML/Markdown元素, false: 不返回需要渲染的元素, 直接使用Dataview进行渲染.
 */
// ===== Constraints =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 15,
  html: false,
  raw: true,
};
// ===== Functions =====
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
      return dv
        .view("Common/ImgSize", { width, height, size, options })
        .then((w) => {
          console.debug(
            "\t[导力魔法InLine渲染][Views/Art/Admonition/view.js][GetElementIcon()][w]:\n\t",
            w
          );
          return dv.view("Common/ImgPath", { file, options }).then((path) => {
            console.debug(
              "\t[导力魔法InLine渲染][Views/Art/Admonition/view.js][GetElementIcon()][path]:\n\t",
              icon
            );
            return `<img src="${path}" width="${w}" />`;
          });
        });
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

const inline = dv
  .view("Common/Link", { link, options })
  .then(({ item: artData, link: artLink }) => {
    if (artData === null) {
      return "";
    }
    return GetElementIcon(art.Element, size).then((icon) => {
      if (icon === null) {
        return "";
      }
      // return `${icon} ${artLink}`;
    });
  });
return raw ? inline : dv.span(inline);
