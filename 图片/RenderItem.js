const _GetFieldValue = (item, field) => item[field];

// 获取图标图片的完整路径
const _GetImagePath = (item, fields) => {
   const image = _GetFieldValue(item, fields.icon)||null;
   return image
      ? `${this.app.vault.adapter.basePath}/${image.path}`
      : '';
}

// 获取显示在名称后的数量
const _GetNum = (item, display_num, fields) => {
   const num = _GetFieldValue(item, fields.num)||0;
   return parseInt(num) > display_num
      ? ' x ' + parseInt(num)
      : '';
}

// 根据参数构造需要渲染的HTML元素
const _BuildItemHTML = (item, { width, display_num, fields } ) => {
   // 图标, 名称, 数量均有效
   const image = _GetImagePath(item, fields);
   const name = _GetFieldValue(item, fields.name)||'';
   const num = _GetNum(item, display_num, fields);
   if(image && name && num) {
      return `<img width="${width}" src="${image}"/>${name}${num}`;
   } else if(image && name) {
      // 数量无效, 不显示数量
      return `<img width="${width}" src="${image}"/>${name}`;
      // 图标无效, 不显示图标
   } else if(name && num) {
      return `${name}${num}`;
   } else {
      return '';
   }
}

/**
 * 渲染多个物品
 * @params {Array} items 需要渲染的物品
 * @params {Number} width 图标图片尺寸, 默认值: 15
 * @params {Number} display_num 显示数量的下限, 大于次值的数量会显示, 默认值: 1
 * @params {Boolean} inline 多个物品是否输出到一行, 默认值: false
 * @params {String} seperator 多个物品输出到一行时使用的分隔符, 默认值: " , "
 */
const Renderitems = async (items, options) => {
   const title = options.title ? `${options.title}: ` : '';
   return options.inline
   ? dv.paragraph(title + items.map(item => _BuildItemHTML(item, options))
      .filter(item => item !== '')
      .join(options.separator))
   : items.forEach(item => dv.paragraph(_BuildItemHTML(item, options)));
}

/**
 * 渲染单个物品
 * @params {Object} item 需要渲染的物品
 * @params {Number} width 图标图片尺寸, 默认值: 15
 * @params {Number} display_num 显示数量的下限, 大于次值的数量会显示, 默认值: 1
 */
const RenderItem = async (item, options) => dv.paragraph(_BuildItemHTML(item, options));

/**
 * 渲染物品
 * @params {Array|Object} items 需要渲染的物品
 * @params {Number} width 图标图片尺寸, 默认值: 15
 * @params {Number} display_num 显示数量的下限, 大于次值的数量会显示, 默认值: 1
 * @params {Boolean} inline 多个物品是否输出到一行, 默认值: false
 * @params {String} seperator 多个物品输出到一行时使用的分隔符, 默认值: " , "
 */
const { items, options } = input;
const DefaultOptions = { title: '', width:15, display_num:1, inline:false, separator:' , ', fields: { name:"Name", icon:"Icon", num:"Num" } };
console.log(Object.assign(DefaultOptions, options));
Array.isArray(items)
   ? await Renderitems(items, Object.assign(DefaultOptions, options))
   : await RenderItem(items, Object.assign(DefaultOptions, options));