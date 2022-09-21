---
Positions:
  - "[[游戏攻略/英雄传说 闪之轨迹/笔记/迷宫/札克森铁矿山·中介区域|札克森铁矿山·中介区域]]"
Bonus: 
Boss: true
Tips:
  - "这场战斗百合学姐几乎是逆天，气绝战技对同志C有效。"
  - "配合马奇亚斯的提速，亚莉莎的回CP，基本百合学姐就能干掉同志C，其他人解决杂兵就可。"
  - "同志C会召唤炸弹，次回合引爆，只是炸弹们距离都很接近，马奇亚斯装个攻击3普攻都能打掉。"
  - "中途C还是会放S技。但整体因为百合学姐问题不大。"
  - "==注：同志C的炸弹([[游戏攻略/英雄传说 闪之轨迹/笔记/战斗/NT-I|NT-I]])也需要调查，注意别坑了=="
---
````ad-danger
title: G・玉帘
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