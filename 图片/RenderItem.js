
// 获取图标图片的完整路径
const _GetImagePath = (item, fields) => item[fields['icon']] 
                                          ? `${this.app.vault.adapter.basePath}/${item[fields['icon']].path}`
                                          : '';

// 获取显示在名称后的数量
const _GetNum = (item, display_num, fields) => item[fields['num']] && parseInt(item[fields['num']]) > display_num
                                                ? ' x ' + parseInt(item[fields['num']])
                                                : '';

// 根据参数构造需要渲染的HTML元素
const _BuildItemHTML = (item, { width, display_num, fields} ) => {
   // 图标, 名称, 数量均有效
   if(_GetImagePath(item, fields) && item[fields['name']] && _GetNum(item, display_num, fields)) {
      return `<img width="${width}" src="${_GetImagePath(item, fields)}"/>${item[fields['name']]||''}${_GetNum(item, display_num, fields)}`;
   } else if(_GetImagePath(item, fields) && item[fields['name']]) {
      // 数量无效, 不显示数量
      return `<img width="${width}" src="${_GetImagePath(item, fields)}"/>${item[fields['name']]}`;
      // 图标无效, 不显示图标
   } else if(item[fields['name']] && _GetNum(item, display_num, fields)) {
      return `${item[fields['name']]}${_GetNum(item, display_num, fields)}`;
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
const Renderitems = async (items, options) => options.inline
   ? dv.paragraph(items.map(item => _BuildItemHTML(item, options))
      .filter(item => item !== '')
      .join(options.separator))
   : items.forEach(item => dv.paragraph(_BuildItemHTML(item, options)));

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
const { 
   items,
   options
} = input;
const DefaultOptions = {
   width: 15,
   display_num: 1,
   inline: false,
   separator: ' , ',
   fields: {
      name: 'Name',
      icon: 'Icon',
      num: 'Num',
   }
};
const MergedOptions = Object.assign(DefaultOptions, options);
console.log(MergedOptions);
Array.isArray(items)
   ? await Renderitems(items, MergedOptions)
   : await RenderItem(items, MergedOptions);