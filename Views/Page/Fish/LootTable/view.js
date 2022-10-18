// ===== Constrains =====
const DEBUG = true;
const DEFAULT_OPTIONS = {
  raw: true,
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);
const BuildRows = async (fish) => {
  DEBUG &&
    console.debug(
      "[钓鱼笔记-掉落奖励表格渲染][Views/Page/Fish/LootTable/view.js][BuildRows()][fish]:\n",
      fish
    );
  return Promise.all(
    ["Item.Fishing.FishS", "Item.Fishing.FishM", "Item.Fishing.FishL"].map(
      (key) => dv.view("Icons/Icon", { key, options: { raw: true } })
    )
  ).then((icons) => {
    if (icons.includes(null)) {
      return "";
    }
    const { Small, Medium, Large } = fish.Bonus;
    const loots = [];
    Small&& loots.push(Small);
    Medium&& loots.push(Medium);
    Large&& loots.push(Large);
    return Promise.all(
      loots.map((loot) =>
        dv.view("Common/Query/Count", {
          link: loot.Item,
          options: {
            count: loot.Num,
            raw: true,
            display_name: options.display_name,
            limit: 0,
            type: loot.Type,
            html: true,
          },
        })
      )
    ).then((iconLoots) => {
      return Promise.all(
        icons.map((i) => {
          const { File: file, Width: width, Height: height } = i;
          return dv
            .view("Common/Image/Resize", { width, height, options })
            .then((w) => {
              return dv
                .view("Common/Image/Path", { file, options })
                .then((p) => {
                  return `<img src="${p}" width="${w}"/>`;
                });
            });
        })
      ).then((iconHTMLs) => {
        let rows = "";
        if(iconLoots.length == 1){
          rows += `<tr><td style="border: none;">${iconHTMLs[2]}</td><td style="border: none;">${iconLoots[0]}</td></tr>`;
          return rows;
        }
        //const datas = [];
        for (let i = 0; i < iconHTMLs.length; i++) {
          const iconLoot = iconLoots[i] ? iconLoots[i] : "";
          const iconHtml = iconHTMLs[i];
          rows += `<tr><td style="border: none;">${iconHtml}</td><td style="border: none;">${iconLoot}</td></tr>`;
          // datas.push([iconHtml, Point, iconLoot]);
        }
        // return datas;
        return rows;
      });
    });
  });
};
// ===== Begin =====
let { fish, options } = input;
options = MergeOptons(options);
DEBUG &&
  console.debug(
    "[钓鱼笔记-掉落奖励表格渲染][Views/Page/Fish/LootTable/view.js][Input]:\n",
    { fish, options }
  );
const { Bonus } = fish;
const table = BuildRows(fish).then((lootTable) => {
  return `<table style="width: 100%;">
  <theader>
  </theader>
  <tbody>${lootTable}</tbody>
  </table>`;
});
const { raw } = options;
return raw ? table : dv.span(table);
