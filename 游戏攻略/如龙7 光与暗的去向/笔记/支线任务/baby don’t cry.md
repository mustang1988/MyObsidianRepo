---
No: "07"
Title: "baby don’t cry"
Chapter: "第四章"
Time: "白天"
Position: "横滨大滨大街"
Steps:
  - "首先去任务地点触发任务"
  - "选择: 帮忙, 跟妻子面对面聊聊"
  - "之后前往伊势佐木大道北侧的口袋咖啡厅触发剧情借水"
  - "再回去横滨大滨大街触发剧情, 最后选择: 喝牛奶"
Finishi: false
---
````ad-question
title: baby don’t cry
collapse: open

章节: `$=dv.current().Chapter;`

时间: `$=dv.current().Time;`

地点: `$=dv.current().Position;`

```ad-abstract
title: 完成步骤
`$=dv.list(dv.current().Steps);`
```
````

#如龙/如龙7/笔记/任务 