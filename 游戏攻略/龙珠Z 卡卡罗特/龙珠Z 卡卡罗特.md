---
banner: "![[图片/游戏攻略/龙珠Z/卡卡罗特/cover.png]]"
banner_y: 0.22691
Icon: "![[图片/游戏攻略/龙珠Z/卡卡罗特/icon.png|50]]"
No: 1
NPWR: "NPWR17396_00"
Developers: ["CyberConnect2"]
Publishers: ["Bandai Namco Entertainment"]
Producers: [] 
Release: "2020/01/16"
Abstract: ""
---
# 龙珠Z 卡卡罗特

```ad-quote
title: 奖杯
icon: trophy
collapse: close

~~~dataviewjs
const order = ["白金","金", "银", "铜"]
dv.table(
	["","奖杯","说明"],
	dv.pages('#龙珠Z/卡卡罗特/奖杯 and -"模板"')
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

#龙珠Z系列 #龙珠Z/卡卡罗特 #游戏首页 