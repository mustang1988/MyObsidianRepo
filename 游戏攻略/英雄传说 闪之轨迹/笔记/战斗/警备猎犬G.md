---
Name: "警备猎犬G"
Icon: "![[图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/战斗笔记/警备猎犬G.webp]]"
Description:
  - "称呼拥有比起同类来特别巨大身躯的攻击野犬."
  - "危险程度也向上翻倍."
Locations: 
  - "[[游戏攻略/英雄传说 闪之轨迹/笔记/迷宫/札克森铁矿山·第3坑道|札克森铁矿山·第3坑道]]"
Properties:
  LV: 57
  HP: 10076
  EXP: 270
  STR: 1384
  DEF: 1222
  ATS: 0
  ADF: 813
  SPD: 97
MagicRates:
  - 175
  - 100
  - 135
  - 100
  - 100
  - 100
  - 100
Droped:
  Sepiths:
    - 4
    - 8
    - 8
    - 5
    - 3
    - 3
    - 3
    - 18
  Items:
    - Name: ""
      Type: "UMaterial"
      Num: 1
    - Name: "魔兽红肉"
      Type: "FoodIngredient"
      Num: 1
Unbalance:
  - 2
  - 3
  - 2
  - 2
DebuffRates:
  Poison: 50
  Burn: 150
  Death: 100
  Seal: 100
  Freeze: 50
  Nightmare: 50
  Mute: 100
  Petrify: 100
  Delay: 100
  Blind: 100
  Faint: 50
  Vanish: 100
  Sleep: 150
  Confuse: 100
  SDown: 100
Boss: false
---
````ad-battle
title: 警备猎犬G
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