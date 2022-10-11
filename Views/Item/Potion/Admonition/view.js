const DEBUG = false;
const DEFAULT_OPTIONS = {
  collapse: "open",
  raw: true,
  db: "游戏攻略/英雄传说 闪之轨迹/数据库/消耗品",
};
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetPotion = (id, db) => {
  const [potion = null] = dv.page(db).Potions.filter((p) => p.ID === id);
  if (potion === null) {
    return {
      potion: null,
      link: null,
    };
  }
  return {
    potion,
    link: dv.blockLink(db, id, false, potion.Name),
  };
};
let { potion, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.debug(
    "[消耗品Admonition渲染][Views/Item/Potion/Adminition/view.js][Input]:\n",
    { potion, options }
  );
const { ID } = potion;
const { raw, db, collapse } = options;
const { potion: potionData, link: potionLink } = GetPotion(ID, db);
if (potionData === null) {
  return "";
}
const { Range, Effects } = potionData;
const adm = `\`\`\`ad-Potion
title: ${potionLink}
collapse: ${collapse}
${Range} ${Effects.join(" ")}
\`\`\``;
return raw ? adm : dv.span(adm);
