// ===== Constraints =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  collapse: "none",
  db: "游戏攻略/英雄传说 闪之轨迹/数据库/消耗品",
  raw: true,
};
// ===== Functions =====
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
// ===== Begin =====
let { potion, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.debug(
    "[消耗品Admonition渲染][Views/Item/Potion/Adminition/view.js][Input]:\n",
    { potion, options }
  );
const { ID } = potion;
const { raw, db, collapse } = options;

const adm = dv
  .view("Common/Query/ID", { id: ID, db, options })
  .then(({ item: potionData, link: potionLink }) => {
    if (potionData === null) {
      return "";
    }
    const { Range, Effects } = potionData;
    return `\`\`\`ad-Potion
title: ${potionLink}
collapse: ${collapse}
${Range} ${Effects.join(" ")}
\`\`\``;
  });
return raw ? adm : dv.span(adm);
