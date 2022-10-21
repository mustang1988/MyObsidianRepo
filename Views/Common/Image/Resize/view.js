/**
 * 获取指定宽高的图片缩放到指定尺寸后的宽度值
 * @params {Number} width 图片原始宽度
 * @params {Number} height 图片原始高度
 * @params {Object} options 可选配置参数
 * @params {Number} options.size 目标图标尺寸, 默认值: 15
 * @return 等比例缩放后的图片宽度
 */
// ===== Constrains =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 15,
  raw: true,
};
// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);
// ===== Begin =====
let { width, height, options } = input;
options = MergeOptons(options);
DEBUG &&
  console.debug("[获取图标尺寸][Views/Common/Image/Resize/view.js][Input]:\n", {
    width,
    height,
    options,
  });
width = parseFloat(width);
height = parseFloat(height);
if (width === NaN || height === NaN) {
  DEBUG &&
    console.error(
      "[获取图标尺寸][Views/Common/Image/Resize/view.js][无效的width/height参数]:\n",
      { width, height }
    );
  return 0;
}
const { size } = options;
return Math.round((width * size) / height);
