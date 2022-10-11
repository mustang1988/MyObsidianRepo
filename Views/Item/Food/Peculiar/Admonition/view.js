const DEBUG = true;
const DEFAULT_OPTIONS = {
  collapse: "open",
  raw: true,
  db: "游戏攻略/英雄传说 闪之轨迹/数据库/食物",
};

const MergeOptions = (options) => {
  return Object.assign(DEFAULT_OPTIONS, options);
};

const GetAttackFood = (id, db) => {
  const [food = null] = dv.page(db).Foods.filter((f) => f.ID === id);
  if (food === null) {
    return { food: null, link: null };
  }
  return {
    food,
    link: dv.blockLink(db, id, false, food.Name),
  };
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
const { food: foodData, link: foodLink } = GetAttackFood(ID, db);
if (food === null) {
  return "";
}
const { Effects, Range, Cook = null } = foodData;
const adm = `\`\`\`ad-Food-Peculiar
title: ${foodLink}
collapse: ${collapse}
${Range} ${Effects.join(" ")}

${Cook ? Cook.join(", ") : ""}
\`\`\``;
return raw ? adm : dv.span(adm);
