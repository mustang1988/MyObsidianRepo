/**
 * 
 */
// ===== Constrains =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
    raw: true,
};
const ELEMENT_ICON_KEYS = [
    "Element.Earth",
    "Element.Water",
    "Element.Fire",
    "Element.Wind",
    "Element.Time",
    "Element.Space",
    "Element.Mirage",
];
// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetElementIcons = options => {
    return Promise.all(ELEMENT_ICON_KEYS.map(key => dv.view("Icons/Icon", {key,options})))
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
const {
    Earth,
    Water,
    Fire,
    Wind,
    Time=0,
    Space=0,
    Mirage=0,
} = rates;
return GetElementIcons(options)
.then(icons => {
    return `<table>
<thader>
<tr>
<td colspan="8" style="border: none;"><h2>魔法属性有效率</h2></td>
</tr>
</thader>
<tbody>
<tr>
<td style="border: none;">${icons[0]}</td>
<td style="border: none;">${Earth}</td>
<td style="border: none;">${icons[1]}</td>
<td style="border: none;">${Water}</td>
<td style="border: none;">${icons[2]}</td>
<td style="border: none;">${Fire}</td>
<td style="border: none;">${icons[3]}</td>
<td style="border: none;">${Wind}</td>
</tr>
<td style="border: none;">${icons[4]}</td>
<td style="border: none;">${Time}</td>
<td style="border: none;">${icons[5]}</td>
<td style="border: none;">${Space}</td>
<td style="border: none;">${icons[6]}</td>
<td style="border: none;">${Mirage}</td>
<tr>
</tr>
</tbody>
</table>`
})