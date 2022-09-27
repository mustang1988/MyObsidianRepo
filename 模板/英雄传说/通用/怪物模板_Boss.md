---
Name: "<% tp.file.title %>"
Icon: "![[图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/战斗笔记/<% tp.file.title %>.webp]]"
Description:
  - ""
Locations: 
  - ""
Properties:
  LV: 0
  HP: 0
  EXP: 0
  STR: 0
  DEF: 0
  ATS: 0
  ADF: 0
  SPD: 0
MagicRates:
  Earth: 100
  Water: 100
  Fire: 100
  Wind: 100
  Time: 100
  Space: 100
  Mirage: 100
Droped:
  Sepiths:
    Earth: 0
    Water: 0
    Fire: 0
    Wind: 0
    Time: 0
    Space: 0
    Mirage: 0
    Mass: 0
  Items:
Unbalance:
  Slash: 1
  Thrust: 1
  Pierce: 1
  Strike: 1
DebuffRates:
  Poison: 100
  Burn: 100
  Death: 100
  Seal: 100
  Freeze: 100
  Nightmare: 100
  Mute: 100
  Petrify: 100
  Delay: 100
  Blind: 100
  Faint: 100
  Vanish: 100
  Sleep: 100
  Confuse: 100
  SDown: 100
Boss: true
---
````ad-battle-boss
title: <% tp.file.title %>
collapse: open

```dataviewjs
await dv.view('MonsterInfoTable', { monster: dv.current() })
```

属性
```dataviewjs
await dv.view('MonsterPropertyTable', { props: dv.current().Properties })
```

魔法属性有效率
```dataviewjs
await dv.view('MagicRateTable', { rate: dv.current().MagicRates });
```

获得耀晶石
```dataviewjs
await dv.view('DropSepithTable', { sepiths: dv.current().Droped.Sepiths })
```

取得道具
```dataviewjs
await dv.view('DropItemTable', { items: dv.current().Droped.Items })
```

失衡引发机率
```dataviewjs
await dv.view('BLNRateTable', { rate: dv.current().Unbalance })
```

状态变化有效率
```dataviewjs
await dv.view('DebuffRateTable', { status: dv.current().DebuffRates })
```
````

#英雄传说/闪之轨迹/笔记/战斗 