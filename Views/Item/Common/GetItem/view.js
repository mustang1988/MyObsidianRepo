/**
 *
 */
// ===== Constrains =====
const DEBUG = true;
const DEFAULT_OPTIONS = {
  display_name: true,
  raw: true,
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetItem = (link, type, display_name) => {
  const { path = null, subpath = null } = link;
  console.debug(
    "[获取任意物品数据][Views/Common/GetItem/view.js][GetItem()][无效的Link]:\n",
    {
      link,
      type,
    }
  );
  if (path === null || subpath === null) {
    return {
      item: null,
      link: null,
    };
  }
  const itemList = dv.page(path)[type];
  if (itemList === undefined) {
    console.debug(
      "[获取任意物品数据][Views/Common/GetItem/view.js][GetItem()][无效的Type]:\n",
      {
        link,
        type,
      }
    );
    return {
      item: null,
      link: null,
    };
  }
  const [item] = itemList.filter((i) => i.ID === subpath);
  if (item) {
    console.debug(
      "[获取任意物品数据][Views/Common/GetItem/view.js][GetItem()][未找到指定物品]:\n",
      {
        link,
        type,
      }
    );
    return {
      item: null,
      link: null,
    };
  }
  return {
    item,
    link: dv.blockLink(path, subpath, false, display_name ? item.Name : ""),
  };
};
// ===== Begin =====
let { link, type, options } = input;
options = MergeOptons(options);
DEBUG &&
  console.debug("[获取任意物品数据][Views/Common/GetItem/view.js][Input]:\n", {
    link,
    type,
    options,
  });
const { display_name } = options;
const item = GetItem(link, type, display_name);
DEBUG &&
  console.debug(
    "[获取任意物品数据][Views/Common/GetItem/view.js][Return]:\n",
    item
  );
return item;
