const ItemIcons = {
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
};

const DefaultOptions = {
  size: 20,
  limit: 1,
  inline: true,
  seperator: " , "
};

const GetIconByType = (Type) => {
  console.debug("GetIconByType => ", Type);
  return Object.keys(ItemIcons).includes(Type) ? ItemIcons[Type] : null;
};

const MergeOptions = (options) => {
  return Object.assign(DefaultOptions, options);
};

const GetDisplaySize = (icon, size) => {
  const { width, height } = icon;
  console.log((width * size) / height, {width, size, height})
  return Math.round((width * size) / height);
};

const GetNum = (item, options) => {
  const { Num = 0 } = item;
  const { limit } = options;
  return Num > limit ? ` x ${Num}` : "";
};

const BuildHTML = (item, options) => {
  const { Type, Name: ItemName, Num: num } = item;
  const { size } = options;
  const icon = GetIconByType(Type);
  return icon
    ? `<img src="${this.app.vault.adapter.basePath}/${
        icon.file.path
      }" width="${GetDisplaySize(icon, size)}"/>${ItemName}${GetNum(
        item,
        options
      )}`
    : "";
};

const RenderItem = (item, options) => {
  dv.paragraph(BuildHTML(item, options));
};

const RenderItems = (items, options) => {
  const { inline, seperator } = options;
  inline
    ? dv.paragraph(items.map((i) => BuildHTML(i, options)).join(seperator))
    : items.forEach((i) => RenderItem(i, options));
};

const { items, options } = input;
Array.isArray(items)
  ? RenderItems(items, MergeOptions(options))
  : RenderItem(items, MergeOptions(options));
