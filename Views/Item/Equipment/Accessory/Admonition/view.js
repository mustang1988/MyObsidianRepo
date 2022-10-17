// ===== Constraints =====
const DEBUG = true;
const DEFAULT_OPTIONS = {
  collapse: "open",
  db: "游戏攻略/英雄传说 闪之轨迹/数据库/饰品",
  raw: true,
};
// ===== Functions =====
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetAccessory = (id, db) => {
  const [accessory = null] = dv.page(db).Accessories.filter((a) => a.ID === id);
  if (accessory === null) {
    return { accessory: null, link: nukk };
  }
  return {
    accessory,
    link: dv.blockLink(db, id, false, accessory.Name),
  };
};
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
const { accessory: accessoryData, link: accessoryLink } = GetAccessory(ID, db);
if (accessoryData === null) {
  return "";
}
const { Effects, Description } = accessoryData;
const adm = `\`\`\`ad-Accessory
title: ${accessoryLink}
collapse: ${collapse}
【 ${Effects.join(" ")} 】

${Description}
\`\`\``;
return raw ? adm : dv.span(adm);
