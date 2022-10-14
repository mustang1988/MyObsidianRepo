
const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 20,
};
const MergeOptions = (options) => {
  return Object.assign(DEFAULT_OPTIONS, options);
};
const GetSize = (width, height, size) => {
  return Math.round((width * size) / height);
};
const GetPath = (icon) => {
  const { path } = icon;
  return `${this.app.vault.adapter.basePath}/${path}`;
};
const BuildHTML = (icon, options) => {
  const { file, width, height, File, Width, Height } = icon;
  const { size } = options;
  return `<img width="${GetSize(
    width || Width,
    height || Height,
    size
  )}" src="${GetPath(file || File)}"/>`;
};
const GetIconHTML = (icon, options) => {
  return Array.isArray(icon)
    ? icon.map((i) => BuildHTML(i, options))
    : BuildHTML(icon, options);
};
const { icon, options } = input;
DEBUG && console.log("GetIconHTML.js", MergeOptions(options));
return GetIconHTML(icon, MergeOptions(options));
