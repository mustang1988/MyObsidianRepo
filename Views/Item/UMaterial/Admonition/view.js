// ===== Constraints =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  db: "游戏攻略/英雄传说 闪之轨迹/数据库/物品",
  raw: true,
};

// ===== Functions =====
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
// ===== Begin =====
let { item, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.debug(
    ":[U物质Admonition渲染][Views/Item/UMaterial/Admonition/view.js][Input]:\n",
    { item, options }
  );
const { ID } = item;
const { raw, db } = options;

const adm = dv
  .view("Common/Query/ID", { id: ID, db, options })
  .then(({ item: uData, link: uLink }) => {
    if (uData === null) {
      return "";
    }
    return `\`\`\`ad-U
title: ${uLink}
\`\`\``;
  });
return raw ? adm : dv.span(adm);
