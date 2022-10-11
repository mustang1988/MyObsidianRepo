const DEBUG = true;
const DEFAULT_OPTIONS = {
    collapse: "open",
    raw: true
}

const MergeOptions = (options) => {
    return Object.assign(DEFAULT_OPTIONS, options);
};

const BuildAdmonition = (food, options) => {
    const { Name, ID, Effects, Range, Cook = null, path="游戏攻略/英雄传说 闪之轨迹/数据库/物品" } = food;
    const { collapse } = options;
    const adType = `ad-Food-Superb`;
    const foodLink = dv.blockLink(path, ID, false, Name);
    const effectList = dv.markdownList(Effects);
    const cookList = Cook !== null
        ? `料理人: \n${dv.markdownList(Cook)}`
        : ''
    return `~~~${adType}
title: ${foodLink}
collapse: ${collapse}

范围: 
${Range}

效果: 
${effectList}

${cookList}

~~~`;
};

let { food, options } = input;
options = MergeOptions(options);
DEBUG && console.debug(`[${__filename}][Input]: `, { food, options });
const { raw } = options;
const admonition = BuildAdmonition(food, options)
return raw
    ? admonition
    : dv.span(admonition);
