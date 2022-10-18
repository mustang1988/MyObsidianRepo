/**
 *
 */
// ===== Constrains =====
const DEBUG = true;
const DEFAULT_OPTIONS = {
  size: 15,
  display_name: true,
  raw: true,
};
const ACCESSORY_ICON_KEY = "Item.Equipment.Accessory";
// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetAccessoryIcon = async (options) => {
  return dv
    .view("Icons/Icon", {
      key: ACCESSORY_ICON_KEY,
      options,
    })
    .then((icon) => {
      if (icon === null) {
        return "";
      }
      const { File: file, Width: w, Height: h } = icon;
      return dv
        .view("Common/Image/Resize", {
          width: w,
          height: h,
          options,
        })
        .then((w) => {
          return dv
            .view("Common/Image/Path", { file, options })
            .then((p) => {
              return `<img src="${p}" width="${w}" />`;
            });
        });
    });
};
// ===== Begin =====
let { link, options } = input;
options = MergeOptons(options);
DEBUG &&
  console.debug(
    "[饰品InLine渲染][Views/Equipment/Accessory/InLine/view.js][Input]:\n",
    { link, options }
  );
const inline = dv.view("Common/Query/Link", {link, options}).then(({item: accessoryData, link: accessoryLink}) => {
  if(accessoryData === null) {
    return '';
  }
  return GetAccessoryIcon(options).then(icon => {
    if(icon === ''){
      return ''
    }
    return dv.view("Common/Link",{icon, link: accessoryLink, options});
  })
});
const { raw } = options;
return raw ? inline : dv.span(inline);
