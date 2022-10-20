/**
 *
 */
// ===== Constrains =====
const DEBUG = true;
const DEFAULT_OPTIONS = {
  size: 15,
  count: 0,
  limit: 0,
  display_name: true,
  raw: true,
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);

// ===== Begin =====
let { link, options } = input;
options = MergeOptons(options);
DEBUG &&
  console.debug(
    "[带数量食材InLine渲染][Views/Item/Food/Ingredient/Count/view.js][Input]:\n",
    { link, options }
  );

const inline = dv
  .view("Item/Food/Ingredient/InLine", { link, options })
  .then((inline) => {
    DEBUG && console.debug("[带数量食材InLine渲染][Views/Item/Food/Ingredient/Count/view.js][Item/Food/Ingredient/InLine返回]:\n", inline);
    if (inline === "") {
      return "";
    }
    const { count, limit } = options;
    if (count > limit) {
      return `${inline} x ${count}`;
    }
    return inline;
  });
const { raw } = options;
return raw ? inline : dv.span(inline);
