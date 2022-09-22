const RATE_TABLE_HEADER = ["斩", "突", "射", "钢"];

const RenderRateTable = async (rate, options) => {
  options = options || {};
  options.raw = true;
  const results = await Promise.all(
    rate.map((r) => dv.view("BLNRate", { rate: r, options: options }))
  );
  dv.table(RATE_TABLE_HEADER, [results]);
};

const { rate = [0, 0, 0, 0], options } = input;
return RenderRateTable(rate, options);
