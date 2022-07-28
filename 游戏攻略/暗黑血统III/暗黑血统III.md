---
banner: "![[图片/游戏攻略/暗黑血统/暗黑血统III/cover.png]]"
banner_y: 0.11446
Icon: "![[图片/游戏攻略/暗黑血统/暗黑血统III/icon.png|50]]"
No: 3
NPWR: ""
---
# 暗黑血统III

````ad-quote
title: 奖杯
icon: trophy
collapse: close

```ad-quote
title: 奖杯
icon: trophy
collapse: open

~~~dataviewjs
const order = ["白金","金", "银", "铜"]
dv.table(
	["","奖杯","说明"],
	dv.pages('#暗黑血统/暗黑血统III/奖杯 and -#暗黑血统/暗黑血统/奖杯/DLC and -"模板"')
	.map(trophy => {
		const [tTag] = trophy.file.etags.filter(tag => tag.startsWith('#奖杯') && tag .includes("/"));
		const [, type] = tTag.split('/')
		trophy.Type = type;
		return trophy;
	})
	.sort(trophy => [order.indexOf(trophy.Type), trophy.file.name], 'asc')
	.map(trophy => 
		[trophy.Icon, trophy.file.link, trophy.Comment]
	)
);
~~~
```

```ad-quote
title: DLC1 The Crucible
icon: trophy
collapse: open

~~~dataviewjs
const order = ["白金","金", "银", "铜"]
dv.table(
	["","奖杯","说明"],
	dv.pages('#暗黑血统/暗黑血统III/奖杯/DLC/TheCrucible and -"模板"')
	.map(trophy => {
		const [tTag] = trophy.file.etags.filter(tag => tag.startsWith('#奖杯') && tag .includes("/"));
		const [, type] = tTag.split('/')
		trophy.Type = type;
		return trophy;
	})
	.sort(trophy => [order.indexOf(trophy.Type), trophy.file.name], 'asc')
	.map(trophy => 
		[trophy.Icon, trophy.file.link, trophy.Comment]
	)
);
~~~
```

```ad-quote
title: DLC2 New Game Plus
icon: trophy
collapse: open

~~~dataviewjs
const order = ["白金","金", "银", "铜"]
dv.table(
	["","奖杯","说明"],
	dv.pages('#暗黑血统/暗黑血统III/奖杯/DLC/NewGamePlus and -"模板"')
	.map(trophy => {
		const [tTag] = trophy.file.etags.filter(tag => tag.startsWith('#奖杯') && tag .includes("/"));
		const [, type] = tTag.split('/')
		trophy.Type = type;
		return trophy;
	})
	.sort(trophy => [order.indexOf(trophy.Type), trophy.file.name], 'asc')
	.map(trophy => 
		[trophy.Icon, trophy.file.link, trophy.Comment]
	)
);
~~~
```

```ad-quote
title: DLC3 Keepers of the Void
icon: trophy
collapse: open

~~~dataviewjs
const order = ["白金","金", "银", "铜"]
dv.table(
	["","奖杯","说明"],
	dv.pages('#暗黑血统/暗黑血统III/奖杯/DLC/KeepersoftheVoid and -"模板"')
	.map(trophy => {
		const [tTag] = trophy.file.etags.filter(tag => tag.startsWith('#奖杯') && tag .includes("/"));
		const [, type] = tTag.split('/')
		trophy.Type = type;
		return trophy;
	})
	.sort(trophy => [order.indexOf(trophy.Type), trophy.file.name], 'asc')
	.map(trophy => 
		[trophy.Icon, trophy.file.link, trophy.Comment]
	)
);
~~~
```
````

#暗黑血统系列 #暗黑血统/暗黑血统III #游戏首页 #魂Like 