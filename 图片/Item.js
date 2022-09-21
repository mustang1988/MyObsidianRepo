const DEBUG = true;

const ITEM_ICONS = {
  UMaterial: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/U物质.png"),
    width: 46,
    height: 54,
  },
  KeyItem: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/道具.webp"),
    width: 28,
    height: 30,
  },
  EarthSepith: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/地晶片.webp"),
    width: 18,
    height: 34,
  },
  WaterSepith: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/水晶片.webp"),
    width: 18,
    height: 34,
  },
  FireSepith: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/火晶片.webp"),
    width: 18,
    height: 34,
  },
  WindSepith: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/风晶片.webp"),
    width: 18,
    height: 34,
  },
  TimeSepith: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/时晶片.webp"),
    width: 18,
    height: 34,
  },
  SpaceSepith: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/空晶片.webp"),
    width: 18,
    height: 34,
  },
  MirageSepith: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/幻晶片.webp"),
    width: 18,
    height: 34,
  },
  MassSepith: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/耀晶块.webp"),
    width: 16,
    height: 26,
  },
  AllSepiths: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/全晶片.webp"),
    width: 126,
    height: 34,
  },
  FoodRegular: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/普通料理.webp"),
    width: 48,
    height: 48,
  },
  FoodSuperb: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/极品料理.webp"),
    width: 48,
    height: 48,
  },
  FoodPeculiar: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/古怪料理.webp"),
    width: 48,
    height: 48,
  },
  FoodAttack: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/攻击料理.webp"),
    width: 48,
    height: 48,
  },
  FoodUnique: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/独门料理.webp"),
    width: 48,
    height: 48,
  },
  FoodIngredient: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/食材.webp"),
    width: 48,
    height: 48,
  },
  Potion: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/消耗品.webp"),
    width: 36,
    height: 36,
  },
  Gift: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/礼物.webp"),
    width: 36,
    height: 40,
  },
  Armour: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/护甲.webp"),
    width: 48,
    height: 48,
  },
  Boots: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/护腿.webp"),
    width: 48,
    height: 48,
  },
  Accessory: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/饰品.webp"),
    width: 48,
    height: 48,
  },
  CosmeticArmour: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/服装.webp"),
    width: 48,
    height: 48,
  },
  CosmeticAccessory: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/配饰.webp"),
    width: 48,
    height: 48,
  },
  CosmeticHair: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/假发.webp"),
    width: 44,
    height: 44,
  },
  FishingRod: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/鱼竿.webp"),
    width: 32,
    height: 32,
  },
  SmallFish: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/小鱼.webp"),
    width: 32,
    height: 32,
  },
  MediumFish: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/中鱼.webp"),
    width: 32,
    height: 32,
  },
  BigFish: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品/大鱼.webp"),
    width: 32,
    height: 32,
  },
  EarthQuartz: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路/地.webp"),
    width: 24,
    height: 24,
  },
  EarthQuartzR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路/地R.webp"),
    width: 24,
    height: 24,
  },
  EarthQuartzSR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路/地SR.webp"),
    width: 24,
    height: 24,
  },
  WaterQuartz: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路/水.webp"),
    width: 32,
    height: 32,
  },
  WaterQuartzR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路/水R.webp"),
    width: 32,
    height: 32,
  },
  WaterQuartzSR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路/水SR.webp"),
    width: 32,
    height: 32,
  },
  FireQuartz: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路/火.webp"),
    width: 32,
    height: 32,
  },
  FireQuartzR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路/火R.webp"),
    width: 32,
    height: 32,
  },
  FireQuartzSR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路/火SR.webp"),
    width: 32,
    height: 32,
  },
  WindQuartz: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路/风.webp"),
    width: 32,
    height: 32,
  },
  WindQuartzR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路/风R.webp"),
    width: 32,
    height: 32,
  },
  WindQuartzSR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路/风SR.webp"),
    width: 32,
    height: 32,
  },
  TimeQuartz: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路/时.webp"),
    width: 32,
    height: 32,
  },
  TimeQuartzR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路/时R.webp"),
    width: 32,
    height: 32,
  },
  TimeQuartzSR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路/时SR.webp"),
    width: 32,
    height: 32,
  },
  SpaceQuartz: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路/空.webp"),
    width: 32,
    height: 32,
  },
  SpaceQuartzR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路/空R.webp"),
    width: 32,
    height: 32,
  },
  SpaceQuartzSR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路/空SR.webp"),
    width: 32,
    height: 32,
  },
  MirageQuartz: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路/幻.webp"),
    width: 32,
    height: 32,
  },
  MirageQuartzR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路/幻R.webp"),
    width: 32,
    height: 32,
  },
  MirageQuartzSR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路/幻SR.webp"),
    width: 32,
    height: 32,
  },
  LostQuartz: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路/失落.webp"),
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
  const { size } = options;
  const icon = GetIconByType(Type);
  const result = icon
    ? `<img src="${this.app.vault.adapter.basePath}/${
        icon.file.path
      }" width="${GetDisplaySize(icon, size)}"/> ${ItemName} ${GetNum(
        item,
        options
      )}`
    : "";
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
