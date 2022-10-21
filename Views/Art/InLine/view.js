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
  raw: true,
};
// ===== Functions =====
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
/**
 * 获取指定属性的图标HTML
 * @param {String} element 魔法属性, 可选值: Earth, Water, Fire, Wind, Time, Space, Mirage
 * @param {Number} size 图标尺寸
 * @returns 图标HTML
 */
const GetElementIcon = async (element, options) => {
  return dv
    .view("Icons/Icon", { key: `Element.${element}`, options })
    .then((icon) => {
      if (icon === null) {
        DEBUG && console.error(
          "\t[导力魔法InLine渲染][Views/Art/Admonition/view.js][GetElementIcon()][未找到指定元素的图标]:\n\t",
          element
        );
        return "";
      }
      const { File: file, Width: width, Height: height } = icon;
      return dv
        .view("Common/Image/Resize", { width, height, options })
        .then((w) => {
          DEBUG && console.debug(
            "\t[导力魔法InLine渲染][Views/Art/Admonition/view.js][GetElementIcon()][w]:\n\t",
            w
          );
          return dv
            .view("Common/Image/Path", { file, options })
            .then((path) => {
              DEBUG && console.debug(
                "\t[导力魔法InLine渲染][Views/Art/Admonition/view.js][GetElementIcon()][path]:\n\t",
                path
              );
              return `<img src="${path}" width="${w}" />`;
            });
        });
    });
};
// ===== Begin =====
let { link, options } = input;
options = MergeOptions(options);
DEBUG && console.debug("[导力魔法InLine渲染][Views/Art/InLine/view.js][Input]:\n", {
    link,
    options,
  });
const { raw, size } = options;
const inline = dv
  .view("Common/Query/Link", { link, options })
  .then(({ item: artData, link: artLink }) => {
    if (artData === null) {
      return "";
    }
    const { Element } = artData;
    return GetElementIcon(Element, options).then((icon) => {
      if (icon === null) {
        // 图标未找到
        return "";
      }
      return dv
        .view("Common/Link", {
          icon,
          link: artLink,
          options,
        })
        .then((res) => {
          DEBUG && console.debug("[导力魔法InLine渲染][Views/Art/InLine/view.js][Return]:\n", res);
          return res;
        });
    });
  });

return raw ? inline : dv.span(inline);
