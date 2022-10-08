const DEBUG = true;

const DEFAULT_OPTIONS = {
  size: 20,
  raw: true,
  limit: 1,
};

const GetSize = (width, height, size) => {
  const result = Math.round((width * size) / height);
  DEBUG &&
    console.log(
      "[InLine/Item.js][GetSize()][width, height, size, return]: ",
      width,
      height,
      size,
      result
    );
  return result;
};

const GetPath = (file) => {
  const result = `${this.app.vault.adapter.basePath}/${file.path}`;
  DEBUG &&
    console.log("[InLine/Item.js][GetPath()][file, return]: ", file, result);
  return result;
};

let { name, icon, num = 0, options } = input;
options = Object.assign(DEFAULT_OPTIONS, options);
DEBUG && console.log("[InLine/Item.js][Input]: ", { name, icon, num, options });
const { limit, raw, size } = options;
return dv
  .view("Icons/Icon", { key: icon, options: { raw: true } })
  .then((icon) => {
    DEBUG &&
      console.log("[InLine/Item.js][dv.view(Icons/Icon) Return]: ", icon);
    if (icon) {
      const { File: file, Width: width, Height: height } = icon;
      const HTML = `<img width="${GetSize(width, height, size)}" src="${GetPath(
        file
      )}" /> ${name}${num > limit ? " x " + num : ""}`;
      return raw ? HTML : dv.span(HTML);
    } else {
      console.error("[InLine/Item.js][无效的图标Key]: ", icon);
    }
  });
