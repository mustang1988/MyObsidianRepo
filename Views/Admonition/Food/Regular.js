const { item, options } = input;
const { Name, Effects, Range, Cook = null } = item;
const { collapse = true } = options;
const cook =
  Cook !== null
    ? `料理人:
${dv.markdownList(Cook)}`
    : null;
return `\`\`\`ad-Food-Regular
title: ${Name}
collapse: ${collapse === false ? "close" : "open"}
范围:
${Range}

效果: 
${dv.markdownList(Effects)}

${cook}
\`\`\``;
