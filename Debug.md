---
Quartzs:
  - Name: "丰饶"
    Anchor: "fengrao"
    Rank: "SR"
    Element: "Earth"
    Arts:
      - "[[游戏攻略/英雄传说 闪之轨迹/笔记/导力魔法#^dadizhiyu|大地之愈]]"
      - "[[游戏攻略/英雄传说 闪之轨迹/笔记/导力魔法#^jiejingfanghufu|结晶防护·复]]"
      - "[[游戏攻略/英雄传说 闪之轨迹/笔记/导力魔法#^dadibenglie|大地崩裂]]"
    Effects:
      - "HP+200"
      - "DEF+5"
      - "ATS+5"
---

```dataviewjs
const raw = await dv.view('Admonition/QuartzAdmonition', { quartz: dv.current().Quartzs[0], options: { raw: true } });
dv.span(raw);
```