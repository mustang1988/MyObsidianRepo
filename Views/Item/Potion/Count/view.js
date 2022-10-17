// ===== Constrains =====
const DEBUG = false;
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
    "[带数量消耗品InLine渲染][Views/Potion/Count/view.js][Input]:\n",
    { link, options }
  );
const inline = dv
  .view("Item/Potion/InLine", { link, options })
  .then((inline) => {
    if (inline === "") {
      DEBUG &&
        console.error(
          "[带数量消耗品InLine渲染][Views/Potion/Count/view.js][Inline渲染返回空字符串]"
        );
      return "";
    }
    DEBUG &&
      console.debug(
        "[带数量消耗品InLine渲染][Views/Potion/Count/view.js][Inline渲染返回]:\n",
        inline
      );
    const { count, limit } = options;
    if (count > limit) {
      return `${inline} x ${count}`;
    }
    return inline;
  });
const { raw } = options;
return raw ? inline : dv.span(inline);
