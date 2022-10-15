// ===== Constraints =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 15,
  raw: true,
  display_name: false,
};
const U_MATERIAL_ICON_KEY = "Item.UMaterial";
// ===== Functions =====
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetUMaterial = (link, withName) => {
  const { path, subpath } = link;
  const [item = null] = dv.page(path).Items.filter((i) => i.ID === subpath);
  if (item === null) {
    return { item: null, link: null };
  }
  return {
    item,
    link: dv.blockLink(path, subpath, false, withName ? item.Name : " "),
  };
};
const GetIconSrc = (file) =>
  `app://local/${this.app.vault.adapter.basePath}/${file.path}`;
const GetIconWidth = (width, height, target) =>
  Math.round((width * target) / height);
const GetUMaterialIcon = async (size) => {
  return dv
    .view("Icons/Icon", { key: U_MATERIAL_ICON_KEY, options: { raw: true } })
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
// ===== Begin =====
let { link, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.debug(
    "[U物质InLine渲染][Views/Item/UMaterial/InLine/view.js][Input]:\n",
    { link, options }
  );
const { raw, size, display_name } = options;
const { item: itemData, link: itemLink } = GetUMaterial(link, display_name);
if (itemData === null) {
  return "";
}

const inline = GetUMaterialIcon(size).then((icon) => {
  if (icon === "") {
    return "";
  }
  return `${icon} ${itemLink}`;
});
return raw ? inline : dv.span(inline);
