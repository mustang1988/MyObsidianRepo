// ===== Constrains =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 15,
  count: 0,
  limit: 0,
  raw: true,
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);

// ===== Begin =====
let { link, options } = input;
options = MergeOptons(options);
DEBUG &&
  console.debug(
    "[带数量结晶回路InLine渲染][Views/Item/Quartz/Regular/Count/view.js][Input]:\n",
    { link, options }
  );
const inline = dv
  .view("Item/Quartz/Regular/Inline", { link, options })
  .then((inline) => {
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
