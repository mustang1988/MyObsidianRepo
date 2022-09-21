---
Positions:
  - "[[游戏攻略/英雄传说 闪之轨迹/笔记/迷宫/卢雷军用工厂|卢雷军用工厂]]"
Bonus: 
Boss: true
Tips:
  - 
---
````ad-danger
title: 型态兵器G
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