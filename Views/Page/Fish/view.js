// ===== Constrains =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  raw: true,
  db: "游戏攻略/英雄传说 闪之轨迹/数据库/钓鱼",
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetFishIcon = (fish) => {
  const { Icon = null } = fish;
  if (Icon === null) {
    return "";
  }
  const { File: file, Width: width, Height: height } = Icon;
  return `<img src="${GetSource(file)}" width="${GetSize(
    width,
    height,
    100
  )}"/>`;
};

// ===== Begin =====
let { fish, options } = input;
options = MergeOptons(options);
DEBUG &&
  console.debug("[钓鱼笔记页面渲染][Views/Page/Fish/view.js][Input]:\n", {
    fish,
    options,
  });
const { ID } = fish;
const { db, raw } = options;
const page = dv
  .view("Common/Query/ID", { id: ID, db, options })
  .then(({ item: fishData, link: fishLink }) => {
    if (fishData === null) {
      return "";
    }
    return dv
      .view("Page/Fish/DesciptionTable", {
        fish: fishData,
        options,
      })
      .then((descTable) => {
        DEBUG &&
          console.debug(
            "[钓鱼笔记页面渲染][Views/Page/Fish/view.js][descTable]:\n",
            descTable
          );
        return dv
          .view("Page/Fish/LootTable", {
            fish: fishData,
            options,
          })
          .then((lootTable) => {
            DEBUG &&
              console.debug(
                "[钓鱼笔记页面渲染][Views/Page/Fish/view.js][lootTable]:\n",
                lootTable
              );
            return `\`\`\`ad-Fish-Large
title: ${fishLink}
collapse: none

${descTable}

取得道具
${lootTable}

钓鱼点
${dv.markdownList(fishData.Locations)}

\`\`\``;
          });
      });
  });
DEBUG &&
  console.debug("[钓鱼笔记页面渲染][Views/Page/Fish/view.js][Return]:\n", page);
return raw ? page : dv.span(raw);
