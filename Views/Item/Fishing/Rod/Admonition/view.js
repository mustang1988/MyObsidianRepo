const DEBUG = false;
const DEFAULT_OPTIONS = {
  raw: true,
  db: "游戏攻略/英雄传说 闪之轨迹/数据库/鱼竿",
};
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetRod = (id, db) => {
  const [rod] = dv.page(db).Rods.filter((r) => r.ID === id);
  if (rod === null) {
    return { rod: null, link: null };
  }
  return {
    rod,
    link: dv.blockLink(db, id, false, rod.Name),
  };
};
// ===== Begin =====
let { rod, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.debug(
    "[鱼竿Admonition渲染][Views/Item/Fishing/Rod/Admonition/view.js][Input]:\n",
    { rod, options }
  );
const { ID } = rod;
const { raw, db } = options;
const { rod: rodData, link: rodLink } = GetRod(ID, db);
if (rodData === null) {
  return "";
}
const adm = `\`\`\`ad-Fish-Rod
title: ${rodLink}
\`\`\``;
return raw ? adm : dv.span(adm);
