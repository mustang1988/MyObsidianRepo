const DEBUG = true;
const GetArt = (art) => {
  if (
    typeof art === "object" &&
    art["Name"] &&
    art["Element"] &&
    art["Type"] &&
    art["Range"] &&
    art["Effects"] !== undefined &&
    art["Comment"]
  ) {
    DEBUG && console.log("[Admonition/ArtAdmonition.js][GetArt()][art]: ", art);
    return art;
  }
  const anchor = art.subpath;
  if (!anchor) {
    DEBUG &&
      console.error(
        "[Admonition/ArtAdmonition.js][GetArt()][anchor]: anchor NOT found: ",
        art
      );
    return null;
  }
  const arts = dv.page(art.path).Arts;
  for (const a of arts) {
    if (a.Anchor === anchor) {
      return a;
    }
  }
  return null;
};
let { art, options = {} } = input;
DEBUG &&
  console.log("[Admonition/ArtAdmonition.js][Inputs]: ", { art, options });
art = GetArt(art);
DEBUG &&
  console.log("[Admonition/ArtAdmonition.js][After GetArt()][art]: ", art);
if (art) {
  const { Name, Element, Type, Range, Effects, Comment } = art;
  const { collapse } = options;
  return dv
    .view("Icons/Icon", {
      key: `Element.${Element}`,
      options: { raw: true },
    })
    .then((icon) => {
      return dv
        .view("Icons/GetIconHTML", { icon, options: { raw: true, size: 15 } })
        .then((iconHTML) => {
          console.log(iconHTML);
          return `\`\`\`ad-art
title: ${Name}
collapse: ${
            collapse == true || collapse === null || collapse === undefined
              ? "open"
              : "close"
          }
${iconHTML} ${Type} : ${Range} ${Effects ? Effects.join(" ") : ""}

${Comment}
\`\`\``;
        });
    });
}
return "";
