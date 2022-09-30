---
TreasureChests:
- Chapter: "[[序章 托尔兹士官学院#^ch-0-3-31-location-01|序章3/31]]"
  Location: "[[游戏攻略/英雄传说 闪之轨迹/笔记/迷宫/旧校舍地下・第1层1|旧校舍地下・第1层1]]"
  Bonus: 
    Name: ""
    Type: "AllSepiths"
    Num: 50
  Remark: ""
- Chapter: "[[序章 托尔兹士官学院#^ch-0-3-31-location-01|序章3/31]]"
  Location: "[[游戏攻略/英雄传说 闪之轨迹/笔记/迷宫/旧校舍地下・第1层1|旧校舍地下・第1层1]]"
  Bonus: 
    Name: "岩之刺"
    Type: "EarthQuartz"
    Num: 1
  Remark: ""
- Chapter: "[[序章 托尔兹士官学院#^ch-0-3-31-location-02|序章3/31]]"
  Location: "[[游戏攻略/英雄传说 闪之轨迹/笔记/迷宫/旧校舍地下・第1层2|旧校舍地下・第1层2]]"
  Bonus: 
    Name: "回复术"
    Type: "WaterQuartz"
    Num: 1
  Remark: ""
- Chapter: "[[序章 托尔兹士官学院#^ch-0-3-31-location-03|序章3/31]]"
  Location: "[[旧校舍地下・第1层3]]"
  Bonus: 
    Name: ""
    Type: "AllSepiths"
    Num: 50
  Remark: ""
---
```dataviewjs
const { TreasureChests } = dv.current();
const id = "001";
const treasureChest = TreasureChests[parseInt(id) - 1];
if (treasureChest) {
  const { Chapter, Location, Bonus, Remark } = treasureChest;
  const bonus = await dv.view("Item", { items: Bonus, options: { raw: true } });
  console.log(bonus);
  dv.table([], [[id, Chapter, Location, dv.span(bonus), Remark]]);
}
```
^001
```dataviewjs
const { TreasureChests } = dv.current();
const id = "002";
const treasureChest = TreasureChests[parseInt(id) - 1];
if (treasureChest) {
  const { Chapter, Location, Bonus, Remark } = treasureChest;
  const bonus = await dv.view("Item", { items: Bonus, options: { raw: true } });
  console.log(bonus);
  dv.table([], [[id, Chapter, Location, dv.span(bonus), Remark]]);
}
```
^002
```dataviewjs
const { TreasureChests } = dv.current();
const id = "003";
const treasureChest = TreasureChests[parseInt(id) - 1];
if (treasureChest) {
  const { Chapter, Location, Bonus, Remark } = treasureChest;
  const bonus = await dv.view("Item", { items: Bonus, options: { raw: true } });
  console.log(bonus);
  dv.table([], [[id, Chapter, Location, dv.span(bonus), Remark]]);
}
```
^003

```dataviewjs
const { TreasureChests } = dv.current();
const id = "004";
const treasureChest = TreasureChests[parseInt(id) - 1];
if (treasureChest) {
  const { Chapter, Location, Bonus, Remark } = treasureChest;
  const bonus = await dv.view("Item", { items: Bonus, options: { raw: true } });
  console.log(bonus);
  dv.table([], [[id, Chapter, Location, dv.span(bonus), Remark]]);
}
```
^004