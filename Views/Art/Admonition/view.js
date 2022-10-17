/**
 * 以Admonition格式渲染导力魔法
 * @params {Object} art 需要渲染的导力魔法
 * @params {String} art.ID 需要渲染的导力魔法在数据库md文件中的ID, 对应其在数据库文件中的渲染锚点的block ID
 * @params {Object} options 可选配置参数
 * @params {String} options.collapse Admonition展开状态, 可选值: "open": 展开, "close": 收起, "none": 展开, 但不支持收起. 默认值: "open".
 * @params {String} options.db 导力魔法数据库md文件路径, 默认值: "游戏攻略/英雄传说 闪之轨迹/数据库/导力魔法".
 * @params {Boolean} options.raw 是否返回渲染元素, true: 返回渲染的HTML/Markdown元素, false: 不返回需要渲染的元素, 直接使用Dataview进行渲染.
 */
// ===== Constraints =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  collapse: "open",
  raw: true,
  db: "游戏攻略/英雄传说 闪之轨迹/数据库/导力魔法",
};
// ===== Functions =====
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetElementIcon = async (element) => {
  return dv
    .view("Icons/Icon", { key: `Element.${element}`, options: { raw: true } })
    .then((icon) => {
      if (icon === undefined) {
        console.error(
          "\t[导力魔法Admonition渲染][Views/Art/Admonition/view.js][GetElementIcon()][未找到指定元素的图标]:\n\t",
          element
        );
        return "";
      }
      console.debug(
        "\t[导力魔法Admonition渲染][Views/Art/Admonition/view.js][GetElementIcon()][icon]:\n\t",
        icon
      );
      const { File: file, Width: width, Height: height } = icon;
      return dv
        .view("Common/Image/Resize", {
          width,
          height,
          options: { raw: true, size: 15 },
        })
        .then((w) => {
          console.debug(
            "\t[导力魔法Admonition渲染][Views/Art/Admonition/view.js][GetElementIcon()][w]:\n\t",
            w
          );
          return dv
            .view("Common/Image/Path", { file, options: { raw: true } })
            .then((path) => {
              console.debug(
                "\t[导力魔法Admonition渲染][Views/Art/Admonition/view.js][GetElementIcon()][path]:\n\t",
                path
              );
              return `<img src="${path}" width="${w}" />`;
            });
        });
    });
};
// ===== Begin =====
let { art, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.debug(
    "[导力魔法Admonition渲染][Views/Art/Admonition/view.js][Input]:\n",
    {
      art,
      options,
    }
  );
const { raw, collapse, db } = options;

const adm = dv
  .view("Common/Query/ID", { id: art.ID, db, options })
  .then(({ item: artData, link: artLink }) => {
    if (artData === null) {
      console.error(
        "[导力魔法Admonition渲染][Views/Art/Admonition/view.js][artData][未找到指定魔法的数据]:\n",
        {
          art,
          options,
        }
      );
      return "";
    }
    const { Element, Type, Range, Effects, Comment } = artData;
    return GetElementIcon(Element).then((iconImg) => {
      return `\`\`\`ad-art
title: ${artLink}
collapse: ${collapse}

${iconImg} ${Type} : ${Range} ${Effects ? Effects.join(" ") : ""}

${Comment}

\`\`\``;
    });
  });
console.debug(
  "[导力魔法Admonition渲染][Views/Art/Admonition/view.js][Return]:\n",
  adm
);
return raw ? adm : dv.span(adm);
