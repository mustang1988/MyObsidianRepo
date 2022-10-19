/**
 * 
 */
// ===== Constrains =====
const DEBUG = true;
const DEFAULT_OPTIONS = {
    raw: true,
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);

// ===== Begin =====
let { link, options } = input;
options = MergeOptons(options);
DEBUG && console.debug("[][Views/][Input]:\n", { link, options });
const { path, subpath, display='' } = link;
const replacedPath = path.replace(/\.md/g, "");
return `<a aria-label-position="top" aria-label="${replacedPath} > ^${subpath}" data-href="${replacedPath}#^${subpath}" href="${replacedPath}#^${subpath}" class="internal-link data-link-icon data-link-icon-after data-link-text" target="_blank" rel="noopener" data-link-tags="" data-link-path="${path}">${display}</a>`