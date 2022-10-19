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
let { properties, options } = input;
options = MergeOptons(options);
DEBUG && console.debug("[][Views/][Input]:\n", { properties, options });
const { LV, HP, EXP, STR, DEF, ATS, ADF, SPD } = properties
return `
<table>
    <thader></thader>
    <tbody>
        <tr>
            <td style="border-top: none;border-left: none;border-right: none;">LV</td>
            <td style="border-top: none;border-left: none;border-right: none;"></td>
            <td style="border-top: none;border-left: none;border-right: none;">${LV}</td>
        </tr>
        <tr>
            <td style="border-top: none;border-left: none;border-right: none;">HP</td>
            <td style="border-top: none;border-left: none;border-right: none;"></td>
            <td style="border-top: none;border-left: none;border-right: none;">${HP}</td>
        </tr>
        <tr>
            <td style="border-top: none;border-left: none;border-right: none;">EXP</td>
            <td style="border-top: none;border-left: none;border-right: none;"></td>
            <td style="border-top: none;border-left: none;border-right: none;">${EXP}</td>
        </tr>
        <tr>
            <td style="border-top: none;border-left: none;border-right: none;">STR</td>
            <td style="border-top: none;border-left: none;border-right: none;"></td>
            <td style="border-top: none;border-left: none;border-right: none;">${STR}</td>
        </tr>
        <tr>
            <td style="border-top: none;border-left: none;border-right: none;">DEF</td>
            <td style="border-top: none;border-left: none;border-right: none;"></td>
            <td style="border-top: none;border-left: none;border-right: none;">${DEF}</td>
        </tr>
        <tr>
            <td style="border-top: none;border-left: none;border-right: none;">ATS</td>
            <td style="border-top: none;border-left: none;border-right: none;"></td>
            <td style="border-top: none;border-left: none;border-right: none;">${ATS}</td>
        </tr>
        <tr>
            <td style="border-top: none;border-left: none;border-right: none;">ADF</td>
            <td style="border-top: none;border-left: none;border-right: none;"></td>
            <td style="border-top: none;border-left: none;border-right: none;">${ADF}</td>
        </tr>
        <tr>
            <td style="border-top: none;border-left: none;border-right: none;">SPD</td>
            <td style="border-top: none;border-left: none;border-right: none;"></td>
            <td style="border-top: none;border-left: none;border-right: none;">${SPD}</td>
        </tr>
    </tbody>
</table>
`
