---
Item: "[[游戏攻略/英雄传说 闪之轨迹/数据库/物品#^ruanmianmianshengqiaokelita]]"
---
```dataviewjs
const {Item} = dv.current();
dv.span(await dv.view('Food/InLine/Superb', { link: Item, options: { raw: true } }));
dv.span(await dv.view('Food/InLine/Regular', { link: Item, options: { raw: true } }));
dv.span(await dv.view('Food/InLine/Attack', { link: Item, options: { raw: true } }));
dv.span(await dv.view('Food/InLine/Peculiar', { link: Item, options: { raw: true } }));
dv.span(await dv.view('Food/InLine/Unique', { link: Item, options: { raw: true } }));
```