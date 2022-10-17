// ===== Constraints =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  collapse: "none",
  raw: true,
  db: "游戏攻略/英雄传说 闪之轨迹/数据库/食物",
};
// ===== Functions =====
const MergeOptions = (options) => {
  return Object.assign(DEFAULT_OPTIONS, options);
};
// ===== Begin =====
let { food, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.debug(
    "[普通食物Admonition渲染][Views/Item/Food/Regular/Admonition][Input]:\n",
    { food, options }
  );
const { db, raw, collapse } = options;
const { ID } = food;

const adm = dv
  .view("Common/Query/ID", { id: ID, db, options })
  .then(({ item: foodData, link: foodLink }) => {
    if (foodData === null) {
      return "";
    }
    const { Effects, Range, Cook = null } = foodData;
    return `\`\`\`ad-Food-Regular
title: ${foodLink}
collapse: ${collapse}
${Range} ${Effects.join(" ")}

${Cook ? Cook.join(", ") : ""}
\`\`\``;
  });
return raw ? adm : dv.span(adm);
