const DEFAULT_MONSTER_PROPERTY_ORDER = [
  "LV",
  "HP",
  "EXP",
  "STR",
  "DEF",
  "ATS",
  "ADF",
  "SPD",
];

const FIXED_MONSTER_PROPERTY_ORDER = [
  "LV",
  "STR",
  "HP",
  "DEF",
  "EXP",
  "ATS",
  "",
  "ADF",
  "",
  "SPD",
];

const MONSTER_PROPERTY_CHUNK_SIZE = 2;

const ChunkMonsterProperty = (data) => {
  const result = [];
  let index = 0;
  for (let i = 0; i < data.length / MONSTER_PROPERTY_CHUNK_SIZE / 2; i++) {
    const line = [];
    for (let j = 0; j < MONSTER_PROPERTY_CHUNK_SIZE * 2; j++) {
      line.push(data[index++]);
    }
    result.push(line);
  }
  return result;
};

const RenderMonsterPropertyTable = (props) => {
  console.log("props => ", props);
  const data = [];
  for (const k of FIXED_MONSTER_PROPERTY_ORDER) {
    data.push(k);
    data.push(props[k] !== undefined ? props[k] : "");
  }
  dv.table([], ChunkMonsterProperty(data));
};

const { props } = input;
return RenderMonsterPropertyTable(props);
