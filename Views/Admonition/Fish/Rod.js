const DEBUG = true;
const DEFAULT_OPTIONS = {
  raw: true,
};
let { rod, options } = input;
options = Object.assign(DEFAULT_OPTIONS, options);
DEBUG && console.log("[Admonition/Fish/Rod.js][Input]: ", { rod, options });

const { Name, ID } = rod;
return `\`\`\`ad-Fish-Rod
title: ${Name}
\`\`\``;
