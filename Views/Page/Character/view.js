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
let { character,options } = input;
options = MergeOptons(options);
DEBUG && console.debug("[][Views/Page/Character/view.js][Input]:\n", { character,options });
