---
Positions:
  - ""
Bonus:
  - ""
Boss: true
Tips:
  - 
---
````ad-danger
title: {{title}}
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