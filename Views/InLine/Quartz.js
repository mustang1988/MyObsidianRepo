const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 14,
  raw: false,
};

let { quartz, options } = input;
options = Object.assign(DEFAULT_OPTIONS, options);
DEBUG && console.log("[InLine/Quartz.js][Input]: ", { quartz, options });
const { size, raw } = options;

if (
  typeof quartz === "string" &&
  quartz.startsWith("[[") &&
  quartz.endsWith("]]")
) {
  quartz = dv.parse(quartz);
} else if (typeof quartz !== "object") {
  console.error("[InLine/Quartz.js][无效的连接]: ", { quartz, options });
}

const { path, subpath } = quartz;
const quartzList = dv.page(path).Quartzs;
const [quartzObj = null] = quartzList.filter((q) => q.Anchor === subpath);
if (quartzObj === null) {
  console.error("[InLine/Quartz.js][未找到指定回路]: ", quartz);
}

const { Element, Rank, Name: quartzName } = quartzObj;
const iconKey = `Quartz.${Element}.${Rank}`;
return dv
  .view("Icons/Icon", { key: iconKey, options: { raw: true } })
  .then((icon) => {
    if (icon === null) {
      console.error("[InLine/Quartz.js][未找到指定回路的图标]: ", quartz);
      return;
    }
    const { File: file, Width: width, Height: height } = icon;
    const link = dv.blockLink(path, subpath, false, quartzName);
    const displayWidth = Math.round((width * size) / height);
    const imagePath = `${this.app.vault.adapter.basePath}/${file.path}`;
    const HTML = `<img width="${displayWidth}" src="${imagePath}" /> ${link}`;
    DEBUG && console.log("[InLine/Quartz.js][HTML]: ", HTML);
    return raw ? HTML : dv.span(HTML);
  });
