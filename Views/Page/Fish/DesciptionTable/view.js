// ===== Constrains =====
const DEBUG = false;
const DEFAULT_OPTIONS = {
  raw: true,
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetSize = (width, height, targetSize) => {
  return Math.round((width * targetSize) / height);
};
const GetSource = (file) => {
  return `app://local/${this.app.vault.adapter.basePath}/${file.path}`;
};
const GetFishIcon = (fish) => {
  const { Icon = null } = fish;
  if (Icon === null) {
    return "";
  }
  const { File: file, Width: width, Height: height } = Icon;
  return `<img src="${GetSource(file)}" width="${GetSize(
    width,
    height,
    100
  )}"/>`;
};
// ===== Begin =====
let { fish, options } = input;
options = MergeOptons(options);
DEBUG &&
  console.debug(
    "[钓鱼笔记-描述信息表格渲染][Views/Page/Fish/DescriptionTable/view.js][Input]:\n",
    { fish, options }
  );
const { Icon, Description, Bonus } = fish;
const {
  Small: { Point: SPoint=0 } = {},
  Large: { Point: LPoint=0 } = {},
} = Bonus;
const pointDisplay = SPoint === 0 ? LPoint : `${SPoint}~${LPoint}`;
const table = `<table style="width: 100%;">
<tbody>
<tr>
<td style="border: none; width: 20%;">${GetFishIcon(fish)}</td>
<td style="border: none; width: 60%;">${fish.Description}</td>
<td style="border: none; width: 20%;">稀有度:</br><span style="font-size: 40;">${
  fish.Rank
}</span></br>钓果点数: ${pointDisplay}</td>
</tr>
</tbody>
</table>`;
const { raw } = options;
return raw ? table : dv.span(table);
