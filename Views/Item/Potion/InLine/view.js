// ===== Constraints =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 15,
  display_name: true,
  raw: true,
};
const POTION_ICON_KEY = "Item.Potion";
// ===== Functions =====
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetPotionIcon = async (options) => {
  return dv
    .view("Icons/Icon", {
      key: POTION_ICON_KEY,
      options: { raw: true },
    })
    .then((icon) => {
      if (icon === undefined) {
        return "";
      }
      const { File: file, Width: width, Height: height } = icon;
      return dv
        .view("Common/Image/Resize", { width, height, options })
        .then((w) => {
          return dv.view("Common/Image/Path", { file, options }).then((p) => {
            return `<img src="${p}" width="${w}"/>`;
          });
        });
    });
};

// ===== Begin =====
let { link, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.debug(
    "[消耗品InLine渲染][Views/Item/Potion/Inline/view.js][Input]:\n",
    { link, options }
  );

const { raw, html } = options;

const inline = dv
  .view("Common/Query/Link", { link, options })
  .then(({ item: potionData, link: potionLink }) => {
    if (potionData === null) {
      return "";
    }
    return GetPotionIcon(options).then((icon) => {
      if (icon === "") {
        return "";
      }
      return dv.view("Common/Link", { icon, link: potionLink, options });
    });
  });
return raw ? inline : dv.span(inline);
