/**
 * 
 */
// ===== Constrains =====
const DEBUG = true;
const DEFAULT_OPTIONS = {
    collapse: "none",
    raw: true,
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);

// ===== Begin =====
let { monster, options } = input;
options = MergeOptons(options);
DEBUG && console.debug("[][Views/Page/Monster/view.js][Input]:\n", { monster, options });

const {collapse, raw} = options;

const page =  dv.view("Page/Monster/Info", { monster, options }).then(info => {
    return dv.view("Page/Monster/ItemLoot", { items: monster.Loots, options }).then(loots => {
        return dv.view("Page/Monster/SepithLoot", { sepiths: monster.Sepiths,  options}).then(sepiths => {
            return dv.view("Page/Monster/Unbalance", { unbalance: monster.Unbalance, options }).then(ubs => {
                return dv.view("Page/Monster/Status", { rates: monster.DebuffRates, options }).then(debuff => {
                    return dv.view("Page/Monster/Art", { rates: monster.MagicRates, options }).then(arts => {
                        return`<table style="width: 100%;"><thader>
                        <tr><td colspan="2"><h2>${monster.Name}</h2></td></tr>
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

return raw ? page : dv.span(page);
