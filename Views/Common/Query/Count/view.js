/**
 *
 */
// ===== Constrains =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  count: 0,
  display_name: true,
  limit: 0,
  type: null,// 物品InLine类型
  html: true,
  raw: true,
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);

// ===== Begin =====
let { link, options } = input;
options = MergeOptons(options);
DEBUG && console.debug("[任意物品带数量InLine渲染][Views/Common/Query/Count/view.js][Input]:\n", { link, options });
const { type, raw } = options;
return dv.view(type.replace(/\/InLine/, "/Count"), { link, options });
