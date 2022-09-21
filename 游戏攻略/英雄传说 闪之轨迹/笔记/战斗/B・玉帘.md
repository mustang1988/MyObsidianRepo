---
Positions:
  - "[[游戏攻略/英雄传说 闪之轨迹/笔记/迷宫/札克森铁矿山·搬运区域|札克森铁矿山·搬运区域]]"
Bonus:
- Name: "圣灵药·改"
  Type: "Potion"
  Num: 1
- Name: "EP填充剂III"
  Type: "Potion"
  Num: 1
Boss: true
Tips:
  - "攻击带炎伤并且降低攻击, 吃延迟, 会放魔法"
---
````ad-danger
title: B・玉帘
icon: skull

出现位置: `$= dv.current().Positions`

掉落物: `$=await dv.view('Item', { items: dv.current().Bonus });`

```ad-tip
title: 攻略
icon: title

~~~dataviewjs
dv.list(dv.current().Tips)
~~~
```
````

#英雄传说/闪之轨迹/笔记/战斗