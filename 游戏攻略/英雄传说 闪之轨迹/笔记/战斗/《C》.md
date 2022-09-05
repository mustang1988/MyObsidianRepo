---
Positions:
  - "[[游戏攻略/英雄传说 闪之轨迹/笔记/迷宫/帝都地下道·最深处]]"
Bonus:
  - ""
Boss: true
Tips:
  - "几回合就会自动结束战斗，记得调查情报"
---
````ad-danger
title: 《C》
icon: skull

出现位置: `$= dv.current().Positions`

掉落物: `$= dv.current().Bonus`

```ad-tip
title: 攻略
icon: title

~~~dataviewjs
dv.list(dv.current().Tips)
~~~
```
````

#英雄传说/闪之轨迹/笔记/战斗