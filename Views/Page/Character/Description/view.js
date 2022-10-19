/**
 * 
 */
// ===== Constrains =====
const DEBUG = true;
const DEFAULT_OPTIONS = {
    db: "游戏攻略/英雄传说 闪之轨迹/数据库/人物",
    raw: true,
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);
const ResizeIcon = (icon, options) => {
    const {File: file, Width: width, Height: height} = icon;
    icon,options.size = 100;
    return dv.view("Common/Image/Resize", {width, height, options}).then(w => {
        return dv.view("Common/Image/Path", {file, options}).then(p => {
            return `<img src="${p}" width="${w}" />`;
        })
    })
}
// ===== Begin =====
let { character,options } = input;
options = MergeOptons(options);
DEBUG && console.debug("[][Views/Page/Character/view.js][Input]:\n", { character,options });
const { ID } = character;
const { db } = options;
return dv.view("Common/Query/ID", { id: ID, db, options: { raw: true }})
.then(({item: characterData, link: characterLink}) => {
    DEBUG && console.debug({ characterData, characterLink });
    const {FullName, Description, Icon} = characterData;
    return ResizeIcon(Icon, options)
    .then(iconHTML => {
        characterLink.display = FullName;
        return dv.view("Common/Wiki", {link: characterLink, options})
        .then(linkHTML => {
            return `<h1>${linkHTML}</h1>
<table style="width: 100%;">
<theader>
</theader>
<tbody>
<tr>
<td style="border: none; width: 30%; text-align: left;">
${iconHTML}
</td>
<td style="border: none; width: 70%;">
${Description}
</td>
</tr>
</tbody>
</table>`
        });
    });
});