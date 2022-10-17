const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 15,
  raw: true,
};
const POTION_ICON_KEY = "Item.Potion";
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetPotion = (link) => {
  const { path, subpath } = link;
  const [potion = null] = dv.page(path).Potions.filter((p) => p.ID === subpath);
  if (potion === null) {
    return { potion: null, link: null };
  }
  return {
    potion,
    link: dv.blockLink(path, subpath, false, potion.Name),
  };
};
const GetSize = (width, height, targetSize) => {
  return Math.round((width * targetSize) / height);
};

const GetSource = (file) => {
  return `app://local/${this.app.vault.adapter.basePath}/${file.path}`;
};
const GetPotionIcon = async (size) => {
  return dv
    .view("Icons/Icon", {
      key: POTION_ICON_KEY,
      options: { raw: true },
    })
    .then((icon) => {
      if (icon === null) {
        return "";
      }
      const { File: file, Width: width, Height: height } = icon;
      return `<img src="${GetSource(file)}" width="${GetSize(
        width,
        height,
        size
      )}"/>`;
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
    "[消耗品InLine渲染][Views/Item/Potion/Inline/view.js][Input]:\n",
    { link, options }
  );

const { size, raw } = options;
const inline = GetPotionIcon(size).then((icon) => {
  if (icon === "") {
    return "";
  }
  const { link: potionLink } = GetPotion(link);
  return GetLinkHTML(icon, quartzLink, html);
});
return raw ? inline : dv.span(inline);
