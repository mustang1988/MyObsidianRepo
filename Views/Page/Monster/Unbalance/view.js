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
let { unbalance, options } = input;
options = MergeOptons(options);
DEBUG && console.debug("[][Views/][Input]:\n", { unbalance, options });
const { Slash, Thrust, Pierce, Strike} = unbalance;
return Promise.all([Slash,Thrust,Pierce,Strike].map(v => dv.view("Page/Monster/Unbalance/Starts", { value: v, options })))
.then(starts => {
    const [z,t,s,g] = starts
    return `<table style="width: 100%;">
<thader>
<tr>
<td colspan="4" style="border: none;"><h2>失衡引发几率</h2></td>
</tr>
</thader>
<tbody>
<tr>
<td style="text-align: center; border: none;">斩</td>
<td style="text-align: center; border: none;">突</td>
<td style="text-align: center; border: none;">射</td>
<td style="text-align: center; border: none;">钢</td>
</tr>
<tr>
<td style="text-align: center; border: none;">${z}</td>
<td style="text-align: center; border: none;">${t}</td>
<td style="text-align: center; border: none;">${s}</td>
<td style="text-align: center; border: none;">${g}</td>
</tr>
</tbody>
</table>`;
})
