/**
 * 
 */
// ===== Constrains =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
    max: 5,
    raw: true,
};
const START_ICON_KEY = "Other.UnbalanceRate.Star"
const EMPTY_START_ICON_KEY ="Other.UnbalanceRate.EmptyStar"
// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetStartIcons = (options) => {
    return Promise.all([START_ICON_KEY, EMPTY_START_ICON_KEY].map(key => dv.view("Icons/Icon",{key,options})))
    .then(icons => {
        return Promise.all(icons.map(icon => {
            const {File:file, Width: width, Height: height} = icon;
            options.size = 15
            return dv.view("Common/Image/Resize", {width, height, options})
            .then(w => {
                return dv.view("Common/Image/Path", {file, options})
                .then(p => {
                    return `<img src="${p}" width="${w}" />`;
                })
            })
        }));
    });
}
// ===== Begin =====
let { value, options } = input;
options = MergeOptons(options);
DEBUG && console.debug("[][Views/][Input]:\n", { value, options });
return GetStartIcons(options)
.then(([s, es]) => {
    let html = "";
    for(let i=1;i<=options.max;i++){
        html += value >= i ? s : es;
    }
    return html;
})