---
Positions:
  - "[[游戏攻略/英雄传说 闪之轨迹/笔记/迷宫/加雷利亚要塞・中央货物大厅|加雷利亚要塞・中央货物大厅]]"
Bonus:
- Name: ""
  Type: "UMaterial"
  Num: 1
- Name: "EP填充剂III"
  Type: "Potion"
  Num: 1
Boss: true
Tips:
  - "Boss吃大部分状态"
  - "注意下她的S技就行了"
  - "两杂兵攻击带炎伤和降低攻击，并且会大范围魔法，打断就行"
---
````ad-danger
title: S-斯卡蕾特
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