/**
 *
 */
// ===== Constrains =====
const DEBUG = true;
const DEFAULT_OPTIONS = {
  count: 0,
  display_name: true,
  limit: 0,
  type: null,
  html: true,
  raw: true,
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);

// ===== Begin =====
let { link, options } = input;
options = MergeOptons(options);
DEBUG && console.debug("[][Views/][Input]:\n", { link, options });
const { type, raw } = options;
return dv.view(type.replace(/\/InLine/, "/Count"), { link, options });
