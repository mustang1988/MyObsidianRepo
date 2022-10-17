// ===== Constraints =====
const DEBUG = true;
const DEFAULT_OPTIONS = {
  collapse: "open",
  db: "游戏攻略/英雄传说 闪之轨迹/数据库/饰品",
  raw: true,
};
// ===== Functions =====
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
// ===== Begin =====
let { accessory, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.debug(
    ":[饰品Admonition渲染][Views/Item/Equipment/Accessory/Admonition/view.js][Input]\n",
    { accessory, options }
  );
const { ID } = accessory;
const { db, raw, collapse } = options;
const adm = dv
  .view("Item/Common/Query/ID", { item: accessory, db, options })
  .then((data) => {
    const { item: accessoryData, link: accessoryLink } = data;
    if (accessoryData === null) {
      return "";
    }
    const { Effects, Description } = accessoryData;
    return `\`\`\`ad-Accessory
title: ${accessoryLink}
collapse: ${collapse}
【 ${Effects.join(" ")} 】

${Description}
\`\`\``;
  });
return raw ? adm : dv.span(adm);
