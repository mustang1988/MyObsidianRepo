/**
 * 
 */
// ===== Constrains =====
const DEBUG = true;
const DEFAULT_OPTIONS = {
    size: 15,
    display_name: false,
    type: null,
    raw: true,
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);

// ===== Begin =====
let { link, options } = input;
options = MergeOptons(options);
DEBUG && console.debug("[任意物品InLine渲染][Views/Item/InLine/view.js][Input]:\n", { link, options });
const { type } = options;
if(type === null){
    DEBUG && console.error("[任意物品InLine渲染][Views/Item/InLine/view.js][未指定渲染物品的类型]");
    return '';
}
const path = type.replace(/\./g,'/');
return dv.view(path, { link, options })
.then(inline => {
    return inline;
});

