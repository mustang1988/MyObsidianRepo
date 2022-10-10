/**
 * InLine 鱼竿渲染
 * @params {Link} rod 鱼竿在数据库中的块连接([[游戏攻略/英雄传说 闪之轨迹/数据库/物品#^xiaoqiaosheshou]])
 * @params {Object} options, 可选配置参数
 * TODO
 */

const DEBUG = true;
const DEFAULT_OPTIONS = {
  size: 20,
  raw: true,
};

const GetRod = (rodLink) => {
  const {
    Name: { path, subpath },
  } = rodLink;
  const [rodData = null] = dv.page(path).Items.filter((i) => i.ID === subpath);
  console.error(rodData);
  const resultLink = dv.blockLink(path, subpath, false, rodData.Name);
  return resultLink;
};

const GetIcon = () => {
  const key = "Item.Fishing.Rod";
  return dv.view("Icons/Icon", { key, options: { raw: true } }).then((icon) => {
    return icon;
  });
};

const GetSize = (width, height, size) => {
  return Math.round((width * size) / height);
};

const GetPath = (file) => {
  return `${this.app.vault.adapter.basePath}/${file.path}`;
};

let { rod: rodLink, options } = input;
options = Object.assign(DEFAULT_OPTIONS, options);
DEBUG &&
  console.log("[InLine/Fish/Rod.js][Input]: ", { rod: rodLink, options });
return GetIcon().then((icon) => {
  console.log("icon => ", icon);
  const { File: file, Width: width, Height: height } = icon;
  const { raw, size } = options;
  const content = `<img src="${GetPath(file)}" width="${GetSize(
    width,
    height,
    size
  )}" /> ${GetRod(rodLink)}`;
  return raw ? content : dv.span(content);
});
