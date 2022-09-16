
// 获取图标图片的完整路径
const _GetImagePath = (item) => `${this.app.vault.adapter.basePath}/${item.Icon.path}`;
// 获取显示在名称后的数量
const _GetNum = (item, display_single) => display_single 
                                          ? ' x '+ item.Num 
                                          : item.Num > 1 
                                             ? ' x ' + item.Num 
                                             : '';
// 根据参数构造需要渲染的HTML元素
const _BuildItemHTML = (item, width, display_single) => `<img width="${width}" src="${_GetImagePath(item)}"/>${item.Name}${_GetNum(item, display_single)}`;

/**
 * 渲染多个物品
 * @params {Array} items 需要渲染的物品
 * @params {Number} width 图标图片尺寸, 默认值: 15
 * @params {Boolean} display_single 是否显示数量1的数量值, 默认值: true
 * @params {Boolean} inline 多个物品是否输出到一行, 默认值: false
 * @params {String} seperator 多个物品输出到一行时使用的分隔符, 默认值: " , "
 */
const Renderitems = async (items, width, display_single, inline, separator) => inline
   ? dv.paragraph(items.map(item => _BuildItemHTML(item, width, display_single)).join(separator))
   : items.forEach(item => dv.paragraph(_BuildItemHTML(item, width, display_single)));

/**
 * 渲染单个物品
 * @params {Object} item 需要渲染的物品
 * @params {Number} width 图标图片尺寸, 默认值: 15
 */
const RenderItem = async (item, width, display_single) => dv.paragraph(_BuildItemHTML(item, width, display_single));

/**
 * 渲染物品
 * @params {Array|Object} items 需要渲染的物品
 * @params {Number} width 图标图片尺寸, 默认值: 15
 * @params {Boolean} display_single 是否显示数量1的数量值, 默认值: false
 * @params {Boolean} inline 多个物品是否输出到一行, 默认值: false
 * @params {String} seperator 多个物品输出到一行时使用的分隔符, 默认值: " , "
 */
const { items, width=15, display_single=false, inline=false, separator=' , ' } = input;
Array.isArray(items)
   ? await Renderitems(items, width, display_single, inline, separator)
   : await RenderItem(items, width, display_single);