const DEBUG = true;
const DEFAULT_OPTIONS = {
  collapse: true,
};
const GetItem = (itemLink) => {
  const {
    Name: { path, subpath },
    Cook,
  } = itemLink;
  const [item = null] = dv.page(path).Items.filter((i) => i.ID === subpath);
  if (item !== null) {
    item.path = path;
    item.Cook = Cook;
  }
  return item;
};
let { recipe, options } = input;
options = Object.assign(DEFAULT_OPTIONS, options);
DEBUG && console.log("[Admonition/Recipe.js][Input]: ", { recipe, options });
const { Name, Superb, Regular, Peculiar, Unique } = recipe;
const { collapse } = options;
const items = [Superb, Regular, Peculiar, Unique].map((link) => GetItem(link));
DEBUG && console.log("[Admonition/Recipe.js][items]: ", items);
return Promise.all([
  dv.view("Admonition/Food/Superb", { item: items[0], options: { raw: true } }),
  dv.view("Admonition/Food/Regular", {
    item: items[1],
    options: { raw: true },
  }),
  dv.view("Admonition/Food/Peculiar", {
    item: items[2],
    options: { raw: true },
  }),
  dv.view("Admonition/Food/Unique", { item: items[3], options: { raw: true } }),
]).then((items) => {
  console.log(items);
  return `\`\`\`\`ad-Food-Regular
title: ${Name}
collapse: ${collapse ? "open" : "close"}
${items[0]}
${items[1]}
${items[2]}
${items[3]}
\`\`\`\``;
});
