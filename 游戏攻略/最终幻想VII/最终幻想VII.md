---
banner: "![[图片/游戏攻略/最终幻想/最终幻想VII/cover.png]]"
banner_y: 0.23896
Icon: "![[图片/游戏攻略/最终幻想/最终幻想VII/icon.png|50]]"
No: 7
NPWR: "NPWR18853_00"
Developers: ["Square Enix"]
Publishers: ["Square Enix"]
Producers: [] 
Release: "2020/04/10"
Abstract: ""
---
# 最终幻想VII

```ad-quote
title: 奖杯
icon: trophy
collapse: close

~~~dataviewjs
const order = ["白金","金", "银", "铜"]
dv.table(
	["","奖杯","说明"],
	dv.pages('#最终幻想/最终幻想VII/奖杯 and -"模板"')
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

#游戏首页 #最终幻想系列 #最终幻想/最终幻想VII #TGA/2020/年度游戏奖/提名 #TGA/2020/最佳美术指导奖/提名 #TGA/2020/最佳游戏指导奖/提名 #TGA/2020/最佳原声音乐奖/获奖 #TGA/2020/最佳游戏叙事奖/提名 #TGA/2020/最佳角色扮演游戏奖/获奖 #日式RPG