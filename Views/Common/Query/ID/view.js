/**
 *
 */
// ===== Constrains =====
const DEBUG = true;
const DEFAULT_OPTIONS = {
  prefix: null,
  suffix: null,
  raw: true,
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);
const QueryByID = (id, db, options) => {
  const [item = null] = dv.page(db).List.filter((i) => i.ID === id);
  if (item === null) {
    DEBUG &&
      console.debug(
        "[根据ID查询数据库][Views/Common/Query/ID/view.js][QueryByID][数据库中未找到指定ID的数据]:\n",
        {
          id,
          db,
          options,
        }
      );
    return { item: null, link: null };
  }
  const { prefix, suffix } = options;
  const name = `${prefix ? prefix : ""}${item.Name}${suffix ? suffix : ""}`;
  return {
    item,
    link: dv.blockLink(db, id, false, name),
  };
};
// ===== Begin =====
let { id, db, options } = input;
options = MergeOptons(options);
DEBUG &&
  console.debug("[根据ID查询数据库][Views/Common/Query/ID/view.js][Input]:\n", {
    id,
    db,
    options,
  });
const result = QueryByID(id, db, options);
DEBUG &&
  console.debug(
    "[根据ID查询数据库][Views/Common/Query/ID/view.js][Return]:\n",
    result
  );
return result;
