const DEFAULT_OPTIONS = { raw: true, inline: false };

const MergeOptions = (options) => {
  return Object.assign(DEFAULT_OPTIONS, options);
};

const RenderDropItemTable = async (items, options) => {
  const renderItems = await dv.view("Item", {
    items: items,
    options: options,
  });
  dv.table(
    [],
    renderItems.map((i) => [i])
  );
};

const { items, options } = input;
return RenderDropItemTable(items, MergeOptions(options));
