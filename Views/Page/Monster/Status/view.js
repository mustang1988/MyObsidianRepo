/**
 * 
 */
// ===== Constrains =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
    raw: true,
};
const DEBUFF_ICON_KEYS = [
    "Debuff.Poison",
    "Debuff.Burn",
    "Debuff.Death",
    "Debuff.Seal",
    "Debuff.Freeze",
    "Debuff.Nightmare",
    "Debuff.Mute",
    "Debuff.Petrify",
    "Debuff.Delay",
    "Debuff.Blind",
    "Debuff.Faint",
    "Debuff.Vanish",
    "Debuff.Sleep",
    "Debuff.Confuse",
    "Debuff.SDown",
];
// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetDebuffIcons = options => {
    return Promise.all(DEBUFF_ICON_KEYS.map(key => dv.view("Icons/Icon", {key,options})))
    .then(icons => {
        return Promise.all(icons.map(icon => {
            const {File: file, Width: width, Height: height } = icon;
            options.size = 15;
            return dv.view("Common/Image/Resize", {width, height, options})
            .then(w => {
                return dv.view("Common/Image/Path", {file, options})
                .then(p => {
                    return `<img src="${p}" width="${w}" />`;
                })
            })
        }));
    })
}
// ===== Begin =====
let { rates, options } = input;
options = MergeOptons(options);
DEBUG && console.debug("[][Views/][Input]:\n", { rates, options });
const {Poison, Burn,Death,Seal, Freeze, Nightmare, Mute, Petrify, Delay, Blind, Faint, Vanish, Sleep, Confuse, SDown} = rates;

return GetDebuffIcons(options)
.then(icons => {
    return `<table style="width: 100%;">
<thader>
<tr>
<td colspan="6" style="border: none;"><h2>状态变化有效率</h2></td>
</tr>
</thader>
<tbody>
<tr>
<td  style="border: none;">${icons[0]} 中毒</td>
<td  style="border: none;">${Poison}</td>
<td  style="border: none;">${icons[1]} 炎伤</td>
<td  style="border: none;">${Burn}</td>
<td  style="border: none;">${icons[2]} 即死</td>
<td  style="border: none;">${Death}</td>
</tr>
<tr>
<td  style="border: none;">${icons[3]} 封技</td>
<td  style="border: none;">${Seal}</td>
<td  style="border: none;">${icons[4]} 冻结</td>
<td  style="border: none;">${Freeze}</td>
<td  style="border: none;">${icons[5]} 恶梦</td>
<td  style="border: none;">${Nightmare}</td>
</tr>
<tr>
<td  style="border: none;">${icons[6]} 封魔</td>
<td  style="border: none;">${Mute}</td>
<td  style="border: none;">${icons[7]} 石化</td>
<td  style="border: none;">${Petrify}</td>
<td  style="border: none;">${icons[8]} 延迟</td>
<td  style="border: none;">${Delay}</td>
</tr>
<tr>
<td  style="border: none;">${icons[9]} 黑暗</td>
<td  style="border: none;">${Blind}</td>
<td  style="border: none;">${icons[10]} 气绝</td>
<td  style="border: none;">${Faint}</td>
<td  style="border: none;">${icons[11]} 消灭</td>
<td  style="border: none;">${Vanish}</td>
</tr>
<tr>
<td  style="border: none;">${icons[12]} 睡眠</td>
<td  style="border: none;">${Sleep}</td>
<td  style="border: none;">${icons[13]} 混乱</td>
<td  style="border: none;">${Confuse}</td>
<td  style="border: none;">${icons[14]} 能力降低</td>
<td  style="border: none;">${SDown}</td>
</tr>
</tbody>
</table>`
})