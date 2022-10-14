const DEBUG = false;
const RATE_TABLE_HEADER = ["斩", "突", "射", "钢"];
const RenderRateTable = async (rate, options) => {
  const { Slash = 0, Thrust = 0, Pierce = 0, Strike = 0 } = rate;
  const results = await Promise.all(
    [Slash, Thrust, Pierce, Strike].map((r) =>
      dv.view("BLNRate", { rate: r, options: options })
    )
  );
  dv.table(RATE_TABLE_HEADER, [results]);
};
const {
  rate = { Slash: 0, Thrust: 0, Pierce: 0, Strike: 0 },
  options = { raw: true },
} = input;
DEBUG && console.log("渲染失衡引发率表格, 参数: ", { rate, options });
return RenderRateTable(rate, options);
