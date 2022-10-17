/**
 *
 */
// ===== Constrains =====
const DEBUG = true;
const DEFAULT_OPTIONS = {
  html: true,
  raw: true,
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);
const LinlHTML = (icon, link, html) => {
  const { path, subpath, display } = link;
  const replacedPath = path.replace(/\.md/g, "");
  return html
    ? `<a aria-label-position="top" aria-label="${replacedPath} > ^${subpath}" data-href="${replacedPath}#^${subpath}" href="${replacedPath}#^${subpath}" class="internal-link data-link-icon data-link-icon-after data-link-text" target="_blank" rel="noopener" data-link-tags="" data-link-path="${path}">
  ${icon} ${display}
  </a>`
    : `${icon} ${link}`;
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
const result = LinlHTML(icon, link, html);
DEBUG && console.debug("[][Views/Common/Link/view.js][Return]:\n", result);
return result;
