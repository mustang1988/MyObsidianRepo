/**
 * 获取图标渲染用HTML
 * @params {Object} input 输入参数
 * @params {Object|Array} input.icon 图标对象
 * @params {Link} input.icon.file 图标文件连接
 * @params {Number} input.icon.width 图标文件原始宽度, 单位: 像素
 * @params {Number} input.icon.height 图标文件原始高度, 单位: 像素
 * @params {Object} input.options 选项
 * @params {Number} input.options.size 渲染图片尺寸最终高度选项, 单位: 像素, 默认值: 20
 */
const DEBUG = true;
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
  const { file, width, height } = icon;
  const { size } = options;
  return `<img width="${GetSize(width, height, size)}" src="${GetPath(
    file
  )}"/>`;
};
const GetIconHTML = (icon, options) => {
  return Array.isArray(icon)
    ? icon.map((i) => BuildHTML(i, options))
    : BuildHTML(icon, options);
};
const { icon, options } = input;
return GetIconHTML(icon, MergeOptions(options));
