const RenderDropItemTable = async (items) => {
  const renderItems = await dv.view("Item", { items: items, options: { raw: true, inline: false } });
  dv.table(
    [],
    renderItems.map((i) => [i])
  );
};

const { items } = input;
return RenderDropItemTable(items);
