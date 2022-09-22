const RECIPE_ICON = {
  file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_普通料理.webp"),
  width: 48,
  height: 48,
};

const DEFAULT_OPTIONS = {
  raw: false,
  size: 20,
};

const MergeOptions = (options) => {
  return Object.assign(DEFAULT_OPTIONS, options);
};

const GetDisplaySize = (size) => {
  const { width, height } = RECIPE_ICON;
  return Math.round((width * size) / height);
};

const ToHTML = (recipe, options) => {
  const {
    file: { link },
  } = recipe;
  const { size } = options;
  return `<img width="${GetDisplaySize(size)}" src="${
    this.app.vault.adapter.basePath
  }/${RECIPE_ICON.file.path}" /> ${link}`;
};

const RenderRecipe = (recipe, options) => {
  const { raw } = options;
  return raw ? ToHTML(recipe, options) : dv.span(ToHTML(recipe, options));
};

const { recipe, options } = input;
return RenderRecipe(recipe, MergeOptions(options));
