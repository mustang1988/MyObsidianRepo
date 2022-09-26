const DEBUG = false;

const ITEM_ICONS = {
  UMaterial: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_U物质.png"),
    width: 46,
    height: 54,
  },
  KeyItem: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_道具.webp"),
    width: 28,
    height: 30,
  },
  EarthSepith: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_耀晶片_地.webp"),
    width: 18,
    height: 34,
  },
  WaterSepith: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_耀晶片_水.webp"),
    width: 18,
    height: 34,
  },
  FireSepith: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_耀晶片_火.webp"),
    width: 18,
    height: 34,
  },
  WindSepith: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_耀晶片_风.webp"),
    width: 18,
    height: 34,
  },
  TimeSepith: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_耀晶片_时.webp"),
    width: 18,
    height: 34,
  },
  SpaceSepith: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_耀晶片_空.webp"),
    width: 18,
    height: 34,
  },
  MirageSepith: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_耀晶片_幻.webp"),
    width: 18,
    height: 34,
  },
  MassSepith: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_耀晶片_块.webp"),
    width: 16,
    height: 26,
  },
  AllSepiths: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_耀晶片_全.webp"),
    width: 126,
    height: 34,
  },
  FoodRegular: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_料理_普通.webp"),
    width: 48,
    height: 48,
  },
  FoodSuperb: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_料理_极品.webp"),
    width: 48,
    height: 48,
  },
  FoodPeculiar: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_料理_古怪.webp"),
    width: 48,
    height: 48,
  },
  FoodAttack: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_料理_攻击.webp"),
    width: 48,
    height: 48,
  },
  FoodUnique: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_料理_独门.webp"),
    width: 48,
    height: 48,
  },
  FoodIngredient: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_料理_食材.webp"),
    width: 48,
    height: 48,
  },
  Potion: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_消耗品.webp"),
    width: 36,
    height: 36,
  },
  Gift: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_礼物.webp"),
    width: 36,
    height: 40,
  },
  Armour: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_装备_护甲.webp"),
    width: 48,
    height: 48,
  },
  Boots: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_装备_护腿.webp"),
    width: 48,
    height: 48,
  },
  Accessory: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_装备_饰品.webp"),
    width: 48,
    height: 48,
  },
  CosmeticArmour: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_装饰_服装.webp"),
    width: 48,
    height: 48,
  },
  CosmeticAccessory: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_装饰_配饰.webp"),
    width: 48,
    height: 48,
  },
  CosmeticHair: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_装饰_假发.webp"),
    width: 44,
    height: 44,
  },
  FishingRod: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_钓鱼_鱼竿.webp"),
    width: 32,
    height: 32,
  },
  SmallFish: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_钓鱼_小.webp"),
    width: 32,
    height: 32,
  },
  MediumFish: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_钓鱼_中.webp"),
    width: 32,
    height: 32,
  },
  BigFish: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_钓鱼_大.webp"),
    width: 32,
    height: 32,
  },
  EarthQuartz: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_地.webp"),
    width: 24,
    height: 24,
  },
  EarthQuartzR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_地R.webp"),
    width: 24,
    height: 24,
  },
  EarthQuartzSR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_地SR.webp"),
    width: 24,
    height: 24,
  },
  EarthQuartzMaster: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_地_核心.webp"),
    width: 32,
    height: 32,
  },
  WaterQuartz: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_水.webp"),
    width: 32,
    height: 32,
  },
  WaterQuartzR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_水R.webp"),
    width: 32,
    height: 32,
  },
  WaterQuartzSR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_水SR.webp"),
    width: 32,
    height: 32,
  },
  WaterQuartzMaster: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_水_核心.webp"),
    width: 32,
    height: 32,
  },
  FireQuartz: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_火.webp"),
    width: 32,
    height: 32,
  },
  FireQuartzR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_火R.webp"),
    width: 32,
    height: 32,
  },
  FireQuartzSR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_火SR.webp"),
    width: 32,
    height: 32,
  },
  FireQuartzMaster: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_火_核心.webp"),
    width: 32,
    height: 32,
  },
  WindQuartz: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_风.webp"),
    width: 32,
    height: 32,
  },
  WindQuartzR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_风R.webp"),
    width: 32,
    height: 32,
  },
  WindQuartzSR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_风SR.webp"),
    width: 32,
    height: 32,
  },
  WindQuartzMaster: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_风_核心.webp"),
    width: 32,
    height: 32,
  },
  TimeQuartz: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_时.webp"),
    width: 32,
    height: 32,
  },
  TimeQuartzR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_时R.webp"),
    width: 32,
    height: 32,
  },
  TimeQuartzSR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_时SR.webp"),
    width: 32,
    height: 32,
  },
  TimeQuartzMaster: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_时_核心.webp"),
    width: 32,
    height: 32,
  },
  SpaceQuartz: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_空.webp"),
    width: 32,
    height: 32,
  },
  SpaceQuartzR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_空R.webp"),
    width: 32,
    height: 32,
  },
  SpaceQuartzSR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_空SR.webp"),
    width: 32,
    height: 32,
  },
  SpaceQuartzMaster: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_空_核心.webp"),
    width: 32,
    height: 32,
  },
  MirageQuartz: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_幻.webp"),
    width: 32,
    height: 32,
  },
  MirageQuartzR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_幻R.webp"),
    width: 32,
    height: 32,
  },
  MirageQuartzSR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_幻SR.webp"),
    width: 32,
    height: 32,
  },
  MirageQuartzMaster: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_幻_核心.webp"),
    width: 32,
    height: 32,
  },
  LostQuartz: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_失落.webp"),
    width: 32,
    height: 32,
  },
};

const DEFAULT_OPTIONS = {
  size: 20,
  limit: 1,
  inline: true,
  seperator: " , ",
  raw: false,
  image_only: false,
};

const GetIconByType = (type) => {
  return Object.keys(ITEM_ICONS).includes(type) ? ITEM_ICONS[type] : null;
};

const MergeOptions = (options) => {
  return Object.assign(DEFAULT_OPTIONS, options);
};

const GetDisplaySize = (icon, size) => {
  const { width, height } = icon;
  return Math.round((width * size) / height);
};

const GetNum = (item, options) => {
  const { Num = 0 } = item;
  const { limit } = options;
  return Num > limit ? `x ${Num}` : "";
};

const ToHTML = (item, options) => {
  DEBUG && console.debug("ToHTML, args: ", { item, options });
  const { Type, Name: ItemName } = item;
  const { size, image_only } = options;
  const icon = GetIconByType(Type);
  let result = '';
  if(icon){
    if(image_only){
      result = `<img src="${this.app.vault.adapter.basePath}/${icon.file.path}" width="${GetDisplaySize(icon, size)}"/>`
    } else {
      result = `<img src="${this.app.vault.adapter.basePath}/${
        icon.file.path
      }" width="${GetDisplaySize(icon, size)}"/> ${ItemName} ${GetNum(
        item,
        options
      )}`
    }
  }
  DEBUG && console.debug("ToHTML, return: ", result);
  return result;
};

const RenderItem = (item, options) => {
  DEBUG && console.debug("\tRenderItem, args: ", { item, options });
  const { raw } = options;
  // 提交的item是核心回路连接
  if (item.constructor.name == "Link" && item.path.includes("核心回路")) {
    const result = dv.view("MasterQuartz", {
      quartz: dv.page(item.path),
      options,
    });
    DEBUG && console.debug("\tRenderItem, return: ", result);
    return result;
  }
  const result = raw ? ToHTML(item, options) : dv.span(ToHTML(item, options));
  DEBUG && console.debug("\tRenderItem, return: ", result);
  return result;
};

const RenderItems = (items, options) => {
  DEBUG && console.debug("\tRenderItems, args: ", { items, options });
  const { inline, seperator, raw } = options;
  const HTML = inline
    ? items.map((i) => RenderItem(i, options)).join(seperator)
    : items.map((i) => RenderItem(i, options));
  const result = raw ? HTML : inline ? dv.span(HTML) : dv.list(HTML);
  DEBUG && console.debug("\tRenderItems, return: ", result);
  return result;
};

const { items, options } = input;
DEBUG && console.log("Item, input => ", { items, options });
const result = Array.isArray(items)
  ? RenderItems(items, MergeOptions(options))
  : items
  ? RenderItem(items, MergeOptions(options))
  : dv.span("无");
DEBUG && console.log("Item, return => ", result);
return result;
