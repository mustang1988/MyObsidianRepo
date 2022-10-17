const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 15,
  html: false,
  raw: true,
};
const INGREDIENT_ICON_KEY = "Item.Food.Ingredient";
const MergeOptions = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetSize = (width, height, size) => {
  return Math.round((width * size) / height);
};
const GetSource = (file) => {
  return `app://local/${this.app.vault.adapter.basePath}/${file.path}`;
};
const GetIngredientIcon = async (size) => {
  return dv
    .view("Icons/Icon", { key: INGREDIENT_ICON_KEY, options: { raw: true } })
    .then((icon) => {
      if (icon === null) {
        return null;
      }
      const { File: file, Width: width, Height: height } = icon;
      return `<img src="${GetSource(file)}" width="${GetSize(
        width,
        height,
        size
      )}" />`;
    });
};
const GetIngredient = (link) => {
  const { path, subpath } = link;
  const [ingredient = null] = dv
    .page(path)
    .Ingredients.filter((i) => i.ID === subpath);
  if (ingredient === null) {
    return { ingredient: null, link: null };
  }
  return {
    ingredient,
    link: dv.blockLink(path, subpath, false, ingredient.Name),
  };
};
const GetLinkHTML = (icon, link) => {
  DEBUG &&
    console.debug("[耀晶片InLine渲染][GetLinkHTML()][{icon, link}]:\n", {
      icon,
      link,
    });
  const { path, subpath, display } = link;
  return `<a aria-label-position="top" aria-label="${path} > ^${subpath}" data-href="${path.replace(
    /\.md/g,
    ""
  )}#^${subpath}" href="${path.replace(
    /\.md/g,
    ""
  )}#^${subpath}" class="internal-link data-link-icon data-link-icon-after data-link-text" target="_blank" rel="noopener" data-link-tags="" data-link-path="${path}" >${icon}${
    display ? display : ""
  }</a>`;
};
// ===== Begin =====
let { link, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.debug(
    "[食材InLine渲染][Views/Item/Food/Ingredient/view.js][Input]:\n",
    {
      link,
      options,
    }
  );
const { size, raw, html } = options;
const adm = GetIngredientIcon(size).then((icon) => {
  if (icon === null) {
    DEBUG &&
      console.debug(
        "[食材InLine渲染][Views/Item/Food/Ingredient/view.js][未找到食材图标]:\n"
      );
    return "";
  }
  const { ingredient: i, link: iLink } = GetIngredient(link);
  if (i === null) {
    DEBUG &&
      console.debug(
        "[食材InLine渲染][Views/Item/Food/Ingredient/view.js][未找到指定ID的食材]:\n",
        link
      );
    return "";
  }
  return GetLinkHTML(icon, iLink, html);
});
return raw ? adm : dv.span(adm);
