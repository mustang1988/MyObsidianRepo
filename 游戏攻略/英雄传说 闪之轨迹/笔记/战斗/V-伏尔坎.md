---
Name: "V-伏尔坎"
Icon: "![[图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/战斗笔记/V-伏尔坎.webp]]"
Description:
  - "帝国解放战线的大块头干部."
  - "任由憎恨的火焰燃烧,"
  - "以巨大的格林炮进行凄厉的歼灭攻击."
Locations: 
  - "[[游戏攻略/英雄传说 闪之轨迹/笔记/迷宫/札克森铁矿山·中介区域|札克森铁矿山·中介区域]]"
Properties:
  LV: 60
  HP: 169723
  EXP: 2800
  STR: 1718
  DEF: 1310
  ATS: 865
  ADF: 1078
  SPD: 107
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
    Earth: 55
    Water: 55
    Fire: 55
    Wind: 55
    Time: 45
    Space: 45
    Mirage: 45
    Mass: 140
  Items:
Unbalance:
  Slash: 1
  Thrust: 0
  Pierce: 0
  Strike: 2
DebuffRates:
  Poison: 100
  Burn: 50
  Death: 0
  Seal: 0
  Freeze: 50
  Nightmare: 0
  Mute: 100
  Petrify: 0
  Delay: 10
  Blind: 100
  Faint: 0
  Vanish: 0
  Sleep: 50
  Confuse: 0
  SDown: 100
Boss: true
---
````ad-battle-boss
title: V-伏尔坎
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