---
banner: "![[图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/cover.png]]"
banner_y: 0.72088
Icon: "![[图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/icon.png|50]]"
No: 7
NPWR: "NPWR06494_00"
Developers: ["Falcom"]
Publishers: ["Falcom", "云豹娱乐", "SIE"]
Producers: [] 
Release: "2018/04/26"
---
# 英雄传说 闪之轨迹II


```ad-quote
title: 奖杯
icon: trophy
collapse: close

~~~dataviewjs
const order = ["白金","金", "银", "铜"]
dv.table(
	["","奖杯","说明"],
	dv.pages('#英雄传说/闪之轨迹II/奖杯 and -"模板"')
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

#英雄传说/闪之轨迹II #角色扮演 #回合制 #英雄传说系列 #游戏首页 #日式RPG