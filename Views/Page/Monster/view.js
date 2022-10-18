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
DEBUG && console.debug("[][Views/Page/Monster/view.js][Input]:\n", { monster, options });
