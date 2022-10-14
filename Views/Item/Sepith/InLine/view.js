// ===== Constraint =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 15,
  raw: true,
  display_name: false,
};
// ===== Functions =====
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetSepith = (link, withName) => {
  const { path, subpath } = link;
  const [item] = dv.page(path).Items.filter((i) => i.ID === subpath);
  if (item === null) {
    return { sepith: null, link: null };
  }
  return {
    sepith: item,
    link: dv.blockLink(path, subpath, false, withName ? item.Name : " "),
  };
};
const GetIconSrc = (file) => `app://local/${this.app.vault.adapter.basePath}/${file.path}`;
const GetIconWidth = (width, height, target) =>
  Math.round((width * target) / height);
const GetSepithIcon = (size, element) => {
  const key = `Item.Sepith.${element}`;
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
// ===== Begin =====
let { link, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.debug(
    "[耀晶片InLine渲染][Views/Item/Sepith/InLine/view.js][Input]:\n",
    { link, options }
  );
const { size, raw, display_name } = options;
const { sepith: sepithData, link: sepithLink } = GetSepith(link, display_name);
if (sepithData === null) {
  return "";
}
const inline = GetSepithIcon(size, sepithData.Element).then((icon) => {
  if (icon === "") {
    return "";
  }
  return `${icon} ${sepithLink}`;
});
return raw ? inline : dv.span(inline);
