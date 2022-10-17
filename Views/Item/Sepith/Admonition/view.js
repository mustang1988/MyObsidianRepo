// ===== Constraint =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  db: "游戏攻略/英雄传说 闪之轨迹/数据库/物品",
  raw: true,
};
// ===== Functions =====
const MergeOption = (options) => Object.assign(DEFAULT_OPTIONS, options);
// ===== Begin =====
let { sepith, options } = input;
options = MergeOption(options);
DEBUG &&
  console.debug(
    "[耀晶片Admonition渲染][Views/Item/Sepith/Admonition/view.js][Input]:\n",
    { sepith, options }
  );
const { ID } = sepith;
const { db, raw } = options;

const adm = dv
  .view("Common/Query/ID", { id: ID, db, options })
  .then(({ item: sepithData, link: sepithLink }) => {
    if (sepithData === null) {
      return "";
    }
    const { Element } = sepithData;
    return `
\`\`\`ad-Sepith-${Element}
title: ${sepithLink}
\`\`\`
`;
  });
return raw ? adm : dv.span(adm);
