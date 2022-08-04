---
banner: "![[图片/游戏攻略/东京幻都 eX+/cover.jpg]]"
Icon: "![[图片/游戏攻略/东京幻都 eX+/icon.png|50]]"
No: 2
NPWR: "NPWR10914_00"
Developers: ["Falcom"]
Publishers: ["Falcom"]
Producers: [] 
Release: "2017/03/30"
Abstract: ""
---
# 东京幻都 eX+

```ad-quote
title: 奖杯
icon: trophy
collapse: close

~~~dataviewjs
const order = ["白金","金", "银", "铜"]
dv.table(
	["","奖杯","说明"],
	dv.pages('#东京幻都/奖杯 and -"模板"')
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

#东京幻都 #迷城的国度系列 #游戏首页 #日式RPG