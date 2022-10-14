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