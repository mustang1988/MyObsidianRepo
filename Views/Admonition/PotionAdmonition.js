const { item, options } = input;
const { Name, Effects, Range } = item;
const { collapse = true } = options;
return `\`\`\`ad-Potion
title: ${Name}
collapse: ${collapse ? "open" : "close"}
范围:
${Range}

效果: 
${dv.markdownList(Effects)}
\`\`\``;
