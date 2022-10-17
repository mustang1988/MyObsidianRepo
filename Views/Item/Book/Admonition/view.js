/**
 *
 */
// ===== Constraints =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  collapse: "none",
  prefix: "《",
  suffix: "》",
  db: "游戏攻略/英雄传说 闪之轨迹/数据库/书籍",
  raw: true,
};
// ===== Functions =====
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
// ===== Begin =====
let { book, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.debug(
    "[书籍Admonition渲染][Views/Item/Book/Admonition/view.js][Input]:\n",
    { book, options }
  );
const { raw, collapse, db } = options;

const adm = dv
  .view("Common/Query/ID", { id: book.ID, db, options })
  .then(({ item: bookData, link: bookLink }) => {
    DEBUG &&
      console.debug(
        "[书籍Admonition渲染][Views/Item/Book/Admonition/view.js][bookData]:\n",
        bookData
      );
    if (bookData === null) {
      return "";
    }
    const { Content } = bookData;
    return `\`\`\`ad-Book
title: ${bookLink}
collapse: ${collapse}
${Content}
\`\`\``;
  });
return raw ? adm : dv.span(adm);
