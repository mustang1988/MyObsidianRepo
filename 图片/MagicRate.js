const MAGIC_ELEMENT_ICONS = {
  Earth: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/元素_地.webp"),
    width: 48,
    height: 48,
  },
  Water: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/元素_水.webp"),
    width: 48,
    height: 48,
  },
  Fire: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/元素_火.webp"),
    width: 48,
    height: 48,
  },
  Wind: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/元素_风.webp"),
    width: 48,
    height: 48,
  },
  Time: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/元素_时.webp"),
    width: 48,
    height: 48,
  },
  Space: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/元素_空.webp"),
    width: 48,
    height: 48,
  },
  Mirage: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/元素_幻.webp"),
    width: 48,
    height: 48,
  },
};
const DEFAULT_OPTIONS = {
  size: 20,
  raw: false,
  image_only: false,
  fix_order: false,
};
const MergeOptions = (options) => {
  return Object.assign(DEFAULT_OPTIONS, options);
};
const GetIcon = (index) => {
  return index < Object.keys(MAGIC_ELEMENT_ICONS).length
    ? Object.values(MAGIC_ELEMENT_ICONS)[index]
    : null;
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
  const { size, image_only, fix_order } = options;
  const result = rate.map((r, index) => {
    const icon = GetIcon(index);
    return icon
      ? image_only
        ? `<img width="${GetDisplaySize(icon, size)}" src="${GetIconPath(
            icon
          )}" />`
        : `<img width="${GetDisplaySize(icon, size)}" src="${GetIconPath(
            icon
          )}" /> ${r}`
      : "";
  });
  if (fix_order) {
    const [e, wa, f, wi, t, s, m] = result;
    return [e, t, wa, s, f, m, wi];
  }
  return result;
};
const RenderMagicRate = (rate, options) => {
  const { raw } = options;
  const HTML = ToHTML(rate, options);
  return raw ? HTML : dv.list(HTML);
};
const { rate, options } = input;
return RenderMagicRate(rate, MergeOptions(options));
