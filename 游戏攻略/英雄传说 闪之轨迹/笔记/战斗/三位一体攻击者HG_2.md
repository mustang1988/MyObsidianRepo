---
Name: "三位一体攻击者HG"
Icon: "![[图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/战斗笔记/三位一体攻击者HG.webp]]"
Description:
  - "帝国解放战线放出的侦察型小型傀儡兵器."
  - "会发出大范围的电磁波,"
  - "削弱敌人的防御力和行动力."
Locations: 
  - "[[游戏攻略/英雄传说 闪之轨迹/笔记/迷宫/札克森铁矿山·第3坑道|札克森铁矿山·第3坑道]]"
Properties:
  LV: 57
  HP: 5470
  EXP: 235
  STR: 1129
  DEF: 1180
  ATS: 0
  ADF: 1023
  SPD: 99
MagicRates:
  - 80
  - 120
  - 90
  - 100
  - 100
  - 100
  - 100
Droped:
  Sepiths:
    - 3
    - 3
    - 3
    - 3
    - 6
    - 6
    - 6
    - 16
  Items:
    - Name: ""
      Type: "UMaterial"
      Num: 1
    - Name: "EP填充剂II"
      Type: "Potion"
      Num: 1
Unbalance:
  - 1
  - 1
  - 1
  - 3
DebuffRates:
  Poison: 0
  Burn: 50
  Death: 100
  Seal: 100
  Freeze: 50
  Nightmare: 0
  Mute: 100
  Petrify: 100
  Delay: 100
  Blind: 100
  Faint: 100
  Vanish: 100
  Sleep: 0
  Confuse: 100
  SDown: 100
Boss: false
---
````ad-battle
title: 三位一体攻击者HG
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