const DEBUG = false;

const DEFAULT_OPTIONS = { raw: true, inline: false };

const MergeOptions = (options) => {
  return Object.assign(DEFAULT_OPTIONS, options);
};

const RenderDropItemTable = async (items, options) => {
  DEBUG && console.log("RenderDropItemTable, args: ", { items, options });
  const renderItems = await dv.view("Item", {
    items: items,
    options: options,
  });
  DEBUG && console.log("RenderDropItemTable, renderItems: ", renderItems);
  dv.table(
    [],
    Array.isArray(renderItems) ? renderItems.map((i) => [i]) : [["无"]]
  );
};

const { items, options } = input;
return RenderDropItemTable(items, MergeOptions(options));
