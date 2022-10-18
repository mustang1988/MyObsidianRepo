/**
 *
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
