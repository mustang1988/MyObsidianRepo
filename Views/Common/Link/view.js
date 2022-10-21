/**
 * 获取指定连接的HTML渲染内容
 * @params {String} icon 连接的图标HTML
 * @params {Object} link 连接对象
 * @params {String} link.path 连接的文件路径
 * @params {String} link.subpath 连接的block ID
 * @params {String} link.display 连接显示名
 */
// ===== Constrains =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  raw: true,
};
// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);
const LinlHTML = (icon, link) => {
  const { path, subpath, display } = link;
  const replacedPath = path.replace(/\.md/g, "");
  return `<a aria-label-position="top" aria-label="${replacedPath} > ^${subpath}" data-href="${replacedPath}#^${subpath}" href="${replacedPath}#^${subpath}" class="internal-link data-link-icon data-link-icon-after data-link-text" target="_blank" rel="noopener" data-link-tags="" data-link-path="${path}">
  ${icon} ${display}
  </a>`;
};
// ===== Begin =====
let { icon, link, options } = input;
options = MergeOptons(options);
DEBUG &&
  console.debug("[][Views/Common/Link/view.js][Input]:\n", {
    icon,
    link,
    options,
  });
const { html } = options;
const result = LinlHTML(icon, link);
DEBUG && console.debug("[][Views/Common/Link/view.js][Return]:\n", result);
return result;
