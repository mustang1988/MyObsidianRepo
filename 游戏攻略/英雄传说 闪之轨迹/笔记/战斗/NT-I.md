---
Name: "NT-I"
Icon: "![[图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/战斗笔记/NT-I.webp]]"
Description:
  - "《C》设置的自动水雷."
  - "会引发把周围卷入的爆炸."
Locations: 
  - "[[游戏攻略/英雄传说 闪之轨迹/笔记/迷宫/札克森铁矿山·中介区域|札克森铁矿山·中介区域]]"
Properties:
  LV: 60
  HP: 1310
  EXP: 0
  STR: 1310
  DEF: 262
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
  Slash: 0
  Thrust: 0
  Pierce: 0
  Strike: 0
DebuffRates:
  Poison: 0
  Burn: 0
  Death: 0
  Seal: 0
  Freeze: 0
  Nightmare: 0
  Mute: 0
  Petrify: 0
  Delay: 0
  Blind: 0
  Faint: 0
  Vanish: 0
  Sleep: 0
  Confuse: 0
  SDown: 0
Boss: true
---
````ad-battle-boss
title: NT-I
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