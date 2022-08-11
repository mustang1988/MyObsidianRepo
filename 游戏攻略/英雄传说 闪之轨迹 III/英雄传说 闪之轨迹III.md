---
banner: "![[图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/cover.png]]"
Icon: "![[图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/icon.png|50]]"
No: 8
NPWR: "NPWR13854_00"
Developers: ["Falcom"]
Publishers: ["Falcom", "云豹娱乐", "SIE"]
Producers: [] 
Release: "2017/09/28"
Abstract: "七耀历1206年──随着内战结束, 巨大军事国家埃雷波尼亚帝国迎向了全新时代的转折点. 青年黎恩・舒华泽因《灰色骑士》的身分在国内被视为英雄, 以他为中心的年轻英雄们一段崭新故事就此揭开序幕---托尔兹军官学院利弗斯第II分校. 与总校形成对比, 是专门招收有隐情的贵族子女、问题学生、外国人等等的『后段班』分校. 而在分成的3个班级当中, 由黎恩担任级任教官的小规模特务班级就是──VII班《特务科》."
---
# 英雄传说 闪之轨迹III

```ad-quote
title: 奖杯
icon: trophy
collapse: close

~~~dataviewjs
const order = ["白金","金", "银", "铜"]
dv.table(
	["","奖杯","说明"],
	dv.pages('#英雄传说/闪之轨迹III/奖杯 and -"模板"')
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

#英雄传说/闪之轨迹III #角色扮演 #回合制 #系列/英雄传说 #游戏首页 #日式RPG