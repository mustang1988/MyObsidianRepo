const { book, options } = input;
const { Content, Name } = book;
const { collapse = true } = options;
return `\`\`\`ad-Book
title: 《${Name}》
collapse: ${collapse ? "open" : "close"}
${Content}
\`\`\``;
