// ===== Constraints =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 15,
  display_name: true,
  raw: true,
};
const U_MATERIAL_ICON_KEY = "Item.UMaterial";
// ===== Functions =====
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetUMaterialIcon = async (options) => {
  return dv
    .view("Icons/Icon", { key: U_MATERIAL_ICON_KEY, options: { raw: true } })
    .then((icon) => {
      if (icon === null) {
        return "";
      }
      const { File: file, Width: width, Height: height } = icon;
      return dv
        .view("Common/Image/Resize", { width, height, options })
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
  console.debug(
    "[U物质InLine渲染][Views/Item/UMaterial/InLine/view.js][Input]:\n",
    { link, options }
  );
const { raw } = options;
const inline = dv
  .view("Common/Query/Link", { link, options })
  .then(({ item: uData, link: uLink }) => {
    if (uData === null) {
      return "";
    }
    return GetUMaterialIcon(options).then((icon) => {
      if (icon === "") {
        return "";
      }
      return dv.view("Common/Link", { icon, link: uLink, options });
    });
  });
return raw ? inline : dv.span(inline);
