---
Name: "番茄焗烤"
Time: "[[第四章 绯之帝都 ~仲夏祭~#^ch-4-7-24-recipe-01|第四章7/24]]"
How: "凯旋大道百货店《彩虹桥广场》的《威士顿之家》店员莉诺叶对话"
Ingredient:
- Name: "[[游戏攻略/英雄传说 闪之轨迹/数据库/物品#^chengshurulao]]"
  Num: 1
- Name: "[[游戏攻略/英雄传说 闪之轨迹/数据库/物品#^ruanmianmianmalingshu]]"
  Num: 1
- Name: "[[游戏攻略/英雄传说 闪之轨迹/数据库/物品#^kuxihongshi]]"
  Num: 1
- Name: "[[游戏攻略/英雄传说 闪之轨迹/数据库/物品#^moshouzhike]]"
  Num: 1
- Name: "[[游戏攻略/英雄传说 闪之轨迹/数据库/物品#^moshouyouzhi]]"
  Num: 1
- Name: "[[游戏攻略/英雄传说 闪之轨迹/数据库/物品#^moshoufenmo]]"
  Num: 1
Regular:
  Name: "[[游戏攻略/英雄传说 闪之轨迹/数据库/物品#^fanqiejukao]]"
  Cook: 
    - "黎恩"
    - "劳拉"
    - "马奇亚斯"
    - "尤西斯"
    - "盖乌斯"
    - "克洛"
Peculiar:
  Name: "[[游戏攻略/英雄传说 闪之轨迹/数据库/物品#^rongyanjukao]]"
  Cook: 
    - "菲"
Superb:
  Name: "[[游戏攻略/英雄传说 闪之轨迹/数据库/物品#^rukoujihuajukao]]"
  Cook: 
    - "艾略特"
    - "亚莉莎"
    - "米利亚姆"
Unique:
  Name: "[[游戏攻略/英雄传说 闪之轨迹/数据库/物品#^nanguazhongjukao]]"
  Cook: 
    - "艾玛"
---
```dataviewjs
const html = await dv.view('Admonition/Food/Recipe', { recipe: dv.current(), options: { raw: true } });
console.log(html);
dv.span(html);
```