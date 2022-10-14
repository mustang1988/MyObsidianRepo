const DEBUG = false;
const DEFAULT_OPTIONS = {
  collapse: "open",
  raw: true,
  db: "游戏攻略/英雄传说 闪之轨迹/数据库/结晶回路",
};
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetArts = async (arts) => {
  if (arts === null) {
    return null;
  }
  DEBUG &&
    console.debug(
      "\t[结晶回路Admonition渲染][Views/Item/Quartz/Regular/Admonition/view.js][GetArts()]:\n\t",
      arts
    );
  return Promise.all(
    arts.map((art) =>
      dv.view("Art/InLine", { link: art, options: { raw: true } })
    )
  );
};
const GetQuartz = (id, db) => {
  const [quartz = null] = dv.page(db).Quartzs.filter((q) => q.ID === id);
  if (quartz === null) {
    return null;
  }
  return dv.blockLink(db, id, false, quartz.Name);
};
// ===== Begin =====
let { quartz, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.debug(
    "[结晶回路Admonition渲染][Views/Item/Quartz/Regular/Admonition/view.js][Input]:\n",
    { quartz, options }
  );

const { ID, Element, Rate, Arts, Effects } = quartz;
const { raw, collapse, db } = options;
const adm = GetArts(Arts).then((artList) => {
  const quartzLink = GetQuartz(ID, db);
  if (quartzLink === null) {
    return "";
  }
  return `\`\`\`ad-Quartz-${Element}-${Rate}
title: ${quartzLink}
collapse: ${collapse}
装备效果: 
${Effects ? dv.markdownList(Effects) : "无"}

魔法:
${artList === null ? "无" : dv.markdownList(artList)}
`;
});

return raw ? adm : dv.span(adm);
