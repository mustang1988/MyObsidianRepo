const DEBUG = false;
const DEFAULT_OPTIONS = {
  collapse: "none",
  db: "游戏攻略/英雄传说 闪之轨迹/数据库/结晶回路",
  raw: true,
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
      dv.view("Art/InLine", { link: art, options: { raw: true, display_name: true } })
    )
  );
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
const adm = dv
  .view("Common/Query/ID", { id: ID, db, options })
  .then(({ item: quartzData, link: quartzLink }) => {
    if (quartz === null) {
      return "";
    }
    const { Arts } = quartzData;
    return GetArts(Arts).then((arts) => {
      const { Element, Rate, Effects } = quartzData;
      return `\`\`\`ad-Quartz-${Element}-${Rate}
title: ${quartzLink}
collapse: ${collapse}
装备效果: 
${Effects ? dv.markdownList(Effects) : "无"}

魔法:
${arts === null ? "无" : dv.markdownList(arts)}
\`\`\``;
    });
  });
return raw ? adm : dv.span(adm);
