const DEBUG = false;
const START_ICON = {
  file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/其他_星.webp"),
  width: 24,
  height: 32,
};
const EMPTY_START_ICON = {
  file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/其他_空星.webp"),
  width: 24,
  height: 32,
};
const DEFAULT_OPTIONS = {
  size: 20,
  raw: false,
};
const MergeOptions = (options) => {
  return Object.assign(DEFAULT_OPTIONS, options);
};
const GetDisplaySize = (icon, size) => {
  const { width, height } = icon;
  return Math.round((width * size) / height);
};
const GetIconPath = (icon) => {
  const {
    file: { path },
  } = icon;
  return `${this.app.vault.adapter.basePath}/${path}`;
};
const ToHTML = (rate, options) => {
  const { size } = options;
  let HTML = "";
  for (let i = 1; i <= 5; i++) {
    HTML +=
      i <= rate
        ? `<img width="${GetDisplaySize(START_ICON, size)}" src="${GetIconPath(
            START_ICON
          )}"/>`
        : `<img width="${GetDisplaySize(
            EMPTY_START_ICON,
            size
          )}" src="${GetIconPath(EMPTY_START_ICON)}"/>`;
  }
  return HTML;
};
const RenderRate = (rate, options) => {
  const { raw } = options;
  rate = rate > 5 ? 5 : rate;
  rate = rate < 0 ? 0 : rate;
  const HTML = ToHTML(rate, options);
  return raw ? HTML : dv.span(HTML);
};
const { rate = 0, options } = input;
return RenderRate(rate, MergeOptions(options));
