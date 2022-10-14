/**
 * {
    "fish": {
        "Name": "刃鱼",
        "ID": "renyu",
        "Icon": {
            "File": {
                "path": "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/刃鱼.webp",
                "type": "file",
                "embed": true
            },
            "Width": 98,
            "Height": 82
        },
        "Description": "锐利细长的尾鳍为其特征的小鱼.\n\n个性火爆, 要是有其他鱼进入领域范围, 就算有体格差距,\n\n也会进行攻击将其驱除出去. 体色鲜艳, 拥有美丽外表,\n\n是受欢迎的观赏鱼.\n",
        "Rank": "D",
        "Locations": [
            {
                "path": "游戏攻略/英雄传说 闪之轨迹/笔记/迷宫/旧校舍‧地下一层.md",
                "type": "file",
                "display": "旧校舍‧地下一层",
                "embed": false
            }
        ],
        "Rods": [
            {
                "path": "游戏攻略/英雄传说 闪之轨迹/数据库/物品.md",
                "type": "block",
                "subpath": "xiaoqiaosheshou",
                "embed": false
            }
        ],
        "Bonus": {
            "Small": {
                "Item": {
                    "path": "游戏攻略/英雄传说 闪之轨迹/数据库/物品.md",
                    "type": "block",
                    "subpath": "sepithwater",
                    "embed": false
                },
                "Num": 10,
                "Point": 5
            },
            "Medium": {
                "Item": {
                    "path": "游戏攻略/英雄传说 闪之轨迹/数据库/物品.md",
                    "type": "block",
                    "subpath": "sepithwater",
                    "embed": false
                },
                "Num": 20,
                "Point": 6
            },
            "Large": {
                "Item": {
                    "path": "游戏攻略/英雄传说 闪之轨迹/数据库/物品.md",
                    "type": "block",
                    "subpath": "sepithwater",
                    "embed": false
                },
                "Num": 30,
                "Point": 7
            }
        }
    },
    "options": {
        "raw": true
    }
}
 */
// ===== Constrains =====
const DEBUG = true;
const DEFAULT_OPTIONS = {
    raw: true,
    db: "游戏攻略/英雄传说 闪之轨迹/数据库/钓鱼"
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetFish = (id, db) => {
    const [fish = null] = dv.page(db).Fishes.filter(f => f.ID === id);
    if(fish === null) {
        return { fish: null, link: null };
    }
    return { fish, link: dv.blockLink(db, id, false, fish.Name) };
};
const GetSize = (width, height, targetSize) => {
    return Math.round((width * targetSize) / height);
};
const GetSource = (file) => {
    return `app://local/${this.app.vault.adapter.basePath}/${file.path}`;
};
const GetFishIcon = (fish) => {
    const { Icon = null } = fish;
    if(Icon === null) {
        return "";
    }
    const { File: file, Width: width, Height: height } = Icon;
    return `<img src="${GetSource(file)}" width="${GetSize(
        width,
        height,
        100
    )}"/>`;
}

// ===== Begin =====
let { fish, options } = input;
options = MergeOptons(options);
DEBUG && console.debug("[钓鱼笔记页面渲染][Views/Page/Fish/view.js][Input]:\n", { fish, options });
const { ID } = fish;
const { db, raw } = options;
const { fish: fishData, link: fishLink } = GetFish(ID, db);
DEBUG && console.debug("[钓鱼笔记页面渲染][Views/Page/Fish/view.js][{fishData, fishLink}]:\n", { fishData, fishLink });
if(fishData === null){
    return '';
}

const page = dv.view('Page/Fish/DesciptionTable', { fish:fishData, options: { raw: true } }).then(descTable => {
    DEBUG && console.debug("[钓鱼笔记页面渲染][Views/Page/Fish/view.js][descTable]:\n", descTable);
    return dv.view("Page/Fish/LootTable", { fish:fishData, options: { raw: true } }).then(lootTable => {
        DEBUG && console.debug("[钓鱼笔记页面渲染][Views/Page/Fish/view.js][lootTable]:\n", lootTable);
        return `\`\`\`ad-Fish-Large
title: ${fishLink}
collapse: none

${descTable}

${lootTable}

\`\`\``;
    });
});

DEBUG && console.debug("[钓鱼笔记页面渲染][Views/Page/Fish/view.js][Return]:\n", page);
return raw ? page: dv.span(raw);