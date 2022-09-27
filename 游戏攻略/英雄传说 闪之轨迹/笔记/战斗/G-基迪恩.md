---
Name: "G-基迪恩"
Icon: "![[图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/战斗笔记/G-基迪恩.webp]]"
Description:
  - "委身在某些组织中,"
  - "落魄猎兵们的雇主."
  - "使用手枪和高等魔法,"
  - "从后方进行支援攻击."
Locations: 
  - "[[采石场·内部]]"
Properties:
  LV: 30
  HP: 26986
  EXP: 800
  STR: 734
  DEF: 627
  ATS: 297
  ADF: 370
  SPD: 91
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
    Earth: 18
    Water: 18
    Fire: 18
    Wind: 18
    Time: 15
    Space: 15
    Mirage: 15
    Mass: 60
  Items:
Unbalance:
  Slash: 1
  Thrust: 1
  Pierce: 1
  Strike: 1
DebuffRates:
  Poison: 100
  Burn: 100
  Death: 0
  Seal: 100
  Freeze: 100
  Nightmare: 100
  Mute: 100
  Petrify: 0
  Delay: 0
  Blind: 100
  Faint: 100
  Vanish: 0
  Sleep: 100
  Confuse: 100
  SDown: 100
Boss: true
---
````ad-battle-boss
title: G-基迪恩
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