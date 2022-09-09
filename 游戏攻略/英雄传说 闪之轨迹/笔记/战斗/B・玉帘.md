---
Positions:
  - "[[游戏攻略/英雄传说 闪之轨迹/笔记/迷宫/札克森铁矿山·搬运区域|札克森铁矿山·搬运区域]]"
Bonus:
- Name: "圣灵药·改"
  Icon: "![[图片/游戏攻略/英雄传说/通用/图标/消耗品.webp|15]]"
  Num: 1
- Name: "EP填充剂III"
  Icon: "![[图片/游戏攻略/英雄传说/通用/图标/消耗品.webp|15]]"
  Num: 1
Boss: true
Tips:
  - "攻击带炎伤并且降低攻击, 吃延迟, 会放魔法"
---
````ad-danger
title: B・玉帘
icon: skull

出现位置: `$= dv.current().Positions`

~~~dataviewjs
const loops = dv.current().Bonus 
              ? dv.current().Bonus.map(b => (Array.isArray(b.Icon) ? b.Icon.join('') : b.Icon) + b.Name + (b.Num > 1 ? 'x'+b.Num: '')).join(' ,') 
              : '无'
dv.paragraph('掉落物: '+ loops);
~~~

```ad-tip
title: 攻略
icon: title

~~~dataviewjs
dv.list(dv.current().Tips)
~~~
```
````

#英雄传说/闪之轨迹/笔记/战斗