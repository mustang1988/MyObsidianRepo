const DEBUG = true;

let { book, options } = input;
const { size = 20 } = options;
DEBUG && console.log("[InLine/Book.js][Input]: ", { book, options });
if (typeof book === "string") {
  book = dv.parse(book);
}
if (typeof book !== "object") {
  console.error("[InLine/Book.js][无效的连接]: ", input);
  return;
}
const { path, subpath } = book;
const books = dv.page(path).Books;
const [bookObj = null] = books.filter((b) => b.Anchor === subpath);
if (bookObj) {
  const { Name: bookName } = bookObj;
  return dv
    .view("Icons/Icon", { key: "Item.Book", options: { raw: true } })
    .then((icon) => {
      if (icon) {
        const { File: file, Width: width, Width: height } = icon;
        const displayWidth = Math.round((width * size) / height);
        const imagePath = `${this.app.vault.adapter.basePath}/${file.path}`;
        const link = dv.blockLink(path, subpath, false, `《${bookName}》`);
        const imageHTML = `<img width="${displayWidth}" src="${imagePath}" /> ${link}`;
        DEBUG && console.log("[InLine/Book.js][imageHTML]: ", imageHTML);
        return imageHTML;
      } else {
        console.error("[InLine/Book.js][未找到书籍图标]: ", input);
      }
    });
} else {
  console.error("[InLine/Book.js][未找到书籍]: ", input);
  return;
}
