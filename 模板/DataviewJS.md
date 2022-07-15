## 奖杯列表

```js
dv.table(
	["<奖杯图标>","奖杯","说明"], 
	dv.pages('"游戏攻略/<游戏名>/奖杯"')
		.sort(trophy => trophy.Order, 'asc') // 按奖杯数据的Order升序
		.map(trophy => [trophy.Icon, trophy.file.link, trophy.Comment])
);
```