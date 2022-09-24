---
# 名称
Name: "《C》"
# 图标
Icon: "![[图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/战斗笔记/《C》.webp]]"
Description:
  - "率领帝国解放战线,"
  - "充满谜团的假面男子."
  - "巧妙的操弄双刃剑,"
  - "使出各式各样的招式."
# 出现位置
Locations: 
  - "[[游戏攻略/英雄传说 闪之轨迹/笔记/迷宫/帝都地下道·最深处]]"
# 基础属性
Properties:
  LV: 60
  HP: 11397
  EXP: 0
  STR: 1886
  DEF: 1454
  ATS: 670
  ADF: 838
  SPD: 117
# 魔法属性有效率: [地, 水, 火, 风, 时, 空, 幻]
MagicRates:
  - 100
  - 100
  - 100
  - 100
  - 100
  - 100
  - 100
# 掉落
Droped:
  # 获得耀晶石: [地, 水, 火, 风, 时, 空, 幻]
  Sepiths:
    - 0
    - 0
    - 0
    - 0
    - 0
    - 0
    - 0
    # 耀晶块
    - 0
  # 取得道具
  Items:
# 失衡引发机率率
Unbalance:
  - 1
  - 0
  - 0
  - 1
# 状态变化有效率抗性
DebuffRates:
  # 中毒
  Poison: 50
  # 炎伤
  Burn: 50
  # 即死
  Death: 0
  # 封技
  Seal: 0
  # 冻结
  Freeze: 50
  # 噩梦
  Nightmare: 50
  # 封魔
  Mute: 0
  # 石化
  Petrify: 0
  # AT延迟
  Delay: 0
  # 黑暗
  Blind: 0
  # 气绝
  Faint: 50
  # 消失
  Vanish: 0
  # 睡眠
  Sleep: 0
  # 混乱
  Confuse: 50
  # 能力降低
  SDown: 50
# 是否为Boss
Boss: true
---
````ad-battle
title: 《C》
collapse: open

```dataviewjs
dv.table(
  [],
  [
    [ dv.fileLink(dv.current().Icon.path, true, "200"), dv.current().Description, dv.current().Locations ],
  ]
);
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