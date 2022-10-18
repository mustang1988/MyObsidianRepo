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
const QueryByLink = (link, options) => {
  const { path, subpath } = link;
  const [item = null] = dv.page(path).List.filter((i) => i.ID === subpath);
  if (item === null) {
    DEBUG &&
      console.error(
        "[][Views/Common/Query/Link/view.js][QueryByLink()][数据库中未找到指定连接的数据]:\n",
        {
          link,
          options,
        }
      );
    return { item: null, link: null };
  }
  const { prefix, suffix, display_name } = options;
  const name = `${prefix ? prefix : ""}${display_name ? item.Name : ""}${
    suffix ? suffix : ""
  }`;
  return {
    item,
    link: dv.blockLink(path, subpath, false, name),
  };
};
// ===== Begin =====
let { link, options } = input;
options = MergeOptons(options);
DEBUG &&
  console.debug("[][Views/Common/Query/Link/view.js][Input]:\n", {
    link,
    options,
  });
const result = QueryByLink(link, options);
DEBUG &&
  console.debug("[][Views/Common/Query/Link/view.js][Return]:\n", result);
return result;
