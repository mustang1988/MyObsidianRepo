// ===== Constrains =====
const DEBUG = true;
const DEFAULT_OPTIONS = {
  raw: true,
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetIconSrc = (file) =>
  `app://local/${this.app.vault.adapter.basePath}/${file.path}`;
const GetIconWidth = (width, height, target) =>
  Math.round((width * target) / height);
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
    const loots = [Small, Medium, Large];
    return Promise.all(
      loots.map((loot) =>
        dv.view("Item/Count", {
          link: loot.Item,
          options: {
            raw: true,
            count: loot.Num,
            display_name: false,
            limit: 0,
            type: loot.Type
          },
        })
      )
    ).then((iconLoots) => {
      let rows = "";
      //const datas = [];
      for (let i = 0; i < icons.length; i++) {
        const icon = icons[i];
        const { File: file, Width: width, Height: height } = icon;
        const loot = loots[i];
        const iconLoot = iconLoots[i] ? iconLoots[i] : "";
        const iconHtml = `<img src="${GetIconSrc(file)}" width="${GetIconWidth(
          width,
          height,
          25
        )}" />`;
        const { Point } = loot;
        rows += `<tr><td style="border: none;">${iconHtml}</td><td style="border: none;">${iconLoot}</td></tr>`;
        // datas.push([iconHtml, Point, iconLoot]);
      }
      // return datas;
      return rows;
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
