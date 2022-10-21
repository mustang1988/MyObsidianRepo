/**
 * 
 */
// ===== Constrains =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
    collapse: "none",
    db: "游戏攻略/英雄传说 闪之轨迹/数据库/怪物",
    raw: true,
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);

// ===== Begin =====
let { monster, options } = input;
options = MergeOptons(options);
DEBUG && console.debug("[][Views/Page/Monster/view.js][Input]:\n", { monster, options });

const { collapse, raw, db } = options;
const { ID } = monster;
const page = dv.view("Common/Query/ID", { id: ID, db, options })
.then(({item: monsterData, link: monsterLink}) => {
    return  dv.view("Page/Monster/Info", { monsterData, options })
    .then(info => {
        return dv.view("Page/Monster/ItemLoot", { items: monsterData.Loots, options })
        .then(loots => {
            return dv.view("Page/Monster/SepithLoot", { sepiths: monsterData.Sepiths,  options})
            .then(sepiths => {
                return dv.view("Page/Monster/Unbalance", { unbalance: monsterData.Unbalance, options })
                .then(ubs => {
                    return dv.view("Page/Monster/Status", { rates: monsterData.DebuffRates, options })
                    .then(debuff => {
                        return dv.view("Page/Monster/Art", { rates: monsterData.MagicRates, options })
                        .then(arts => {
                            return`<table style="width: 100%;"><thader>
                            <tr><td colspan="2"><h2>${monsterData.Name}</h2></td></tr>
                            </thader><tbody>
                            <tr>
                            <td rowspan="4" style="width: 50%; border: none;">${info}</td>
                            </tr>
                            <tr><td style="width: 50%; height: 30%; border: none;">${sepiths}</td></tr>
                            <tr><td style="width: 50%; height: 30%; border: none;">${loots}</td></tr>
                            <tr><td style="width: 50%; height: 40%; border: none;">${ubs}</td></tr>
                            <tr><td style="width: 50%; border: none;">${arts}</td><td style="width: 50%;border: none;">${debuff}</td></tr>
                            </tbody></table>`;
                        })
                    })
                })
            })
        })
    });
});
return raw ? page : dv.span(page);
