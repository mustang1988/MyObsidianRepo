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
const GetItem = (link, options) => {
  const { path = null, subpath = null } = link;
  console.error(
    "[获取任意物品连接的数据][Views/Common/GetItem/view.js][GetItem()][无效的Link]:\n",
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
  const [item] = dv.page(path).List.filter((i) => i.ID === subpath);
  if (item) {
    console.error(
      "[获取任意物品连接的数据][Views/Common/GetItem/view.js][GetItem()][未找到指定物品]:\n",
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
  const { display_name } = options;
  return {
    item,
    link: dv.blockLink(path, subpath, false, display_name ? item.Name : ""),
  };
};
// ===== Begin =====
let { link, options } = input;
options = MergeOptons(options);
DEBUG &&
  console.debug(
    "[获取任意物品连接的数据][Views/Common/GetItem/view.js][Input]:\n",
    {
      link,
      options,
    }
  );
const item = GetItem(link, options);
DEBUG &&
  console.debug(
    "[获取任意物品连接的数据][Views/Common/GetItem/view.js][Return]:\n",
    item
  );
return item;
