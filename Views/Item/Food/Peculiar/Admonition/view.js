const DEBUG = false;
const DEFAULT_OPTIONS = {
  collapse: "none",
  raw: true,
  db: "游戏攻略/英雄传说 闪之轨迹/数据库/食物",
};

const MergeOptions = (options) => {
  return Object.assign(DEFAULT_OPTIONS, options);
};
const IsAttackFood = (effects) => {
  for (const eff of effects) {
    if (eff.startsWith("攻击")) {
      return true;
    }
  }
  return false;
};
// ===== Begin =====
let { food, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.debug(
    "[古怪食物Admonition渲染][Views/Item/Food/Peculiar/Admonition][Input]:\n",
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
    if (IsAttackFood(Effects)) {
      return dv.view("Item/Food/Attack/Admonition", { food, options });
    }
    return `\`\`\`ad-Food-Peculiar
title: ${foodLink}
collapse: ${collapse}
${Range} ${Effects.join(" ")}

${Cook ? Cook.join(", ") : ""}
\`\`\``;
  });
return raw ? adm : dv.span(adm);
