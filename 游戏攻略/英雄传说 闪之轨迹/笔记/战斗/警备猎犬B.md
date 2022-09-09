---
Name: "警备猎犬B"
Positions: 
  - "[[公都地下水路3]]"
Bonus: 
- Name: "HP2"
  Icon: "![[图片/游戏攻略/英雄传说/通用/图标/回路_水.webp|15]]"
  Num: 1
Boss: true
---
````ad-danger
title: 警备猎犬B
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

此战马奇亚斯和尤西斯的Link强制连在一起用艾玛的技能调查信息后, 爆S技火速解决一个, 剩下的慢慢磨

有马奇亚斯和艾玛在, 恢复不是问题.小心BOSS的气绝攻击就可以了
```
````

#英雄传说/闪之轨迹/笔记/战斗