// ===== Constraints =====
const DEBUG = true;
const DEFAULT_OPTIONS = {
    count: 0,
    limit: 0,
    size: 15,
    display_name: false,
    raw: true,
};
// ===== Functions =====
const MergeOptions = options => Object.assign(DEFAULT_OPTIONS, options);
// ===== Begin =====
let { link , options } = input;
options = MergeOptions(options);
DEBUG && console.debug("[U物质带数量InLine渲染][Item/UMaterial/Count/view.js][Input]:\n", { link, options });

const inline = dv.view("Item/UMaterial/InLine", { link, options }).then(inline=>{
    if(inline === ''){
        return '';
    }
    const { count, limit } = options;
    if(count > limit){
        return `${inline} x ${count}`;
    }
    return inline;
})
const { raw } = options;
return raw ? inline : dv.span(inline);