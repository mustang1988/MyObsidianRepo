const DEBUG = false;
const ITEM_ICONS = {
  UMaterial: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_U物质.png"),
    width: 46,
    height: 54,
    name: "U物质",
  },
  KeyItem: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_道具.webp"),
    width: 28,
    height: 30,
    name: "道具",
  },
  EarthSepith: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_耀晶片_地.webp"),
    width: 18,
    height: 34,
    name: "地耀石",
  },
  WaterSepith: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_耀晶片_水.webp"),
    width: 18,
    height: 34,
    name: "水耀石",
  },
  FireSepith: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_耀晶片_火.webp"),
    width: 18,
    height: 34,
    name: "火耀石",
  },
  WindSepith: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_耀晶片_风.webp"),
    width: 18,
    height: 34,
    name: "风耀石",
  },
  TimeSepith: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_耀晶片_时.webp"),
    width: 18,
    height: 34,
    name: "时耀石",
  },
  SpaceSepith: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_耀晶片_空.webp"),
    width: 18,
    height: 34,
    name: "空耀石",
  },
  MirageSepith: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_耀晶片_幻.webp"),
    width: 18,
    height: 34,
    name: "幻耀石",
  },
  MassSepith: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_耀晶片_块.webp"),
    width: 16,
    height: 26,
    name: "耀晶块",
  },
  AllSepiths: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_耀晶片_全.webp"),
    width: 126,
    height: 34,
    name: "全耀石",
  },
  FoodRegular: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_料理_普通.webp"),
    width: 48,
    height: 48,
    name: "普通料理",
  },
  FoodSuperb: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_料理_极品.webp"),
    width: 48,
    height: 48,
    name: "极品料理",
  },
  FoodPeculiar: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_料理_古怪.webp"),
    width: 48,
    height: 48,
    name: "古怪料理",
  },
  FoodAttack: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_料理_攻击.webp"),
    width: 48,
    height: 48,
    name: "攻击料理",
  },
  FoodUnique: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_料理_独门.webp"),
    width: 48,
    height: 48,
    name: "独门料理",
  },
  FoodIngredient: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_料理_食材.webp"),
    width: 48,
    height: 48,
    name: "食材",
  },
  Potion: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_消耗品.webp"),
    width: 36,
    height: 36,
    name: "消耗品",
  },
  Gift: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_礼物.webp"),
    width: 36,
    height: 40,
    name: "礼物",
  },
  Armour: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_装备_护甲.webp"),
    width: 48,
    height: 48,
    name: "护甲",
  },
  Boots: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_装备_护腿.webp"),
    width: 48,
    height: 48,
    name: "护腿",
  },
  Accessory: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_装备_饰品.webp"),
    width: 48,
    height: 48,
    name: "饰品",
  },
  Book: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_书籍.webp"),
    width: 48,
    height: 48,
    name: "书籍",
  },
  CosmeticArmour: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_装饰_服装.webp"),
    width: 48,
    height: 48,
    name: "服装",
  },
  CosmeticAccessory: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_装饰_配饰.webp"),
    width: 48,
    height: 48,
    name: "配饰",
  },
  CosmeticHair: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_装饰_假发.webp"),
    width: 44,
    height: 44,
    name: "假发",
  },
  FishingRod: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_钓鱼_鱼竿.webp"),
    width: 32,
    height: 32,
    name: "鱼竿",
  },
  SmallFish: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_钓鱼_小.webp"),
    width: 32,
    height: 32,
    name: "小鱼",
  },
  MediumFish: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_钓鱼_中.webp"),
    width: 32,
    height: 32,
    name: "中鱼",
  },
  BigFish: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/物品_钓鱼_大.webp"),
    width: 32,
    height: 32,
    name: "大鱼",
  },
  EarthQuartz: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_地.webp"),
    width: 24,
    height: 24,
    name: "地回路",
  },
  EarthQuartzR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_地R.webp"),
    width: 24,
    height: 24,
    name: "地R回路",
  },
  EarthQuartzSR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_地SR.webp"),
    width: 24,
    height: 24,
    name: "地SR回路",
  },
  EarthQuartzMaster: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_地_核心.webp"),
    width: 32,
    height: 32,
    name: "地核心回路",
  },
  WaterQuartz: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_水.webp"),
    width: 32,
    height: 32,
    name: "水回路",
  },
  WaterQuartzR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_水R.webp"),
    width: 32,
    height: 32,
    name: "水R回路",
  },
  WaterQuartzSR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_水SR.webp"),
    width: 32,
    height: 32,
    name: "水SR回路",
  },
  WaterQuartzMaster: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_水_核心.webp"),
    width: 32,
    height: 32,
    name: "水核心回路",
  },
  FireQuartz: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_火.webp"),
    width: 32,
    height: 32,
    name: "火回路",
  },
  FireQuartzR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_火R.webp"),
    width: 32,
    height: 32,
    name: "火R回路",
  },
  FireQuartzSR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_火SR.webp"),
    width: 32,
    height: 32,
    name: "火SR回路",
  },
  FireQuartzMaster: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_火_核心.webp"),
    width: 32,
    height: 32,
    name: "火核心回路",
  },
  WindQuartz: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_风.webp"),
    width: 32,
    height: 32,
    name: "风回路",
  },
  WindQuartzR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_风R.webp"),
    width: 32,
    height: 32,
    name: "风R回路",
  },
  WindQuartzSR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_风SR.webp"),
    width: 32,
    height: 32,
    name: "风SR回路",
  },
  WindQuartzMaster: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_风_核心.webp"),
    width: 32,
    height: 32,
    name: "风核心回路",
  },
  TimeQuartz: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_时.webp"),
    width: 32,
    height: 32,
    name: "时回路",
  },
  TimeQuartzR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_时R.webp"),
    width: 32,
    height: 32,
    name: "时R回路",
  },
  TimeQuartzSR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_时SR.webp"),
    width: 32,
    height: 32,
    name: "时SR回路",
  },
  TimeQuartzMaster: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_时_核心.webp"),
    width: 32,
    height: 32,
    name: "时核心回路",
  },
  SpaceQuartz: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_空.webp"),
    width: 32,
    height: 32,
    name: "空回路",
  },
  SpaceQuartzR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_空R.webp"),
    width: 32,
    height: 32,
    name: "空R回路",
  },
  SpaceQuartzSR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_空SR.webp"),
    width: 32,
    height: 32,
    name: "空SR回路",
  },
  SpaceQuartzMaster: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_空_核心.webp"),
    width: 32,
    height: 32,
    name: "空核心回路",
  },
  MirageQuartz: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_幻.webp"),
    width: 32,
    height: 32,
    name: "幻回路",
  },
  MirageQuartzR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_幻R.webp"),
    width: 32,
    height: 32,
    name: "幻R回路",
  },
  MirageQuartzSR: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_幻SR.webp"),
    width: 32,
    height: 32,
    name: "幻SR回路",
  },
  MirageQuartzMaster: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_幻_核心.webp"),
    width: 32,
    height: 32,
    name: "幻核心回路",
  },
  LostQuartz: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_失落.webp"),
    width: 32,
    height: 32,
    name: "失落回路",
  },
  EXOrbHP: {
    file: dv.fileLink("图片/游戏攻略/英雄传说/通用/图标/回路_骑神宝玉_HP.webp"),
    width: 48,
    height: 48,
    name: "HP宝玉",
  },
  EXOrbPower: {
    file: dv.fileLink(
      "图片/游戏攻略/英雄传说/通用/图标/回路_骑神宝玉_力量.webp"
    ),
    width: 48,
    height: 48,
    name: "力量宝玉",
  },
  EXOrbShield: {
    file: dv.fileLink(
      "图片/游戏攻略/英雄传说/通用/图标/回路_骑神宝玉_防御.webp"
    ),
    width: 48,
    height: 48,
    name: "防御宝玉",
  },
  EXOrbSpeed: {
    file: dv.fileLink(
      "图片/游戏攻略/英雄传说/通用/图标/回路_骑神宝玉_速度.webp"
    ),
    width: 48,
    height: 48,
    name: "速度宝玉",
  },
};
const GetIcon = (name) => {
  const keys = Object.keys(ITEM_ICONS);
  const names = Object.values(ITEM_ICONS).map((i) => i.name);
  let result = null;
  if (!keys.includes(name) && !names.includes(name)) {
    DEBUG &&
      console.error("Item.js, GetIcon() 未找到对应物品图标: ", {
        name,
      });
  } else if (keys.includes(name)) {
    result = ITEM_ICONS[name];
  } else if (names.includes(name)) {
    for (const i of Object.values(ITEM_ICONS)) {
      if (i.name === name) {
        result = i;
        break;
      }
    }
  }
  return result;
};
const GetItemIcon = (name) => {
  return Array.isArray(name) ? name.map((n) => GetIcon(n)) : GetIcon(name);
};
const { name } = input;
DEBUG && console.log("Element.js, input: ", input);
return GetItemIcon(name);
