// ===== Constraints =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 15,
  display_name: true,
  raw: true,
};
// ===== Functions =====
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetQuartzIcon = async (element, rate, options) => {
  const key = `Quartz.${element}.${rate}`;
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
  console.log(
    "[结晶回路InLine渲染][Views/Item/Quartz/InLine/view.js][Input]:\n",
    { link, options }
  );

const inline = dv
  .view("Common/Query/Link", { link, options })
  .then(({ item: quartzData, link: quartzLink }) => {
    if (quartzData === null) {
      return "";
    }
    const { Element, Rate } = quartzData;
    return GetQuartzIcon(Element, Rate, options).then((icon) => {
      if (icon === "") {
        return "";
      }
      return dv.view("Common/Link", { icon, link: quartzLink, options });
    });
  });
const { raw } = options;
return raw ? inline : dv.span(inline);
