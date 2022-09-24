const MAGIC_RATE_CHUNK_SIZE = 2;

const ChunkMagicRate = (data) => {
  const result = [];
  let index = 0;
  for (let i = 0; i < data.length / MAGIC_RATE_CHUNK_SIZE / 2; i++) {
    const line = [];
    for (let j = 0; j < MAGIC_RATE_CHUNK_SIZE * 2; j++) {
      line.push(data[index++]);
    }
    result.push(line);
  }
  return result;
};

const FixOrder = (data) => {
  const [e, wa, f, wi, t, s, m] = data;
  const result = [e, t, wa, s, f, m, wi];
  return result;
};

const RenderMagicRateTable = async (rate, options = {}) => {
  options.raw = true;
  options.fix_order = true;
  options.image_only = true;
  const rateIcons = await dv.view("MagicRate", {
    rate: rate,
    options: options,
  });
  const orderFixedRate = FixOrder(rate);
  const results = [];
  for (let i = 0; i < rateIcons.length; i++) {
    results.push(rateIcons[i]);
    results.push(orderFixedRate[i]);
  }
  //
  dv.table([], ChunkMagicRate(results));
};

const { rate, options } = input;
return RenderMagicRateTable(rate, options);
