const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 15,
  raw: true,
};
const ICON_KEY = "Item.Food.Regular";

const MergeOptions = (options) => {
  return Object.assign(DEFAULT_OPTIONS, options);
};

const GetFood = (link) => {
  const { path, subpath } = link;
  const [food = null] = dv.page(path).Foods.filter((i) => i.ID === subpath);
  if (food === null) {
    return {food:null, link:null};
  }
  return {
    food,
    link:dv.blockLink(path, subpath, false, food.Name)
  };
};

const GetSize = (width, height, targetSize) => {
  return Math.round((width * targetSize) / height);
};

const GetSource = (file) => {
  return `app://local/${this.app.vault.adapter.basePath}/${file.path}`;
};

const GetFoodIcon = async (options) => {
  const { size } = options;
  return dv
    .view("Icons/Icon", { key: ICON_KEY, options: { raw: true } })
    .then((icon) => {
      const { File: file, Width: width, Height: height } = icon;
      return {
        source: GetSource(file),
        size: GetSize(width, height, size),
      };
    });
};

let { link, options } = input;
options = MergeOptions(options);
DEBUG &&
  console.log("[Food/InLine/Regular/view.js][Input]: ", { link, options });

return GetFoodIcon(options).then((icon) => {
  const { source, size } = icon;
  const {food: foodData, link: foodLink} = GetFood(link);
  if(foodData===null){
    return '';
  }
  const { raw } = options;
  const html = `<img src="${source}" width="${size}" /> ${foodLink}`;
  return raw ? html : dv.span(html);
});
