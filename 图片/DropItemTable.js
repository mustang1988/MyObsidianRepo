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

const { items, options = { raw: true, inline: false } } = input;
return RenderDropItemTable(items, options);
