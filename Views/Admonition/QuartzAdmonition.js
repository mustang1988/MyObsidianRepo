const DEBUG = false;
const GetQuartz = (quartz) => {
  if (
    typeof quartz === "object" &&
    quartz["Name"] &&
    quartz["Rank"] &&
    quartz["Arts"] !== undefined &&
    quartz["Effects"] !== undefined &&
    quartz["Element"]
  ) {
    return quartz;
  }
  const anchor = quartz.subpath;
  if (!anchor) {
    return null;
  }
  const quartzs = dv.page(quartz.path).Quartzs;
  for (const q of quartzs) {
    if (q.Anchor === anchor) {
      return q;
    }
  }
  return null;
};
let { quartz, options } = input;
const { collapse } = options;
const collapseStr =
  collapse == true || collapse === null || collapse === undefined
    ? "open"
    : "close";
quartz = GetQuartz(quartz);
const { Element, Rank, Name, Arts, Effects } = quartz;
const adType = `Quartz-${Element}-${Rank}`;
if (Arts != null) {
  DEBUG && console.log("[Admonition/QuartzAdmonition.js][Arts]: ", Arts);
  return Promise.all(
    Arts.map((art) =>
      dv.view("Admonition/ArtAdmonition", {
        art,
        options: { raw: true },
      })
    )
  ).then((arts) => {
    DEBUG &&
      console.log(
        "[Admonition/QuartzAdmonition.js][After Admonition/ArtAdmonition][Arts]: ",
        Arts
      );
    return `\`\`\`\`ad-${adType}
title: ${Name}
collapse: ${collapseStr}
装备效果: 
${Effects ? dv.markdownList(Effects) : "无"}

魔法:
${arts.join("\n")}
\`\`\`\``;
  });
} else {
  return `\`\`\`\`ad-${adType}
title: ${Name} 
collapse: ${collapseStr}
装备效果: 
${Effects ? dv.markdownList(Effects) : "无"}

魔法: 无
\`\`\`\``;
}
