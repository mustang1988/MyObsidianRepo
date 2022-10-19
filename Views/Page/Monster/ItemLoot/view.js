/**
 * 
 */
// ===== Constrains =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
    raw: true,
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);

// ===== Begin =====
let { items, options } = input;
options = MergeOptons(options);
DEBUG && console.debug("[][Views/][Input]:\n", { items, options });
return Promise.all(items.map(loot => dv.view("Common/Query/Count", { link: loot.Name, options: { raw: true, type: loot.Type } })))
.then(loots => {
    const rows = loots.map(loot => `<ul>${loots}</ul>`)
return `<table style="width: 100%;">
<theader>
<tr>
<td style="border: none;"><h2>取的道具</h2></td>
</tr>
</theader>
<tbody>
<tr>
<td style="border: none;">${rows}</td>
</tr>
</tbody>
</table>`
})
