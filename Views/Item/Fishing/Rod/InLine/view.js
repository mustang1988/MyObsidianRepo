// ===== Constraint =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 15,
  display_name: true,
  raw: true,
};
const ROD_ICON_KEY = "Item.Fishing.Rod";
// ===== Functions =====
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetRod = (link) => {
  const { path, subpath } = link;
  const [rod = null] = dv.page(path).Rods.filter((r) => r.ID === subpath);
  if (rod === null) {
    return { rod: null, link: null };
  }
  return {
    rod,
    link: dv.blockLink(path, subpath, false, rod.Name),
  };
};
const GetIconSrc = (file) =>
  `app://local/${this.app.vault.adapter.basePath}/${file.path}`;
const GetIconWidth = (width, height, target) =>
  Math.round((width * target) / height);
const GetRodIcon = (size) => {
  return dv
    .view("Icons/Icon", { key: ROD_ICON_KEY, options: { raw: true } })
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
// ===== Begin ===
let { link, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.debug(
    "[鱼竿InLine渲染][Views/Item/Fishing/Rod/InLine/view.js][Input]:\n",
    { link, options }
  );
const { raw, size } = options;

const inline = dv
  .view("Common/Query/Link", { link, options })
  .then(({ item: rodData, link: rodLink }) => {
    if (rodData === null) {
      return "";
    }
    return GetRodIcon(size).then((icon) => {
      if (icon === "") {
        return "";
      }
      return dv
        .view("Common/Link", { icon, link: rodLink, options })
        .then((res) => res);
    });
  });
return raw ? inline : dv.span(inline);
