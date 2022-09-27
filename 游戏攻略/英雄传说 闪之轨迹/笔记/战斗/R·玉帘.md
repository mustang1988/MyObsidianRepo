---
Name: "R·玉帘"
Icon: "![[图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/战斗笔记/R·玉帘.webp]]"
Description:
  - "鲜红的大型傀儡兵器."
  - "改良为护卫干部用,"
  - "具备更加高性能、高火力的机器."
Locations: 
  - "[[游戏攻略/英雄传说 闪之轨迹/笔记/迷宫/加雷利亚要塞・中央货物大厅|加雷利亚要塞・中央货物大厅]]"
Properties:
  LV: 51
  HP: 58295
  EXP: 1024
  STR: 1473
  DEF: 1794
  ATS: 530
  ADF: 766
  SPD: 86
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
    Earth: 32
    Water: 32
    Fire: 32
    Wind: 32
    Time: 32
    Space: 32
    Mirage: 32
    Mass: 80
  Items:
    - Name: ""
      Type: "UMaterial"
      Num: 1
    - Name: "EP填充剂III"
      Type: "Potion"
      Num: 1
Unbalance:
  Slash: 0
  Thrust: 1
  Pierce: 1
  Strike: 1
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
title: R·玉帘
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