// ===== Constrains =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 15,
  fish_size: "s", // "s", "m", "l"
  display_name: true,
  raw: true,
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetFishIcon = async (options, fSize) => {
  let key = null;
  switch (fSize.toLowerCase()) {
    case "s":
      key = "Item.Fishing.FishS";
      break;
    case "m":
      key = "Item.Fishing.FishM";
      break;
    case "l":
      key = "Item.Fishing.FishL";
      break;
    default:
      key = "Item.Fishing.FishS";
      break;
  }
  return dv.view("Icons/Icon", { key, options }).then((icon) => {
    if (icon === null) {
      return "";
    }
    const { File: file, Width: width, Height: height } = icon;
    return dv
      .view("Common/Image/Resize", { width, height, options })
      .then((w) => {
        return dv.view("Common/Image/Path", { file, options }).then((src) => {
          return `<img src="${src}" width="${w}" />`;
        });
      });
  });
};

// ===== Begin =====
let { link, options } = input;
options = MergeOptons(options);
DEBUG &&
  console.debug(
    "[鱼InLine渲染][Views/Item/Fishing/Fish/InLine/view.js][Input]:\n",
    { link, options }
  );

const { raw, size, fish_size: fSize, display_name } = options;
const inline = dv
  .view("Common/Query/Link", { link, options })
  .then(({ item: fishData, link: fishLink }) => {
    if (fishData === null) {
      return "";
    }
    return GetFishIcon(options, fSize).then((icon) => {
      if (icon === "") {
        return "";
      }
      return dv
        .view("Common/Link", { icon, link: fishLink, options })
        .then((res) => res);
    });
  });
return raw ? inline : dv.span(inline);
