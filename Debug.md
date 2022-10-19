---
Name: "《C》"
Icon: "![[图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/战斗笔记/《C》.webp]]"
Description: |
  率领帝国解放战线, 充满谜团的假面男子.
  
  巧妙的操弄双刃剑, 使出各式各样的招式.
Locations: 
  - "[[游戏攻略/英雄传说 闪之轨迹/笔记/迷宫/帝都地下道·最深处]]"
Properties:
  LV: 60
  HP: 11397
  EXP: 0
  STR: 1886
  DEF: 1454
  ATS: 670
  ADF: 838
  SPD: 117
MagicRates:
  Earth: 100
  Water: 100
  Fire: 100
  Wind: 100
  Time: 100
  Space: 100
  Mirage: 100
Sepiths:
  Earth: 1
  Water: 2
  Fire: 3
  Wind: 4
  Time: 5
  Space: 6
  Mirage: 7
  Mass: 8
Loots:
  - Name: "[[游戏攻略/英雄传说 闪之轨迹/数据库/结晶回路#^yanshizhici]]"
    Type: "Item/Quartz/Regular/InLine"
Unbalance:
  Slash: 1
  Thrust: 2
  Pierce: 3
  Strike: 4
DebuffRates:
  Poison: 50
  Burn: 50
  Death: 0
  Seal: 0
  Freeze: 50
  Nightmare: 50
  Mute: 0
  Petrify: 0
  Delay: 0
  Blind: 0
  Faint: 50
  Vanish: 0
  Sleep: 0
  Confuse: 50
  SDown: 50
Boss: true
---
```dataviewjs
const page = await dv.view("Page/Monster", { monster: dv.current(), options: { raw: true } })
console.info(page)
dv.span(page);
```