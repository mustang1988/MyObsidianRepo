const DEBUG = true;
const DEFAULT_OPTIONS = {
  collapse: true,
  raw: true,
};

const GetIcon = (Name) => {};

const GetRod = (rod) => {
  DEBUG && console.log("[Admonition/Fish/Fish.js][GetRod()][rod]: ", rod);
  if (rod.path !== undefined && rod.Name !== undefined) {
    return rod;
  } else {
    const db = "游戏攻略/英雄传说 闪之轨迹/数据库/物品";
    const [item] = dv.page(db).Items.filter((i) => i.ID === rod.subpath);
    if (item !== null) {
      item.path = db;
      return item;
    }
    return null;
  }
};

let { fish, options } = input;
options = Object.assign(DEFAULT_OPTIONS, options);
DEBUG && console.log("[Admonition/Fish/Fish.js][Input]: ", { fish, options });
let { Name, Description: Desc, Locations, Rank, Bonus, Rods } = fish;
const { Small, Medium, Large } = Bonus;
const { raw, collapse } = options;
return Promise.all(
  Rods.map((rod) =>
    dv.view("InLine/Item", {
      link: rod,
      icon: "Item.Fishing.Rod",
      options: { raw: true },
    })
  )
).then((rods) => {
  return Promise.all(
    [Small, Medium, Large].map((bo) =>
      dv.view("InLine/Item", {
        link: bo.Item,
        icon: "Item.Sepith.Water",
        num: bo.Num,
        options: { raw: true },
      })
    )
  ).then((items) => {
    console.info("items => ", items);
    const content = `\`\`\`\`ad-Fish-Large
title: ${Name}
collapse: ${collapse === false ? "close" : "open"}
描述: ${Desc}

Rank: ${Rank}

鱼竿:
${dv.markdownList(rods)}

\`\`\`ad-Fish-Small
title: ${Name}
collapse: ${collapse === false ? "close" : "open"}
点数: ${Small.Point}

掉落:
${dv.markdownList(items[0])}
\`\`\`

\`\`\`ad-Fish-Medium
title: ${Name}
collapse: ${collapse === false ? "close" : "open"}
点数: ${Medium.Point}

掉落:
${dv.markdownList(items[1])}
\`\`\`

\`\`\`ad-Fish-Medium
title: ${Name}
collapse: ${collapse === false ? "close" : "open"}
点数: ${Large.Point}

掉落:
${dv.markdownList(items[2])}
\`\`\`

\`\`\`\``;
    return raw ? content : dv.span(content);
  });
});
