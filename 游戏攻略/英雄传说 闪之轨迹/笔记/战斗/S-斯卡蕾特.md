---
Name: "S-斯卡蕾特"
Icon: "![[图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/战斗笔记/S-斯卡蕾特.webp]]"
Description:
  - "递归解放战线的美女干部."
  - "自由自在的操纵《法剑》,"
  - "玩弄敌人、进行血祭."
Locations: 
  - "[[游戏攻略/英雄传说 闪之轨迹/笔记/迷宫/加雷利亚要塞・中央货物大厅|加雷利亚要塞・中央货物大厅]]"
Properties:
  LV: 52
  HP: 110040
  EXP: 1680
  STR: 1185
  DEF: 1177
  ATS: 563
  ADF: 668
  SPD: 98
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
    Earth: 50
    Water: 50
    Fire: 50
    Wind: 50
    Time: 40
    Space: 40
    Mirage: 40
    Mass: 130
  Items:
    - Name: ""
      Type: "UMaterial"
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
  Poison: 100
  Burn: 100
  Death: 0
  Seal: 100
  Freeze: 100
  Nightmare: 100
  Mute: 100
  Petrify: 0
  Delay: 20
  Blind: 100
  Faint: 100
  Vanish: 0
  Sleep: 100
  Confuse: 0
  SDown: 50
Boss: true
---
````ad-battle-boss
title: S-斯卡蕾特
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