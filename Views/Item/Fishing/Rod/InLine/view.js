// ===== Constraint =====
const DEBUG = true;
const DEFAULT_OPTIONS = {
  size: 15,
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
const GetIconSrc = (file) => `${this.app.vault.adapter.basePath}/${file.path}`;
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
const inline = GetRodIcon(size).then((icon) => {
  if (icon === "") {
    return "";
  }
  const { rod: rodData, link: rodLink } = GetRod(link);
  if (rodData === null) {
    return "";
  }
  return `${icon} ${rodLink}`;
});
return raw ? inline : dv.span(inline);
