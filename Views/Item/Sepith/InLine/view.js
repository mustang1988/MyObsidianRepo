// ===== Constraint =====
const DEBUG = true;
const DEFAULT_OPTIONS = {
  size: 15,
  display_name: true,
  raw: true,
};
// ===== Functions =====
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetSepithIcon = (options, element) => {
  const key = `Item.Sepith.${element}`;
  return dv.view("Icons/Icon", { key, options: { raw: true } }).then((icon) => {
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
    "[耀晶片InLine渲染][Views/Item/Sepith/InLine/view.js][Input]:\n",
    { link, options }
  );
const { size, raw, display_name } = options;
const inline = dv
  .view("Common/Query/Link", { link, options })
  .then(({ item: sepithData, link: sepithLink }) => {
    if (sepithData === null) {
      return "";
    }
    return GetSepithIcon(options, sepithData.Element).then((icon) => {
      if (icon === "") {
        return "";
      }
      return dv.view("Common/Link", { icon, link: sepithLink, options });
    });
  });
return raw ? inline : dv.span(inline);
