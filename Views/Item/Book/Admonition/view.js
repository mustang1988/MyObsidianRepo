const DEBUG = false;
const DEFAULT_OPTIONS = {
  collapse: "open",
  raw: true,
};
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
// ===== Begin =====
let { book, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.debug(
    "[书籍Admonition渲染][Views/Item/Book/Admonition/view.js][Input]:\n",
    { book, options }
  );
const { Content, Name } = book;
const { raw, collapse } = options;
const adm = `\`\`\`ad-Book
title: 《${Name}》
collapse: ${collapse}
${Content}
\`\`\``;
DEBUG &&
  console.debug(
    "[书籍Admonition渲染][Views/Item/Book/Admonition/view.js][Return]:\n",
    adm
  );
return raw ? adm : dv.span(adm);
