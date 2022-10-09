const DEBUG = false;
const { item, options } = input;
const { Name, Effects, Range, Cook = null } = item;
const { collapse = true } = options;
DEBUG && console.log("[Admonition/Food/Superb.js][Input]: ", { item, options });
const cook =
  Cook !== null
    ? `料理人:
${dv.markdownList(Cook)}`
    : null;
return `\`\`\`ad-Food-Superb
title: ${dv.blockLink(item.path, item.ID, false, item.Name)}
collapse: ${collapse === false ? "close" : "open"}
范围:
${Range}

效果: 
${dv.markdownList(Effects)}

${cook}
\`\`\``;
