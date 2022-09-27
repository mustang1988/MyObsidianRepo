---
Name: "B・玉帘"
Icon: "![[图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/战斗笔记/B・玉帘.webp]]"
Description:
  - "帝国解放战线放出的防御据点用大型傀儡兵器."
  - "改良过的蓝色机体拥有凄厉的火力."
Locations: 
  - "[[游戏攻略/英雄传说 闪之轨迹/笔记/迷宫/札克森铁矿山·搬运区域|札克森铁矿山·搬运区域]]"
Properties:
  LV: 58
  HP: 59605
  EXP: 1280
  STR: 1506
  DEF: 1847
  ATS: 543
  ADF: 1108
  SPD: 88
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
    Earth: 32
    Water: 32
    Fire: 32
    Wind: 32
    Time: 32
    Space: 32
    Mirage: 32
    Mass: 90
  Items:
    - Name: "圣灵药·改"
      Type: "Potion"
      Num: 1
    - Name: "EP填充剂III"
      Type: "Potion"
      Num: 1
Unbalance:
  Slash: 1
  Thrust: 1
  Pierce: 1
  Strike: 0
DebuffRates:
  Poison: 0
  Burn: 100
  Death: 0
  Seal: 20
  Freeze: 100
  Nightmare: 0
  Mute: 50
  Petrify: 0
  Delay: 100
  Blind: 100
  Faint: 20
  Vanish: 0
  Sleep: 0
  Confuse: 50
  SDown: 100
Boss: true
---
````ad-battle-boss
title: B・玉帘
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