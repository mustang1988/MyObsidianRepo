const DEBUG = false;
const DEFAULT_OPTIONS = {
  size: 20,
  max: 5,
};
const MergeOptions = (options) => {
  return Object.assign(DEFAULT_OPTIONS, options);
};
const GetUnbalanceRate = async (rate, options) => {
  const star = await dv.view("Icons/Icon", {
    name: "星",
    category: "other",
    options: { raw: true },
  });
  const emptyStar = await dv.view("Icons/Icon", {
    name: "空星",
    category: "other",
    options: { raw: true },
  });
  const starHTML = dv.view("Icons/GetIconHTML", { icon: star, options });
  const emptyStarHTML = dv.view("Icons/GetIconHTML", {
    icon: emptyStar,
    options,
  });
  if (starHTML && emptyStarHTML) {
    const { max } = options;
    rate = rate > max ? max : rate;
    rate = rate < 0 ? 0 : rate;
    let html = "";
    for (let i = 1; i <= max; i++) {
      html += i <= rate ? starHTML : emptyStarHTML;
    }
    DEBUG && console.log("UnbalanceRate.js, BuildHTML(), Return: ", html);
    return html;
  }
  DEBUG && console.error("UnbalanceRate.js, BuildHTML(), 为获取到需要的图标");
  return "";
};
const { rate, options } = input;
DEBUG && console.info("UnbalanceRate.js, Input: ", { rate, options });
const unbalanceRate = await GetUnbalanceRate(rate, MergeOptions(options));
DEBUG && console.info("UnbalanceRate.js, Return: ", unbalanceRate);
return unbalanceRate;
