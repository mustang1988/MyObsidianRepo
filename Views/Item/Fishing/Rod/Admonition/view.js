const DEBUG = true;
const DEFAULT_OPTIONS = {
  db: "游戏攻略/英雄传说 闪之轨迹/数据库/鱼竿",
  raw: true,
};
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
// ===== Begin =====
let { rod, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.debug(
    "[鱼竿Admonition渲染][Views/Item/Fishing/Rod/Admonition/view.js][Input]:\n",
    { rod, options }
  );
const { raw, db } = options;
const adm = dv
  .view("Common/Query/ID", { id: rod.ID, db, options })
  .then(({ item: rodData, link: rodLink }) => {
    if (rodData === null) {
      return "";
    }
    return `\`\`\`ad-Fish-Rod
title: ${rodLink}
\`\`\``;
  });
return raw ? adm : dv.span(adm);
