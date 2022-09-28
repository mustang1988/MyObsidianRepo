const DEBUG = true;
const SEPITH_CHUNK_SIZE = 4;
const ChunkSepiths = (sepiths) => {
  const result = [];
  let index = 0;
  for (let i = 0; i < sepiths.length / SEPITH_CHUNK_SIZE / 2; i++) {
    const line = [];
    for (let j = 0; j < SEPITH_CHUNK_SIZE * 2; j++) {
      line.push(sepiths[index++]);
    }
    result.push(line);
  }
  return result;
};
const RenderDropSepiths = async (sepiths, options) => {
  DEBUG && console.log(sepiths);
  const args = [];
  for (const key of Object.keys(sepiths)) {
    args.push({
      Name: "",
      Type: `${key}Sepith`,
      Num: sepiths[key],
    });
  }
  const results = await dv.view("Item", {
    items: args,
    options: options,
  });
  const data = [];
  for (let i = 0; i < results.length; i++) {
    data.push(results[i]);
    data.push(args[i].Num);
  }
  dv.table([], ChunkSepiths(data));
};
const {
  sepiths = [0, 0, 0, 0, 0, 0, 0],
  options = { raw: true, inline: false, limit: -1, image_only: true },
} = input;
return RenderDropSepiths(sepiths, options);
