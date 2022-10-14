# Admonition 格式渲染 导力魔法
## 参数
- art
    ID **必须**, 魔法ID
    Name 可选, 魔法名称
    Element 可选, 魔法属性, 地/水/火/风/时/空/幻
    Type 可选, 魔法类型, 攻击/辅助/回复
    Range 可选, 魔法范围, 单体/全体/圆
    Effects 可选, 魔法附加效果
    Comment 可选, 魔法说明
- options
    collapse 可选, Admonition 折叠状态, "open"/"close"/"none", 默认值: "open"
    raw 是否返回渲染元素, true: 返回页面元素, false: 不返回, 直接渲染, 默认值: true