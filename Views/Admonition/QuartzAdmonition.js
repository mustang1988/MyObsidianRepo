const GetQuartz = (quartz) => {
  if (
    typeof quartz === "object" &&
    quartz["Name"] &&
    quartz["Rank"] &&
    quartz["Arts"] &&
    quartz["Effects"] !== undefined &&
    quartz["Element"]
  ) {
    return quartz;
  }
  const anchor = quartz.subpath;
  if (!anchor) {
    return null;
  }
  const arts = dv.page(quartz.path).Quartzs;
  for (const a of arts) {
    if (a.Anchor === anchor) {
      return a;
    }
  }
  return null;
};
let { quartz } = input;
quartz = GetQuartz(quartz);
console.log(quartz);
const { Element, Rank, Name, Arts, Effects } = quartz;
return Promise.all(
  quartz.Arts.map((art) =>
    dv.view("Admonition/ArtAdmonition", { art, options: { raw: true, collapse: false } })
  )
).then((arts) => {
  console.log("arts: ", arts);
  return `\`\`\`\`ad-Quartz-${Element}-${Rank}
title: ${Name}
collapse: open
装备效果: ${Effects ? Effects : "无"}

魔法:
${arts}
\`\`\`\``;
});
