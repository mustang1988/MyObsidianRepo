const DEBUG = true;
const DEFAULT_OPTIONS = {
  raw: true,
};
const { sepith, options } = input;
const { Name, Type } = sepith;
return `\`\`\`ad-Sepith-${Type}
title: ${Name}
\`\`\``;
