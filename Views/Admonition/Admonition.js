const DEBUG = false;

const GetBookObj = (bookLink) => {
  if (
    typeof bookLink === "string" &&
    bookLink.startsWith("[[") &&
    bookLink.endsWith("]]")
  ) {
    bookLink = dv.parse(bookLink);
  }
  if (typeof bookLink !== "object") {
    console.error(
      "[Admonition/Admonition.js][GetBookObj()][无效的连接]: ",
      bookLink
    );
    return null;
  }
  const [book = null] = dv
    .page(bookLink.path)
    .Books.filter((b) => b.Anchor === bookLink.subpath);
  return book;
};

const GetQuartzObj = (quartzLink) => {
  if (
    typeof quartzLink === "string" &&
    quartzLink.startsWith("[[") &&
    quartzLink.endsWith("]]")
  ) {
    quartzLink = dv.parse(quartzLink);
  }
  if (typeof quartzLink !== "object") {
    console.error(
      "[Admonition/Admonition.js][GetQuartzObj()][无效的连接]: ",
      quartzLink
    );
    return null;
  }
  const [quartz = null] = dv
    .page(quartzLink.path)
    .Quartzs.filter((b) => b.Anchor === quartzLink.subpath);
  return quartz;
};

const GetArt = (artLink) => {
  if (
    typeof artLink === "string" &&
    artLink.startsWith("[[") &&
    artLink.endsWith("]]")
  ) {
    artLink = dv.parse(artLink);
  }
  if (typeof artLink !== "object") {
    console.error(
      "[Admonition/Admonition.js][GetArt()][无效的连接]: ",
      artLink
    );
    return null;
  }

  const [art = null] = dv
    .page(artLink.path)
    .Arts.filter((b) => b.Anchor === artLink.subpath);
  return art;
};

const { params, type, options } = input;
DEBUG &&
  console.log("[Admonition/Admonition.js][Input]: ", { params, type, options });
switch (type.toLowerCase()) {
  case "art":
    const artObj = GetArt(params);
    return dv.view("Admonition/ArtAdmonition", { art: artObj, options });
  case "book":
    const bookObj = GetBookObj(params);
    return dv.view("Admonition/BookAdmonition", { book: bookObj, options });
  case "quartz":
    const quartzObj = GetQuartzObj(params);
    return dv.view("Admonition/QuartzAdmonition", {
      quartz: quartzObj,
      options,
    });
  default:
    console.error("[Admonition/Admonition.js][无效的Admonition类型]: ", {
      params,
      type,
      options,
    });
}
