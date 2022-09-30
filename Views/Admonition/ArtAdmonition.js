const DEBUG = true;
const GetArt = (art) => {
  if (
    typeof art === "object" &&
    art["Name"] &&
    art["Element"] &&
    art["Type"] &&
    art["Range"] &&
    art["Effacts"] &&
    art["Comment"]
  ) {
    return art;
  }
  const anchor = art.subpath;
  if (!anchor) {
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
let { art } = input;
console.log("eee => ", art);
art = GetArt(art);
console.log("ddd => ", art);
if (art) {
  const { Name, Element, Type, Range, Effacts, Comment } = art;
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
collapse: open
${iconHTML} ${Type} : ${Range} ${Effacts.join("/")}

${Comment}
\`\`\``;
        });
    });
}
return "";
