const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 15,
  html: true,
  prefix: "《",
  suffix: "》",
  raw: true,
};
const BOOK_ICON_KEY = "Item.Book";
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetBookIcon = async (size) => {
  return dv
    .view("Icons/Icon", { key: BOOK_ICON_KEY, options: { raw: true } })
    .then((icon) => {
      if (icon === null) {
        return "";
      }
      const { File: file, Width: width, Height: height } = icon;
      return dv
        .view("Common/Image/Resize", {
          width,
          height,
          options,
        })
        .then((w) => {
          return dv.view("Common/Image/Path", { file, options }).then((p) => {
            return `<img src="${p}" width="${w}" />`;
          });
        });
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
const { raw, size } = options;
const inline = dv
  .view("Common/Query/Link", { link, options })
  .then(({ item: bookData, link: bookLink }) => {
    DEBUG &&
      console.debug(
        "[书籍InLine渲染][Views/Item/Book/InLine/view.js][{item, link}]:\n",
        {
          item: bookData,
          link: bookLink,
        }
      );
    if (bookData === null) {
      return "";
    }
    return GetBookIcon(size).then((icon) => {
      DEBUG &&
        console.debug(
          "[书籍InLine渲染][Views/Item/Book/InLine/view.js][icon]:\n",
          icon
        );
      if (icon === "") {
        return "";
      }
      return dv
        .view("Common/Link", { icon, link: bookLink, options })
        .then((res) => res);
    });
  });
return raw ? inline : dv.span(inline);
