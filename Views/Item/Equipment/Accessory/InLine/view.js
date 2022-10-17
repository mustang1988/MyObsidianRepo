/**
 *
 */
// ===== Constrains =====
const DEBUG = true;
const DEFAULT_OPTIONS = {
  size: 15,
  html: false,
  raw: true,
};
const ACCESSORY_ICON_KEY = "Item.Equipment.Accessory";
// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetAccessory = (link) => {
  const { path, subpath } = link;
  const [accessory = null] = dv
    .page(path)
    .Accessories.filter((a) => a.ID === subpath);
  if (accessory === null) {
    return { accessory: null, link: null };
  }
  return {
    accessory,
    link: dv.blockLink(path, subpath, false, accessory.Name),
  };
};
const GetAccessoryIcon = async (size) => {
  return dv
    .view("Icons/Icon", {
      key: ACCESSORY_ICON_KEY,
      options: { raw: true },
    })
    .then((icon) => {
      if (icon === null) {
        return "";
      }
      const { File: file, Width: w, Height: h } = icon;
      return dv
        .view("Common/ImgSize", {
          width: w,
          height: h,
          size,
          options: { raw: true },
        })
        .then((witdh) => {
          return dv
            .view("Common/ImgPath", { file, options: { raw: true } })
            .then((path) => {
              return `<img src="${path}" width="${witdh}" />`;
            });
        });
    });
};
const GetAccessoryInLine = async (icon, link, html) => {
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
    : `${icon} ${accessoryLink}`;
};
// ===== Begin =====
let { link, options } = input;
options = MergeOptons(options);
DEBUG &&
  console.debug(
    "[饰品InLine渲染][Views/Equipment/Accessory/InLine/view.js][Input]:\n",
    { link, options }
  );
const { accessory: accessoryData, link: accessoryLink } = GetAccessory(link);
if (accessoryData === null) {
  return "";
}
const inline = GetAccessoryIcon().then((icon) => {
  if (icon === "") {
    return "";
  }
  const { html } = options;
  return GetAccessoryInLine(icon, accessoryLink, html);
});
const { raw } = options;
return raw ? inline : dv.span(inline);
