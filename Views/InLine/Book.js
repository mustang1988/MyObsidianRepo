const DEBUG = true;
const DEFAULT_OPTIONS = {
  size: 20,
  raw: false,
};

/**
 * 行内渲染书籍连接
 * @params {String|Object} book 需要渲染的书籍连接或对象
 * @params {Object} options 可选参数
 * @params {Number} options.size 图标渲染尺寸, 单位: 像素, 默认值: 20
 * @params {Boolean} options.raw 是否直接渲染, 默认值: true, 非直接渲染
 * Sample:
 *   手动渲染:
 *     dv.span(await dv.view('InLine/Book', { book: "[[游戏攻略/英雄传说 闪之轨迹/笔记/书籍笔记#^diguoshibao1|帝国时报1]]", options: { raw: true } }));
 *   直接渲染:
 *     await dv.view('InLine/Book', { book: "[[游戏攻略/英雄传说 闪之轨迹/笔记/书籍笔记#^diguoshibao1|帝国时报1]]", options: { size: 15 } });
 */
let { book, options = {} } = input;
options = Object.assign(options, DEFAULT_OPTIONS);
const { size = 20, raw = true } = options;
DEBUG && console.log("[InLine/Book.js][Input]: ", { book, options });
if (typeof book === "string" && book.startsWith("[[") && book.endsWith("]]")) {
  book = dv.parse(book);
} else if (typeof book !== "object") {
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
        return raw ? imageHTML : dv.span(imageHTML);
      } else {
        console.error("[InLine/Book.js][未找到书籍图标]: ", input);
      }
    });
} else {
  console.error("[InLine/Book.js][未找到书籍]: ", input);
  return;
}
