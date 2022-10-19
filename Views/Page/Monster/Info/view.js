/**
 * 
 */
// ===== Constrains =====
const DEBUG = true;
const DEFAULT_OPTIONS = {
    raw: true,
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);

// ===== Begin =====
let { monster, options } = input;
options = MergeOptons(options);
DEBUG && console.debug("[][Views/][Input]:\n", { monster, options });
const { Icon, Properties, Description } = monster;
return dv.view("Common/Image/Resize", { width: 256, height: 256, options: { raw: true, size: 250 } }).then(w => {
    return dv.view("Common/Image/Path", { file: Icon, options }).then(p => {
        return dv.view("Page/Monster/Info/Property", { properties: Properties, options }).then(pTable => {
            return `<table style="width: 100%">
            <thader></thader>
                <tbody>
                <tr>
                    <td style="border: none;"><img width="${w}" src="${p}" /></td>
                    <td style="border: none;">${pTable}</td>
                </tr>
                <tr>
                    <td colspan="2" style="border: none;">${Description}</td>
                </tr>
                </tbody>
            </table>`;
        }) 
    })
})
