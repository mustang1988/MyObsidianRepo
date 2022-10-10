const DEBUG = false;
const DEFAULT_OPTIONS = {
  raw: true,
  collapse: true,
};
const GetFood = (food) => {
  if (food.path !== undefined) {
    return food;
  } else {
    const db = "游戏攻略/英雄传说 闪之轨迹/数据库/物品";
    const [item] = dv.page(db).Items.filter((i) => i.ID === food.ID);
    if (item !== null) {
      item.path = db;
      return item;
    }
    return null;
  }
};
let { item, options } = input;
item = GetFood(item);
const { Name, Effects, Range, Cook = null } = item;
options = Object.assign(DEFAULT_OPTIONS, options);
const { raw, collapse } = options;
DEBUG &&
  console.log("[Admonition/Food/Regular.js][Input]: ", { item, options });
const cook =
  Cook !== null
    ? `料理人:
${dv.markdownList(Cook)}`
    : null;
DEBUG &&
  console.log(
    "[Admonition/Food/Regular.js][title:, collapse:, 范围, 效果, cook]: ",
    dv.blockLink(item.path, item.ID, false, item.Name),
    collapse === false ? "close" : "open",
    Range,
    dv.markdownList(Effects),
    cook
  );
const admonitionHTML = `\`\`\`ad-Food-Peculiar
title: ${dv.blockLink(item.path, item.ID, false, item.Name)}
collapse: ${collapse === false ? "close" : "open"}
范围:
${Range}

效果: 
${dv.markdownList(Effects)}

${cook !== null ? dv.markdownList(cook) : ""}
\`\`\``;
DEBUG &&
  console.log("[Admonition/Food/Regular.js][admonitionHTML]: ", admonitionHTML);
return raw ? admonitionHTML : dv.span(admonitionHTML);
