---
banner: "![[图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/cover.png]]"
Icon: "![[图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/icon.png|50]]"
No: 9
NPWR: "NPWR15646_00"
Developers: ["Falcom"]
Publishers: ["Falcom", "云豹娱乐", "SIE"]
Producers: [] 
Release: "2018/09/27"
Abstract: ""
---
# 英雄传说 闪之轨迹IV

```ad-quote
title: 奖杯
icon: trophy
collapse: close

~~~dataviewjs
const order = ["白金","金", "银", "铜"]
dv.table(
	["","奖杯","说明"],
	dv.pages('#英雄传说/闪之轨迹IV/奖杯 and -"模板"')
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

#英雄传说/闪之轨迹IV #角色扮演 #回合制 #英雄传说系列 #游戏首页 #日式RPG