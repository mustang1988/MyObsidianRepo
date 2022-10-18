/**
 *
 */
// ===== Constrains =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  raw: true,
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);

// ===== Begin =====
let { file, options } = input;
options = MergeOptons(options);
DEBUG &&
  console.debug("[获取图片路径][Views/Common/Image/Path/view.js][Input]:\n", {
    file,
    options,
  });
return `app://local/${this.app.vault.adapter.basePath}/${file.path}`;
