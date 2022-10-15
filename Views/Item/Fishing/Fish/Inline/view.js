// ===== Constrains =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 15,
  fish_size: "s", // "s", "m", "l"
  display_name: false,
  raw: true,
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetIconSrc = (file) =>
  `app://local/${this.app.vault.adapter.basePath}/${file.path}`;
const GetIconWidth = (width, height, target) =>
  Math.round((width * target) / height);
const GetFishIcon = async (size, fSize) => {
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
const GetFish = (link) => {
  const { path, subpath } = link;
  const [fish = null] = dv.page(path).Fishes.filter((f) => f.ID === subpath);
  if (fish === null) {
    return { fish: null, link: null };
  }
  return {
    fish,
    link: dv.blockLink(path, subpath, false, fish.Name),
  };
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
const inline = GetFishIcon(size, fSize).then((icon) => {
  if (icon === "") {
    return "";
  }
  if (display_name) {
    const { fish: fishData, link: fishLink } = GetFish(link);
    if (fishData === null) {
      return "";
    }
    return `${icon} ${fishLink}`;
  }
  return `${icon}`;
});
return raw ? inline : dv.span(inline);
