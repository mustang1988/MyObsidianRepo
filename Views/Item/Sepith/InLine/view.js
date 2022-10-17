// ===== Constraint =====
const DEBUG = true;
const DEFAULT_OPTIONS = {
  size: 15,
  html: false,
  display_name: false,
  //
  raw: true,
};
// ===== Functions =====
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetSepith = (link, withName) => {
  const { path, subpath } = link;
  const [item] = dv.page(path).Items.filter((i) => i.ID === subpath);
  if (item === null) {
    return { sepith: null, link: null };
  }
  return {
    sepith: item,
    link: dv.blockLink(path, subpath, false, withName ? item.Name : ""),
  };
};
const GetIconSrc = (file) =>
  `app://local/${this.app.vault.adapter.basePath}/${file.path}`;
const GetIconWidth = (width, height, target) =>
  Math.round((width * target) / height);
const GetSepithIcon = (size, element) => {
  const key = `Item.Sepith.${element}`;
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
const GetLinkHTML = (icon, link) => {
  DEBUG &&
    console.debug("[耀晶片InLine渲染][GetLinkHTML()][{icon, link}]:\n", {
      icon,
      link,
    });
  const { path, subpath, display } = link;
  return `<a aria-label-position="top" aria-label="${path} > ^${subpath}" data-href="${path.replace(
    /\.md/g,
    ""
  )}#^${subpath}" href="${path.replace(
    /\.md/g,
    ""
  )}#^${subpath}" class="internal-link data-link-icon data-link-icon-after data-link-text" target="_blank" rel="noopener" data-link-tags="" data-link-path="${path}" >${icon}${
    display ? display : ""
  }</a>`;
};
// ===== Begin =====
let { link, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.debug(
    "[耀晶片InLine渲染][Views/Item/Sepith/InLine/view.js][Input]:\n",
    { link, options }
  );
const { size, raw, display_name, html } = options;
const { sepith: sepithData, link: sepithLink } = GetSepith(link, display_name);
if (sepithData === null) {
  return "";
}
const inline = GetSepithIcon(size, sepithData.Element).then((icon) => {
  if (icon === "") {
    return "";
  }
  return GetLinkHTML(icon, sepithLink, html);
});
return raw ? inline : dv.span(inline);
