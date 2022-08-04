---
banner: "![[图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/cover.png]]"
Icon: "![[图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/icon.png|50]]"
No: 9
NPWR: "NPWR15646_00"
Developers: ["Falcom"]
Publishers: ["Falcom", "云豹娱乐", "SIE"]
Producers: [] 
Release: "2018/09/27"
Abstract: "《巨硕黄昏》使得『诅咒』在埃雷波尼亚帝国中扩散开. 与卡尔瓦德共和国之间的大战即将爆发, 此时新旧《VII班》将如何采取行动呢? 而遭到失控的鬼之力吞没, 甚至失去了自我的《灰色骑士》黎恩又将面临什么样的命运?"
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