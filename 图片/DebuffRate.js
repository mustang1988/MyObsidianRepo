const DEBUG = false;

const STATUS_ICONS_NAMES = {
  Poison: "中毒",
  Burn: "炎伤",
  Death: "即死",
  Seal: "封技",
  Freeze: "冻结",
  Nightmare: "噩梦",
  Mute: "封魔",
  Petrify: "石化",
  Delay: "延迟",
  Blind: "黑暗",
  Faint: "气绝",
  Vanish: "消失",
  Sleep: "睡眠",
  Confuse: "混乱",
  SDown: "能力降低",
};
const DEFAULT_OPTIONS = {
  size: 20,
  raw: false,
  image_only: false,
};

let ICON_MAP = null;

const MergeOptions = (options) => {
  return Object.assign(DEFAULT_OPTIONS, options);
};

const LoadStatusIcons = () => {
  if (ICON_MAP == null) {
    ICON_MAP = new Map(Object.entries(STATUS_ICONS_NAMES));
    ICON_MAP.forEach((name, key, map) => {
      map.set(key, {
        file: dv.fileLink(
          `图片/游戏攻略/英雄传说/通用/图标/状态_DEBUFF_${name}.webp`
        ),
        width: 48,
        height: 48,
        name: map.get(key),
      });
    });
  }
  DEBUG && console.debug("LoadStatusIcons, return:", ICON_MAP);
  return ICON_MAP;
};

const GetIcon = (name) => {
  const icons = LoadStatusIcons();
  return icons.has(name) ? icons.get(name) : null;
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

const ToHTML = (name, value, options) => {
  const { size, image_only } = options;
  const icon = GetIcon(name);
  DEBUG && console.debug("ToHTML, icon: ", icon);
  return icon
    ? image_only
      ? `<img width="${GetDisplaySize(icon, size)}" src="${GetIconPath(
          icon
        )}" /> ${icon.name}`
      : `<img width="${GetDisplaySize(icon, size)}" src="${GetIconPath(
          icon
        )}" /> ${icon.name} ${value}`
    : "";
};

const RenderStatusEffect = (status, options) => {
  const { raw } = options;
  const [name, value] = Object.entries(status)[0];
  const HTML = ToHTML(name, value, options);
  return raw ? HTML : dv.span(HTML);
};

const { status, options } = input;
return RenderStatusEffect(status, MergeOptions(options));
