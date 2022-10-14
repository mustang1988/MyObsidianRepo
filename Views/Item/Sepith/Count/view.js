/**
 * 
 */
// ===== Constrains =====
const DEBUG = true;
const DEFAULT_OPTIONS = {
    size: 15,
    count: 0,
    linit: 0,
    display_name: false,
    raw: true,
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);

// ===== Begin =====
let { link, options } = input;
options = MergeOptons(options);
DEBUG && console.debug("[耀晶片带数量InLine渲染][Views/Item/Sepith/Count/view.js][Input]:\n", { link, options });
const inline = dv.view("Item/Sepith/InLine", { link, options }).then(inline => {
    if(inline === '') {
        return '';
    }
    const { count, limit } = options;
    if(count > limit) {
        return `${inline} x ${count}`
    }
    return inline;
});
const { raw } = options;
return raw ? inline : dv.span(raw);