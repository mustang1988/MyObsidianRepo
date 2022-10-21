/**
 * 
 */
// ===== Constrains =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
    db: "游戏攻略/英雄传说 闪之轨迹/数据库/人物",
    raw: true,
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);

// ===== Begin =====
let { id, no, options } = input;
options = MergeOptons(options);
DEBUG && console.debug("[][Views/Page/Chatacter/Note/view.js][Input]:\n", { id, no, options });
const {db} = options;
return dv.view("Common/Query/ID", {id, db, options})
.then(({item: characterData, link: characterLink}) => {
    if(characterData === null){
        return '';
    }
    console.error(characterData)
    const { Notes, ID } = characterData;
    const note = Notes[no-1];
    if(note === undefined){
        return ''
    }
    const { Content, Title } = note;
    const noteLink = dv.blockLink(characterLink.path, `${ID}-${no}`, false, Title);
    return dv.view("Common/Wiki", { link: noteLink, options })
    .then(linkHTMK => {
        return `<table style="width: 100%;"><tr>
                <td style="border: none; text-align: left; width: 30%;">${linkHTMK}</td>
                <td style="border: none; width: 70%;">${Content}</td>
                </tr>
                </table>`;
    })
})