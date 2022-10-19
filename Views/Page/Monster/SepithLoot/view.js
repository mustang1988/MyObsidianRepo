/**
 * 
 */
// ===== Constrains =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
    raw: true,
};
const SEPITH_ICON_KEYS = [
    'Item.Sepith.Earth',
    'Item.Sepith.Water',
    'Item.Sepith.Fire',
    'Item.Sepith.Wind',
    'Item.Sepith.Time',
    'Item.Sepith.Space',
    'Item.Sepith.Mirage',
    'Item.Sepith.Mass',
];
// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetIcons = (options) => {
    return Promise.all(SEPITH_ICON_KEYS.map(key => dv.view("Icons/Icon", { key, options })))
    .then(icons => {
        return Promise.all(icons.map(icon => {
            const { File: file, Width:width, Height: height } = icon;
            options.size = 15;
            return dv.view("Common/Image/Resize", { width, height, options })
            .then(w => {
                return dv.view("Common/Image/Path", {file, options}).then(p => {
                    return `<img src="${p}" width="${w}" />`;
                })
            })
        }))
    })
}
// ===== Begin =====
let { sepiths, options } = input;
options = MergeOptons(options);
DEBUG && console.debug("[][Views/][Input]:\n", { sepiths, options });
const { Earth, Water, Fire, Wind, Time, Space, Mirage, Mass } = sepiths;
return GetIcons(options).then(([ea,wa,fi,wi,ti,sp,mi,ma]) => {
    return `<table style="width: 100%;">
<thader>
<tr>
<td colspan="8" style="border: none;"><h2>取得耀晶石</h2></td>
</tr>
</thader>
<tbody>
<tr>
<td style="border: none;">${ea}</td>
<td style="border: none;">${Earth}</td>
<td style="border: none;">${wa}</td>
<td style="border: none;">${Water}</td>
<td style="border: none;">${fi}</td>
<td style="border: none;">${Fire}</td>
<td style="border: none;">${wi}</td>
<td style="border: none;">${Wind}</td>
</tr>
<tr>
<td style="border: none;">${ti}</td>
<td style="border: none;">${Time}</td>
<td style="border: none;">${sp}</td>
<td style="border: none;">${Space}</td>
<td style="border: none;">${mi}</td>
<td style="border: none;">${Mirage}</td>
<td style="border: none;">${ma}</td>
<td style="border: none;">${Mass}</td>
</tr>
</tbody>
</table>`
})