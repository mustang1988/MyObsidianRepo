---
# 名称
Name: "{{title}}"
# 图标
Icon: "![[图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/战斗笔记/{{title}}.webp]]"
# 出现位置
Locations: 
  - ""
# 基础属性
Properties:
  LV: 0
  HP: 0
  EXP: 0
  STR: 0
  DEF: 0
  ATS: 0
  ADF: 0
  SPD: 0
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
# 失衡引发率率
Unbalance:
  - 1
  - 1
  - 1
  - 1
# 状态变化有效率抗性
DebuffRates:
  # 中毒
  Poison: 0
  # 炎伤
  Burn: 0
  # 即死
  Death: 0
  # 封技
  Seal: 0
  # 冻结
  Freeze: 0
  # 噩梦
  Nightmare: 0
  # 封魔
  Mute: 0
  # 石化
  Petrify: 0
  # AT延迟
  Delay: 0
  # 黑暗
  Blind: 0
  # 气绝
  Faint: 0
  # 消失
  Vanish: 0
  # 睡眠
  Sleep: 0
  # 混乱
  Confuse: 0
  # 能力降低
  SDown: 0
# 是否为Boss
Boss: true
---
````ad-battle-boss
title: {{title}}
collapse: open

```dataviewjs
// 图标
dv.paragraph(dv.fileLink(dv.current().Icon.path, true, "200"));
```

出现位置:
`$=dv.list(dv.current().Locations)`

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

失衡引发率
```dataviewjs
await dv.view('BLNRateTable', { rate: dv.current().Unbalance })
```

状态变化有效率
```dataviewjs
await dv.view('DebuffRateTable', { status: dv.current().DebuffRates })
```
````

#英雄传说/闪之轨迹/笔记/战斗 