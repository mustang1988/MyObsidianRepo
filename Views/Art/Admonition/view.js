const DEBUG = false;
const DEFAULT_OPTIONS = {
  collapse: "open",
  raw: true,
  db: "游戏攻略/英雄传说 闪之轨迹/数据库/导力魔法",
};
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
  console.debug(
    "\t[导力魔法Admonition渲染][Views/Art/Admonition/view.js][GetArtLink()][db]:\n\t",
    dv.page(db).Arts
  );
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
