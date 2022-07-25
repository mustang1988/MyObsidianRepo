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
	.sort(trophy => order.indexOf(trophy.Type), 'asc')
	.map(trophy => 
		[trophy.Icon, trophy.file.link, trophy.Comment]
	)
);
~~~
```

#英雄传说/闪之轨迹IV #角色扮演 #回合制 