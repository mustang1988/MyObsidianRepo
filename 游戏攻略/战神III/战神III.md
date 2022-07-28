---
banner: "![[图片/游戏攻略/战神/战神3/cover.png]]"
Icon: "![[图片/游戏攻略/战神/战神3/icon.jpg|50]]"
No: 3
NPWR: "NPWR08268_00"
---
# 战神III

```ad-quote
title: 奖杯
icon: trophy
collapse: close

~~~dataviewjs
const order = ["白金","金", "银", "铜"]
dv.table(
	["","奖杯","说明"],
	dv.pages('#战神/战神III/奖杯 and -"模板"')
	.map(trophy => {
		const [tTag] = trophy.file.etags.filter(tag => tag.startsWith('#奖杯') && tag .includes("/"));
		const [, type] = tTag.split('/')
		trophy.Type = type;
		return trophy;
	})
	.sort(trophy => order.indexOf(trophy.Type), 'asc')
	.map(trophy => 
		[trophy.Icon, trophy.file.link, trophy.Comment]
	)
);
~~~

```

#战神系列 #战神/战神III #游戏首页 #PlayStation独占 