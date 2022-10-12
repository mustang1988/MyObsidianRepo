// ===== Constraint =====
const DEBUG = true;
const DEFAULT_OPTIONS = {
  raw: true,
  db: "游戏攻略/英雄传说 闪之轨迹/数据库/物品",
};
// ===== Functions =====
const MergeOption = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetSepith = (id, db) => {
  const [item] = dv.page(db).Items.filter((i) => i.ID === id);
  if (item === null) {
    return { sepith: null, link: null };
  }
  return { sepith: item, link: dv.blockLink(db, id, false, sepith.Name) };
};
// ===== Begin =====
let { sepith, options } = input;
options = MergeOption(options);
DEBUG &&
  console.debug(
    "[耀晶片Admonition渲染][Views/Item/Sepith/Admonition/view.js][Input]:\n",
    { sepith, options }
  );
const { ID, Element } = sepith;
const { db, raw } = options;
const { sepith: sepithData, link: sepithLink } = GetSepith(ID, db);
if (sepithData === null) {
  return "";
}
const adm = `\`\`\`ad-Sepith-${Element}
title: ${sepithLink}
\`\`\``;
return raw ? adm : dv.span(adm);
