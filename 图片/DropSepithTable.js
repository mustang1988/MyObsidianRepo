const SEPITHS_TYPES = [
  "Earth",
  "Water",
  "Fire",
  "Wind",
  "Time",
  "Space",
  "Mirage",
  "Mass",
];

const SEPITH_CHUNK_SIZE = 4;

const ChunkSepiths = (sepiths) => {
  const result = [];
  let index = 0;
  for (let i = 0; i < sepiths.length / SEPITH_CHUNK_SIZE; i++) {
    const line = [];
    for (let j = 0; j < SEPITH_CHUNK_SIZE; j++) {
      line.push(sepiths[index++]);
    }
    result.push(line);
  }
  return result;
};

const RenderDropSepiths = async (sepiths, options) => {
  sepiths = sepiths.map((s, index) => {
    return {
      Name: "",
      Type: `${SEPITHS_TYPES[index]}Sepith`,
      Num: s,
    };
  });
  const results = await dv.view("Item", {
    items: sepiths,
    options: options,
  });
  dv.table([], ChunkSepiths(results));
};

const {
  sepiths = [0, 0, 0, 0, 0, 0, 0],
  options = { raw: true, inline: false, limit: -1 },
} = input;
return RenderDropSepiths(sepiths, options);
