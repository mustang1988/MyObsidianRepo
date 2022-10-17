const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 15,
  html: false,
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
const GetIconSrc = (file) =>
  `app://local/${this.app.vault.adapter.basePath}/${file.path}`;
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
const GetLinkHTML = (icon, link) => {
  const { path, subpath, display } = link;
  return `<a aria-label-position="top"
  aria-label="${path} > ^${subpath}"
  data-href="${path.replace(/\.md/g, "")}#^huaxie"
  href="${path.replace(/\.md/g, "")}#^${subpath}"
  class="internal-link data-link-icon data-link-icon-after data-link-text"
  target="_blank"
  rel="noopener"
  data-link-tags=""
  data-link-path="${path}"
  >${icon}${display}</a>`;
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
const { raw, size, html } = options;
const inline = GetBookIcon(size).then((icon) => {
  if (html) {
    return GetLinkHTML(icon, bookLink);
  }
  return `${icon}${bookLink}`;
});
DEBUG &&
  console.debug(
    "[书籍InLine渲染][Views/Item/Book/InLine/view.js][Return]:\n",
    inline
  );
return raw ? inline : dv.span(inline);
