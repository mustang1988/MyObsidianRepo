const DEBUG = true;
const DEFAULT_OPTIONS = {
  size: 15,
  raw: true,
};
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetQuartz = (link) => {
  const { path, subpath } = link;
  const [quartz = null] = dv.page(path).Quartzs.filter((q) => q.ID === subpath);
  if (quartz === null) {
    return { quartz: null, link: null };
  }
  return {
    quartz,
    link: dv.blockLink(path, subpath, false, quartz.Name),
  };
};
const GetIconSrc = (file) => `app://local/${this.app.vault.adapter.basePath}/${file.path}`;
const GetIconWidth = (width, height, target) =>
  Math.round((width * target) / height);
const GetQuartzIcon = async (element, rate, size) => {
  const key = `Quartz.${element}.${rate}`;
  return dv.view("Icons/Icon", { key, options: { raw: true } }).then((icon) => {
    console.error(icon, key);
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
  console.log(
    "[结晶回路InLine渲染][Views/Item/Quartz/InLine/view.js][Input]:\n",
    { link, options }
  );
const { quartz, link: quartzLink } = GetQuartz(link);
if (quartz === null) {
  return "";
}
const { Element, Rate } = quartz;
const { raw, size } = options;
const inline = GetQuartzIcon(Element, Rate, size).then((icon) => {
  return `${icon} ${quartzLink}`;
});
return raw ? inline : dv.span(inline);
