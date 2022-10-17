const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 15,
  html: false,
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
const GetIconSrc = (file) =>
  `app://local/${this.app.vault.adapter.basePath}/${file.path}`;
const GetIconWidth = (width, height, target) =>
  Math.round((width * target) / height);
const GetQuartzIcon = async (element, rate, size) => {
  const key = `Quartz.${element}.${rate}`;
  return dv.view("Icons/Icon", { key, options: { raw: true } }).then((icon) => {
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
const GetLinkHTML = (icon, link, html) => {
  DEBUG &&
    console.debug("[耀晶片InLine渲染][GetLinkHTML()][{icon, link}]:\n", {
      icon,
      link,
    });
  const { path, subpath, display } = link;
  return html
    ? `<a aria-label-position="top" aria-label="${path} > ^${subpath}" data-href="${path.replace(
        /\.md/g,
        ""
      )}#^${subpath}" href="${path.replace(
        /\.md/g,
        ""
      )}#^${subpath}" class="internal-link data-link-icon data-link-icon-after data-link-text" target="_blank" rel="noopener" data-link-tags="" data-link-path="${path}" >${icon}${
        display ? display : ""
      }</a>`
    : `${icon} ${link}`;
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
const { raw, size, html } = options;
const inline = GetQuartzIcon(Element, Rate, size).then((icon) => {
  return GetLinkHTML(icon, quartzLink, html);
});
return raw ? inline : dv.span(inline);
