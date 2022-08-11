---
banner: "![[图片/游戏攻略/战神/战神3/cover.png]]"
Icon: "![[图片/游戏攻略/战神/战神3/icon.jpg|50]]"
No: 3
NPWR: "NPWR08268_00"
Developers: ["Santa Monica Studio"]
Publishers: ["SIE"]
Producers: ["Steve Caterson"] 
Release: "2010/03/16"
Abstract: "故事以暴力血腥的希腊神话世界为舞台, 玩家将化身为勇不可挡的前斯巴达战士克雷多斯, 从地狱的深渊攀至奥林匹斯山的山顶, 誓要向背叛者展开复仇, 以血洗血. 手持致命的锁链双剑, 克雷多斯将迎战神话中最险恶的怪物, 同时解开复杂的机关, 彻底摧毁奥林匹斯."
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

#系列/战神 #战神/战神III #游戏首页 #PlayStation独占 