const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 15,
  raw: true,
};
const BOOK_ICON_KEY = "Item.Book";
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetBook = (link) => {
  const { path, subpath } = link;
  const [book = null] = dv.page(path).Books.filter((b) => b.ID === subpath);
  if (book === null) {
    return { book, link: null };
  }
  return {
    book,
    link: dv.blockLink(path, subpath, false, `《${book.Name}》`),
  };
};
const GetIconSrc = (file) => `${this.app.vault.adapter.basePath}/${file.path}`;
const GetIconWidth = (width, height, target) =>
  Math.round((width * target) / height);
const GetBookIcon = async (size) => {
  return dv
    .view("Icons/Icon", { key: BOOK_ICON_KEY, options: { raw: true } })
    .then((icon) => {
      if (icon === null) {
        return "";
      }
      const { File: file, Width: width, Height: height } = icon;
      return `<img src="${GetIconSrc(file)}" width="${GetIconWidth(
        width,
        height,
        size
      )}" />`;
    });
};
// ===== Begin =====
let { link, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.debug("[书籍InLine渲染][Views/Item/Book/InLine/view.js][Input]:\n", {
    link,
    options,
  });
const { book, link: bookLink } = GetBook(link);
if (book === null) {
  return "";
}
const { raw, size } = options;
const inline = GetBookIcon(size).then((icon) => {
  return `${icon}${bookLink}`;
});
DEBUG &&
  console.debug(
    "[书籍InLine渲染][Views/Item/Book/InLine/view.js][Return]:\n",
    inline
  );
return raw ? inline : dv.span(inline);
