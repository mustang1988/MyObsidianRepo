// ===== Constrains =====
const DEBUG = true;
const DEFAULT_OPTIONS = {
  size: 15,
  count: 0,
  limit: 0,
  display_name: false,
  type: null,
  raw: true,
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);

// ===== Begin =====
let { link, options } = input;
options = MergeOptons(options);
DEBUG &&
  console.debug(
    "[带数量任意物品InLine渲染][Views/Item/Count/view.js][Input]:\n",
    { link, options }
  );
const { type } = options;
if (type === null) {
  DEBUG &&
    console.error(
      "[带数量任意物品InLine渲染][Views/Count/InLine/view.js][未指定渲染物品的类型]"
    );
  return "";
}
return dv
  .view(type, { link, options })
  .then((inline) => {
    const { count, limit } = options;
    if (count > limit) {
      return `${inline} x ${count}`;
    }
    return inline;
  })
  .catch((e) => {
    DEBUG &&
      console.error(
        "[带数量任意物品InLine渲染][Views/Count/InLine/view.js][InLine渲染发生异常]",
        { error: e, link, options }
      );
  });
