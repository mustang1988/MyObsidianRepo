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
const GetItem = (id, db, options) => {
  const [item = null] = dv.page(db).List.filter((i) => i.ID === id);
  if (item === null) {
    return { item: null, link: null };
  }
  const { display_name } = options;
  return {
    item,
    link: dv.blockLink(db, id, false, display_name ? item.Name : " "),
  };
};
// ===== Begin =====
let { item, db, options } = input;
options = MergeOptons(options);
DEBUG &&
  console.debug(
    "[从数据库中获取任意物品信息][Views/Common/Data/view.js][Input]:\n",
    {
      item,
      db,
      options,
    }
  );
const { ID: id } = item;
const data = GetItem(id, db, options);
DEBUG &&
  console.debug(
    "[从数据库中获取任意物品信息][Views/Common/Data/view.js][Return]:\n",
    data
  );
return data;
