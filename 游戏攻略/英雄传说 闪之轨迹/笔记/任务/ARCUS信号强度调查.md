---
Title: "ARCUS信号强度调查"
Bonus:
- Name: "远古石碑"
  Icon: "![[图片/游戏攻略/英雄传说/通用/图标/回路_地.webp|12]]"
  Num: 1
Steps:
  - "到《RF商店》找约翰主任领取，要到五个地方使用道具栏中的导力测定器"
  - "到酒吧《F》"
  - "到修理店《贾卡司》"
  - "到卢雷大教堂"
  - "到卢雷工科大学"
  - "上层被封锁的？？门口"
  - "报告"
Time: "[[游戏攻略/英雄传说 闪之轨迹/攻略/第六章 黑与银 ~钢都动乱~#^ch-6-9-25-quest-01|第六章9/25]]"
Type: "支线任务"
BasicAP: 4
ExtraAP: 2
---
`````ad-question
title: ARCUS信号强度调查
icon: question

出现章节: `$= dv.current().Time;`

任务类型: `$= dv.current().Type;`

基础AP: `$= dv.current().BasicAP;`

额外AP: `$= dv.current().ExtraAP;`

~~~dataviewjs
dv.paragraph('任务奖励: '+ dv.current().Bonus.map(b => typeof b == 'string' ? b : (Array.isArray(b.Icon) ? b.Icon.join('') : b.Icon) + b.Name + (b.Num > 1 ? 'x'+b.Num: '')).join(' ,'));
~~~

```ad-note
title: 步骤
icon: list
~~~dataviewjs
dv.list(dv.current().Steps);
~~~
```
`````

#英雄传说/闪之轨迹/笔记/任务/支线 