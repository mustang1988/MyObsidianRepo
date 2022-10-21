/**
 * 获取指定图片的src路径
 * @params {Object} file 图片的wiki连接对象
 * @params {String} file.path 图片在Obsidian库中的路径
 * @params {Object} options 可选配置参数
 * @return 图片在HTML <img> 标签中的src属性值
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
const { path } = file;
if(path === undefined || path === null){
  DEBUG && console.error("[获取图片路径][Views/Common/Image/Path/view.js][无效的图片连接]:\n", {
    file,
    options,
  });
  return "";
}
return `app://local/${this.app.vault.adapter.basePath}/${path}`;
