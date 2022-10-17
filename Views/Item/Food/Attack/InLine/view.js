const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 15,
  display_name: true,
  raw: true,
};
const ICON_KEY = "Item.Food.Attack";

const MergeOptions = (options) => {
  return Object.assign(DEFAULT_OPTIONS, options);
};

const GetFood = (link) => {
  const { path, subpath } = link;
  const [food = null] = dv.page(path).Foods.filter((i) => i.ID === subpath);
  if (food === null) {
    return { food: null, link: null };
  }
  return {
    food,
    link: dv.blockLink(path, subpath, false, food.Name),
  };
};

const GetSize = (width, height, targetSize) => {
  return Math.round((width * targetSize) / height);
};

const GetSource = (file) => {
  return `app://local/${this.app.vault.adapter.basePath}/${file.path}`;
};

const GetFoodIcon = async (options) => {
  return dv
    .view("Icons/Icon", { key: ICON_KEY, options: { raw: true } })
    .then((icon) => {
      if (icon === undefined) {
        return "";
      }
      const { File: file, Width: width, Height: height } = icon;
      return dv
        .view("Common/Image/Resize", { width, height, options })
        .then((w) => {
          return dv.view("Common/Image/Path", { file, options }).then((p) => {
            return `<img src="${p}" width="${w}"/>`;
          });
        });
    });
};
// ===== Begin =====
let { link, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.log("[Food/InLine/Unique/view.js][Input]: ", { link, options });

const inline = dv
  .view("Common/Query/Link", { link, options })
  .then(({ item: foodData, link: foodLink }) => {
    if (foodData === null) {
      return "";
    }
    return GetFoodIcon(options).then((icon) => {
      if (icon === "") {
        return "";
      }
      return dv.view("Common/Link", { icon, link: foodLink, options });
    });
  });
const { raw } = options;
return raw ? inline : dv.span(inline);
