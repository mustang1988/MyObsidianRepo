---
Tests:
  Art:
    Admonition:
      Name: "岩石之刺"
      ID: "yanshizhici"
      Element: "Earth"
      Type: "攻击"
      Range: "单体"
      Effects:
        - "石化(20%)"
      Comment: "射出尖锐的岩石. 有20%几率造成「石化」"
    InLine: "[[游戏攻略/英雄传说 闪之轨迹/数据库/导力魔法#^yanshizhici]]"
  Item:
    Book:
      Admonition: 
      InLine: ""
    Fishing:
      Fish:
        Admonition:
        InLine: ""
      Rod:
        Admonition:
        InLine: ""
    Food:
      Attack:
        Admonition:
        InLine: ""
      Ingredient:
        Admonition:
        InLine: ""
        Count:
          Link: ""
          Count: 1
      Peculiar:
        Admonition:
        InLine: ""
      Regular:
        Admonition:
        InLine: ""
      Unique:
        Admonition:
        InLine: ""
    Potion:
      Admonition:
      InLine: ""
      Count:
        Link: ""
        Count: 1
    Quartz:
      Regular:
        Admonition:
        InLine: ""
    Sepith:
      Admonition: ""
      InLine: ""
      Count:
        Link: ""
        Count: 1
    UMaterial:
      Admonition:
      InLine: ""
      Count:
        Link: ""
        Count: 1
    Common:
      InLine: ""
      Count:
        Link: ""
        Count: 1
  Page:
    Fish:
---
# 自定义view测试
`$=console.log(dv.current());`
## 导力魔法
### Admonition渲染
```dataviewjs
dv.header(4, "==默认参数==(collapse=\"open\")");
dv.span(await dv.view("Art/Admonition", { art: dv.current().Tests.Art.Admonition, options: { raw: true } }));
dv.header(4, "==可选参数collapse=\"open\"==");
dv.span(await dv.view("Art/Admonition", { art: dv.current().Tests.Art.Admonition, options: { raw: true, collapse: "open" } }));
dv.header(4, "==可选参数collapse=\"close\"==");
dv.span(await dv.view("Art/Admonition", { art: dv.current().Tests.Art.Admonition, options: { raw: true, collapse: "close" } }));
dv.header(4, "==可选参数collapse=\"none\"==");
dv.span(await dv.view("Art/Admonition", { art: dv.current().Tests.Art.Admonition, options: { raw: true, collapse: "none" } }));
```

### 行内渲染
```dataviewjs
dv.header(4, "==默认参数==(size=15)");
dv.span(await dv.view('Art/InLine', { link: dv.current().Tests.Art.InLine, options: { raw: true } }));
dv.header(4, "==可选参数==(size=30)");
dv.span(await dv.view('Art/InLine', { link: dv.current().Tests.Art.InLine, options: { raw: true, size: 30 } }));
```

## 物品
### 书籍
#### Admonition渲染
```dataviewjs
```

#### 行内渲染
```dataviewjs
```

### 钓鱼
#### 鱼
```dataviewjs
```

#### 鱼竿
```dataviewjs
```

### 食物
#### 攻击食物
##### Admonition渲染
```dataviewjs
```

##### 行内渲染
```dataviewjs
```

#### 食材
##### Admonition渲染
```dataviewjs
```

##### 行内渲染
```dataviewjs
```

##### 带数量行内渲染
```dataviewjs
```

#### 古怪食物
##### Admonition渲染
```dataviewjs
```

##### 行内渲染
```dataviewjs
```

#### 普通食物
##### Admonition渲染
```dataviewjs
```

##### 行内渲染
```dataviewjs
```

#### 极品食物
##### Admonition渲染
```dataviewjs
```

##### 行内渲染
```dataviewjs
```

#### 独门食物
##### Admonition渲染
```dataviewjs
```

##### 行内渲染
```dataviewjs
```

### 消耗品
#### Admonition渲染
```dataviewjs
```

#### 行内渲染
```dataviewjs
```

#### 带数量行内渲染
```dataviewjs
```

### 结晶回路
#### 普通回路
##### Admonition渲染
```dataviewjs
```

##### 行内渲染
```dataviewjs
```

### 耀晶片
#### Admonition渲染
```dataviewjs
```

#### 行内渲染
```dataviewjs
```

#### 带数量行内渲染
```dataviewjs
```

### U物质
#### Admonition渲染
```dataviewjs
```

#### 行内渲染
```dataviewjs
```

#### 带数量行内渲染
```dataviewjs
```

### 通用
#### 行内渲染
```dataviewjs
```

#### 带数量行内渲染
```dataviewjs
```

## 页面
### 钓鱼笔记
```dataviewjs
```