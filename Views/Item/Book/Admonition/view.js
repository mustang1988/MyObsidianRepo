/**
 *
 */
// ===== Constraints =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  collapse: "open",
  db: "游戏攻略/英雄传说 闪之轨迹/数据库/书籍",
  raw: true,
};
// ===== Functions =====
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetBook = (id, db) => {
  const [book = null] = dv.page(db).Books.filter((b) => b.ID === id);
  if (book === null) {
    return { book: null, link: null };
  }
  return {
    book,
    link: dv.blockLink(db, id, false, `《${book.Name}》`),
  };
};
// ===== Begin =====
let { book, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.debug(
    "[书籍Admonition渲染][Views/Item/Book/Admonition/view.js][Input]:\n",
    { book, options }
  );
const { raw, collapse, db } = options;
const { book: bookData, link } = GetBook(book.ID, db);
DEBUG &&
  console.debug(
    "[书籍Admonition渲染][Views/Item/Book/Admonition/view.js][bookData]:\n",
    bookData
  );
if (bookData === null) {
  return "";
}
const { Content } = bookData;
const adm = `\`\`\`ad-Book
title: ${link}
collapse: ${collapse}
${Content}
\`\`\``;
DEBUG &&
  console.debug(
    "[书籍Admonition渲染][Views/Item/Book/Admonition/view.js][Return]:\n",
    adm
  );
return raw ? adm : dv.span(adm);
