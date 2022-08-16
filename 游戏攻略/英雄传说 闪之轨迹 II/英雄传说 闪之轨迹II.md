---
banner: "![[图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/cover.png]]"
banner_y: 0.72088
Icon: "![[图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/icon.png|50]]"
No: 7
NPWR: "NPWR06494_00"
Developers: 
  - "Falcom"
Publishers: 
  - "Falcom"
  - "云豹娱乐"
  - "SIE"
Producers:  
Release: "2018/04/26"
Abstract: "内战爆发! 命运转动的第２章. 《贵族联盟》藉由《铁血宰相》的暗杀事件, 趁机掌控了帝都, 侵略包括《军官学校》在内的各处要地. 最终与正规军爆发内战. 另一方面, 败给《苍之骑神》而脱离战线的黎恩, 在山岳地带醒来..."
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

#英雄传说/闪之轨迹II #角色扮演 #回合制 #系列/英雄传说 #游戏首页 #日式RPG