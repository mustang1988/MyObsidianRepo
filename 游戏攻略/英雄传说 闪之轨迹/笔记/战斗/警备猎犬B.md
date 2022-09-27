---
Name: "警备猎犬B"
Icon: "![[图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/战斗笔记/警备猎犬B.webp]]"
Description:
  - "领邦军训练出的军用魔兽."
  - "使出训练有素的合作攻击,"
  - "绝不会让猎物逃走."
Locations: 
  - "[[公都地下水路3]]"
Properties:
  LV: 21
  HP: 23580
  EXP: 720
  STR: 618
  DEF: 605
  ATS: 0
  ADF: 530
  SPD: 78
MagicRates:
  Earth: 80
  Water: 80
  Fire: 80
  Wind: 80
  Time: 100
  Space: 100
  Mirage: 100
Droped:
  Sepiths:
    Earth: 24
    Water: 10
    Fire: 10
    Wind: 24
    Time: 0
    Space: 0
    Mirage: 30
    Mass: 50
  Items:
    - Name: "HP2"
      Type: "WaterQuartz"
      Num: 1
Unbalance:
  Slash: 1
  Thrust: 3
  Pierce: 1
  Strike: 1
DebuffRates:
  Poison: 50
  Burn: 100
  Death: 0
  Seal: 100
  Freeze: 100
  Nightmare: 100
  Mute: 100
  Petrify: 0
  Delay: 50
  Blind: 100
  Faint: 100
  Vanish: 0
  Sleep: 100
  Confuse: 100
  SDown: 50
Boss: true
---
````ad-battle-boss
title: 警备猎犬B
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