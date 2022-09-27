const DEFAULT_OPTIONS = {};
const CHUNK_SIZE = 3;
const ToChunk = (effects) => {
  const result = [];
  let index = 0;
  for (let i = 0; i < effects.length / CHUNK_SIZE / 2; i++) {
    const chunk = [];
    for (let j = 0; j < CHUNK_SIZE * 2; j++) {
      chunk.push(effects[index++]);
    }
    result.push(chunk);
  }
  return result;
};
const RenderStatusEffectTable = async (status, options) => {
  const effectsIcons = await Promise.all(
    Object.entries(status).map((entry) => {
      const [k, v] = entry;
      const s = {};
      s[k] = v;
      return dv.view("DebuffRate", { status: s, options: options });
    })
  );
  const results = [];
  for (let i = 0; i < effectsIcons.length; i++) {
    results.push(effectsIcons[i]);
    results.push(Object.entries(status)[i][1]);
  }
  dv.table([], ToChunk(results));
};
const { status, options = { raw: true, image_only: true } } = input;
return RenderStatusEffectTable(status, options);
