---
Positions:
  - "[[游戏攻略/英雄传说 闪之轨迹/笔记/迷宫/帝都地下道·最深处]]"
Bonus: 
Boss: true
Tips:
  - "几回合就会自动结束战斗，记得调查情报"
---
````ad-danger
title: 《C》
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