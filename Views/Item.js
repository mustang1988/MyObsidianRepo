const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 20,
  limit: 1,
  inline: true,
  seperator: " , ",
  raw: false,
  image_only: false,
};
const GetIconByType = async(type) => {
  return await dv.view('Icons/Item', { name: type, options: { raw: true } });
};
const MergeOptions = (options) => {
  return Object.assign(DEFAULT_OPTIONS, options);
};
const GetDisplaySize = (icon, size) => {
  const { width, height } = icon;
  return Math.round((width * size) / height);
};
const GetNum = (item, options) => {
  const { Num = 0 } = item;
  const { limit } = options;
  return Num > limit ? `x ${Num}` : "";
};
const ToHTML = async(item, options) => {
  DEBUG && console.debug("\t\tHTML组装, 参数: ", { item, options });
  const { Type, Name: ItemName } = item;
  const { size, image_only } = options;
  const icon = await GetIconByType(Type);
  let result = '';
  if(icon){
    if(image_only){
      result = `<img src="${this.app.vault.adapter.basePath}/${icon.file.path}" width="${GetDisplaySize(icon, size)}"/>`
    } else {
      result = `<img src="${this.app.vault.adapter.basePath}/${
        icon.file.path
      }" width="${GetDisplaySize(icon, size)}"/> ${ItemName} ${GetNum(
        item,
        options
      )}`
    }
  }
  DEBUG && console.debug("\t\tHTML组装, 返回结果: ", result);
  return result;
};
const RenderItem = async(item, options) => {
  DEBUG && console.debug("\t单物品渲染, 参数: ", { item, options });
  const { raw } = options;
  // 提交的item是核心回路连接
  if (item.constructor.name == "Link" && item.path.includes("核心回路")) {
    const result = dv.view("MasterQuartz", {
      quartz: dv.page(item.path),
      options,
    });
    DEBUG && console.debug("\t单物品渲染(核心回路), 返回结果: ", result);
    return result;
  }
  const result = raw ? await ToHTML(item, options) : dv.span(await ToHTML(item, options));
  DEBUG && console.debug("\t单物品渲染, 返回结果: ", result);
  return result;
};
const RenderItems = async(items, options) => {
  DEBUG && console.debug("\t多物品渲染, 参数: ", { items, options });
  const { inline, seperator, raw } = options;
  const HTML = inline
    ? await Promise.all(items.map((i) => ToHTML(i, options))).join(seperator)
    : await Promise.all(items.map((i) => ToHTML(i, options)));
  const result = raw ? HTML : inline ? dv.span(HTML) : dv.list(HTML);
  DEBUG && console.debug("\t多物品渲染, 返回结果: ", result);
  return result;
};
const { items, options } = input;
DEBUG && console.log("物品渲染脚本, 输入参数: ", { items, options });
const result = Array.isArray(items)
  ? RenderItems(items, MergeOptions(options))
  : items
  ? RenderItem(items, MergeOptions(options))
  : dv.span("无");
DEBUG && console.log("物品渲染脚本, 返回结果: ", result);
return result;
