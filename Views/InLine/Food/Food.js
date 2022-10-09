const DEBUG = false;
const DEFAULT_OPTIONS = {
  raw: true,
  size: 20,
};
const GetIconKey = (type) => {
  let key = null;
  switch (type.toLowerCase()) {
    case "regular":
      key = "Item.Food.Regular";
      break;
    case "peculiar":
      key = "Item.Food.Peculiar";
      break;
    case "attack":
      key = "Item.Food.Attack";
      break;
    case "superb":
      key = "Item.Food.Superb";
      break;
    case "unique":
      key = "Item.Food.Unique";
      break;
  }
  return key;
};
const GetItem = (itemLink) => {
  const {
    Name: { path, subpath },
    Cook = null,
    Num = null,
    Attack,
  } = itemLink;
  const [item = null] = dv.page(path).Items.filter((i) => i.ID === subpath);
  if (item !== null) {
    item.path = path;
    item.Cook = Cook;
    item.Num = Num;
    item.Attack = Attack;
  }
  return item;
};
let { food, type, options } = input;
options = Object.assign(DEFAULT_OPTIONS, options);
const { raw, size } = options;
DEBUG && console.log("[InLine/Food/Food.js][Input]: ", { food, type, options });
const iconKey = GetIconKey(type);
DEBUG && console.log("[InLine/Food/Food.js][iconKey]: ", iconKey);
return dv
  .view("Icons/Icon", { key: iconKey, options: { raw: true } })
  .then((icon) => {
    const { Name, path, ID } = GetItem(food);
    const { File: file, Width: width, Height: height } = icon;
    const iconPath = `${this.app.vault.adapter.basePath}/${file.path}`;
    const iconSize = Math.round((width * size) / height);
    const html = `<img width="${iconSize}" src="${iconPath}" > ${dv.blockLink(
      path,
      ID,
      false,
      Name
    )}`;
    return raw ? html : dv.span(html);
  });
