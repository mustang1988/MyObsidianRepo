// ===== Constraints =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  raw: true,
  db: "游戏攻略/英雄传说 闪之轨迹/数据库/物品",
};

// ===== Functions =====
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetUMaterial = (id, db) => {
  const [item = null] = dv.page(db).Items.filter((i) => i.ID === id);
  if (item === null) {
    return { item: null, link: null };
  }
  return { item, link: dv.blockLink(db, id, false, item.Name) };
};
// ===== Begin =====
let { item, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.debug(
    ":[U物质Admonition渲染][Views/Item/UMaterial/Admonition/view.js][Input]:\n",
    { item, options }
  );
const { ID } = item;
const { raw, db, display_name } = options;
const { item: itemData, link: itemLink } = GetUMaterial(ID, db);
if (itemData === null) {
  return "";
}
const adm = `\`\`\`ad-U
title: ${itemLink}
\`\`\``;
return raw ? adm : dv.span(adm);
