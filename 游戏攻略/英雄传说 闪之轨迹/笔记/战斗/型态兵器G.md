---
Name: "型态兵器G"
Icon: "![[图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/战斗笔记/型态兵器G.webp]]"
Description:
  - "谜之《结社》突击型傀儡兵器."
  - "运用无与伦比的突破力入侵敌阵,"
  - "用大范围攻击一口气歼灭敌人."
Locations: 
  - "[[游戏攻略/英雄传说 闪之轨迹/笔记/迷宫/卢雷军用工厂|卢雷军用工厂]]"
Properties:
  LV: 58
  HP: 115935
  EXP: 3250
  STR: 1768
  DEF: 2135
  ATS: 0
  ADF: 923
  SPD: 114
MagicRates:
  - 100
  - 100
  - 100
  - 100
  - 100
  - 100
  - 100
Droped:
  Sepiths:
    Earth: 40
    Water: 38
    Fire: 34
    Wind: 36
    Time: 38
    Space: 40
    Mirage: 42
    Mass: 100
  Items:
Unbalance:
  Slash: 1
  Thrust: 2
  Pierce: 1
  Strike: 2
DebuffRates:
  Poison: 0
  Burn: 100
  Death: 0
  Seal: 20
  Freeze: 100
  Nightmare: 0
  Mute: 20
  Petrify: 0
  Delay: 20
  Blind: 100
  Faint: 0
  Vanish: 0
  Sleep: 0
  Confuse: 20
  SDown: 50
Boss: true
---
````ad-battle-boss
title: 型态兵器G
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