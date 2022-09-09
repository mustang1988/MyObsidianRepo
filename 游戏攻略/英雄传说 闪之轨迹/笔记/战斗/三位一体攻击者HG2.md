---
Aliases: 
  - "三位一体攻击者HG"
Positions:
  - "[[游戏攻略/英雄传说 闪之轨迹/笔记/迷宫/札克森铁矿山·第3坑道|札克森铁矿山·第3坑道]]"
Bonus:
  - "U物质"
  - "EP填充剂II"
Boss: false
---
```ad-quote
title: 三位一体攻击者HG
color: 177,82,121
icon: monster-skull

出现位置: `$= dv.current().Positions`

~~~dataviewjs
const loops = dv.current().Bonus 
              ? dv.current().Bonus.map(b => (Array.isArray(b.Icon) ? b.Icon.join('') : b.Icon) + b.Name + (b.Num > 1 ? 'x'+b.Num: '')).join(' ,') 
              : '无'
dv.paragraph('掉落物: '+ loops);
~~~

```

#英雄传说/闪之轨迹/笔记/战斗