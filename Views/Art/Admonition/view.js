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
const GetIconSrc = (file) => `app://local/${this.app.vault.adapter.basePath}/${file.path}`;
const GetIconWidth = (width, height, target) =>
  Math.round((width * target) / height);
const GetElementIcon = async (element) => {
  return dv
    .view("Icons/Icon", { key: `Element.${element}`, options: { raw: true } })
    .then((icon) => {
      if (icon === null) {
        console.error(
          "\t[导力魔法Admonition渲染][Views/Art/Admonition/view.js][GetElementIcon()][未找到指定元素的图标]:\n\t",
          element
        );
        return "";
      }
      const { File: file, Width: width, Height: height } = icon;
      console.debug(
        "\t[导力魔法Admonition渲染][Views/Art/Admonition/view.js][GetElementIcon()][icon]:\n\t",
        icon
      );
      return `<img src="${GetIconSrc(file)}" width="${GetIconWidth(
        width,
        height,
        15
      )}" />`;
    });
};
const GetArtLink = (id, db) => {
  const [art = null] = dv.page(db).Arts.filter((a) => a.ID === id);
  
  if (art === null) {
    DEBUG &&
      console.error(
        "\t[导力魔法Admonition渲染][Views/Art/Admonition/view.js][GetArtLink()][未找到指定ID的导力魔法]:\n\t",
        { id, db }
      );
    return art;
  }
  return dv.blockLink(db, id, false, art.Name);
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
const { Name, ID, Element, Type, Effects, Range, Comment } = art;
const { raw, collapse, db } = options;
const artLink = GetArtLink(ID, db);
if (artLink === null) {
  return "";
}
return GetElementIcon(Element).then((iconImg) => {
  const adm = `\`\`\`ad-art
title: ${artLink}
collapse: ${collapse}

${iconImg} ${Type} : ${Range} ${Effects ? Effects.join(" ") : ""}

${Comment}

\`\`\``;
  console.debug(
    "[导力魔法Admonition渲染][Views/Art/Admonition/view.js][return]:\n",
    adm
  );
  return raw ? adm : dv.span(adm);
});
