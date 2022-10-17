// ===== Constraint =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  collapse: "none",
  db: "游戏攻略/英雄传说 闪之轨迹/数据库/食物",
  raw: true,
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
    "[独门食物Admonition渲染][Views/Item/Food/Unique/Admonition][Input]:\n",
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
    return `\`\`\`ad-Food-Unique
title: ${foodLink}
collapse: ${collapse}
${Range} ${Effects.join(" ")}

${Cook ? Cook.join(", ") : ""}
\`\`\``;
  });
return raw ? adm : dv.span(adm);
