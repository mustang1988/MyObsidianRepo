---
Tests:
  Art:
    Admonition:
      ID: "yanshizhici"
    InLine: "[[游戏攻略/英雄传说 闪之轨迹/数据库/导力魔法#^yanshizhici]]"
  Item:
    Book:
      Admonition: 
        ID:  "diguoshibao1"
      InLine: "[[游戏攻略/英雄传说 闪之轨迹/数据库/书籍#^diguoshibao1]]"
    Fishing:
      Fish:
        InLine: "[[游戏攻略/英雄传说 闪之轨迹/数据库/钓鱼#^renyu]]"
      Rod:
        Admonition:
          ID: "xiaoqiaosheshou"
        InLine: "[[游戏攻略/英雄传说 闪之轨迹/数据库/鱼竿#^xiaoqiaosheshou]]"
    Food:
      Attack:
        Admonition:
          ID: "weixianrouwan"
        InLine: "[[游戏攻略/英雄传说 闪之轨迹/数据库/食物#^weixianrouwan]]"
      Ingredient:
        Admonition:
          ID: "fengmitangjiang"
        InLine: "[[游戏攻略/英雄传说 闪之轨迹/数据库/食材#^fengmitangjiang]]"
        Count:
          Link: "[[游戏攻略/英雄传说 闪之轨迹/数据库/食材#^fengmitangjiang]]"
      Peculiar:
        Admonition:
          ID: "yingbangbangdanbaofan"
        InLine: "[[游戏攻略/英雄传说 闪之轨迹/数据库/食物#^yingbangbangdanbaofan]]"
      Regular:
        Admonition:
          ID: "jiandandanbaofan"
        InLine: "[[游戏攻略/英雄传说 闪之轨迹/数据库/食物#^jiandandanbaofan]]"
      Superb:
        Admonition:
          ID: "pengsongnongchoudanbaofan"
        InLine: "[[游戏攻略/英雄传说 闪之轨迹/数据库/食物#^pengsongnongchoudanbaofan]]"
      Unique:
        Admonition:
          ID: "nuanhuhudanhuatang"
        InLine: "[[游戏攻略/英雄传说 闪之轨迹/数据库/食物#^nuanhuhudanhuatang]]"
    Potion:
      Admonition:
        ID: "huifuyao"
      InLine: "[[游戏攻略/英雄传说 闪之轨迹/数据库/消耗品#^huifuyao]]"
      Count:
        Link: "[[游戏攻略/英雄传说 闪之轨迹/数据库/消耗品#^huifuyao]]"
    Quartz:
      Regular:
        Admonition:
          ID: "jingangdun"
        InLine: "[[游戏攻略/英雄传说 闪之轨迹/数据库/结晶回路#^jingangdun]]"
        Count:
          Link: "[[游戏攻略/英雄传说 闪之轨迹/数据库/结晶回路#^yanshizhici]]"
    Sepith:
      Admonition:
        ID: "sepithearth"
      InLine: "[[游戏攻略/英雄传说 闪之轨迹/数据库/物品#^sepithmass]]"
      Count:
        Link: "[[游戏攻略/英雄传说 闪之轨迹/数据库/物品#^sepithspace]]"
        Count: 1
    UMaterial:
      Admonition:
        ID: "umaterial"
      InLine: "[[游戏攻略/英雄传说 闪之轨迹/数据库/物品#^umaterial]]"
      Count:
        Link: "[[游戏攻略/英雄传说 闪之轨迹/数据库/物品#^umaterial]]"
    Common:
      InLine:
      Count:
        Link: ""
  Page:
    Fish:
      ID: "renyu"
---
# 自定义view测试
## 导力魔法
### Admonition渲染
```dataviewjs
dv.header(4, "==默认参数(collapse=\"none\")==");
dv.span(await dv.view("Art/Admonition", { art: dv.current().Tests.Art.Admonition, options: { raw: true } }));

dv.header(4, "==设置可选参数(collapse=\"open\")==");
dv.span(await dv.view("Art/Admonition", { art: dv.current().Tests.Art.Admonition, options: { raw: true, collapse: "open" } }));

dv.header(4, "==(可选参数collapse=\"close\")==");
dv.span(await dv.view("Art/Admonition", { art: dv.current().Tests.Art.Admonition, options: { raw: true, collapse: "close" } }));
```

### 行内渲染
```dataviewjs
dv.header(4, "==默认参数(size=15)==");
dv.span(await dv.view('Art/InLine', { link: dv.current().Tests.Art.InLine, options: { raw: true } }));

dv.header(4, "==设置可选参数(size=30)==");
dv.span(await dv.view('Art/InLine', { link: dv.current().Tests.Art.InLine, options: { raw: true, size: 30 } }));
```

## 物品
### 书籍
#### Admonition渲染
```dataviewjs
dv.header(5, "==默认参数(collapse=\"none\", prefix=\"《\", suffix=\"》\")==");
dv.span(await dv.view('Item/Book/Admonition', { book: dv.current().Tests.Item.Book.Admonition, options: { raw: true } }));

dv.header(5, "==设置可选参数(collapse=\"open\")==");
dv.span(await dv.view('Item/Book/Admonition', { book: dv.current().Tests.Item.Book.Admonition, options: { raw: true, collapse: "open" } }));

dv.header(5, "==设置可选参数(collapse=\"close\")==");
dv.span(await dv.view('Item/Book/Admonition', { book: dv.current().Tests.Item.Book.Admonition, options: { raw: true, collapse: "close" } }));

dv.header(4, "==默认参数(prefix=\"〖\", suffix=\"〗\")==");
dv.span(await dv.view('Item/Book/Admonition', { book: dv.current().Tests.Item.Book.Admonition, options: { raw: true, prefix: "『", suffix: "』" } }));
```

#### 行内渲染
```dataviewjs
dv.header(5, "==默认参数(size=15, prefix=\"《\", suffix=\"》\")==");
dv.span(await dv.view("Item/Book/InLine", { link: dv.current().Tests.Item.Book.InLine, options: { raw: true } }));

dv.header(5, "==设置可选参数(size=30)==");
dv.span(await dv.view("Item/Book/InLine", { link: dv.current().Tests.Item.Book.InLine, options: { raw: true, size: 30 } }));

dv.header(5, "==设置可选参数(prefix=\"『\", suffix=\"』\")==");
dv.span(await dv.view("Item/Book/InLine", { link: dv.current().Tests.Item.Book.InLine, options: { raw: true, prefix: "『", suffix: "』" } }));
```

### 钓鱼
#### 鱼
#### InLine渲染
```dataviewjs
dv.header(5, "==默认参数(size=15, fish_size=\"s\", display_name=true)==");
dv.span(await dv.view("Item/Fishing/Fish/InLine", { link: dv.current().Tests.Item.Fishing.Fish.InLine, options: { raw: true } }));

dv.header(5, "==设置可选参数(size=30)==");
dv.span(await dv.view("Item/Fishing/Fish/InLine", { link: dv.current().Tests.Item.Fishing.Fish.InLine, options: { raw: true, size: 30 } }));

dv.header(5, "==设置可选参数(fish_size=\"m\")==");
dv.span(await dv.view("Item/Fishing/Fish/InLine", { link: dv.current().Tests.Item.Fishing.Fish.InLine, options: { raw: true, fish_size: "m" } }));

dv.header(5, "==设置可选参数(fish_size=\"l\")==");
dv.span(await dv.view("Item/Fishing/Fish/InLine", { link: dv.current().Tests.Item.Fishing.Fish.InLine, options: { raw: true, fish_size: "l" } }));

dv.header(5, "==设置可选参数(display_name=false)==");
dv.span(await dv.view("Item/Fishing/Fish/InLine", { link: dv.current().Tests.Item.Fishing.Fish.InLine, options: { raw: true, display_name: false } }));
```

#### 鱼竿
##### Admonition渲染
```dataviewjs
dv.header(6, "==默认参数(db=\"游戏攻略/英雄传说 闪之轨迹/数据库/鱼竿\")==");
dv.span(await dv.view('Item/Fishing/Rod/Admonition', { rod: dv.current().Tests.Item.Fishing.Rod.Admonition, options: { raw: true } }));
```
##### InLine渲染
```dataviewjs
dv.header(6, "==默认参数(size=15, display_name=true)==");
dv.span(await dv.view('Item/Fishing/Rod/InLine', { link: dv.current().Tests.Item.Fishing.Rod.InLine, options: { raw: true } }))

dv.header(6, "==设置可选参数(size=30)==");
dv.span(await dv.view('Item/Fishing/Rod/InLine', { link: dv.current().Tests.Item.Fishing.Rod.InLine, options: { raw: true, size: 30 } }));

dv.header(6, "==设置可选参数(display_name=false)==");
dv.span(await dv.view('Item/Fishing/Rod/InLine', { link: dv.current().Tests.Item.Fishing.Rod.InLine, options: { raw: true, display_name: false } }));
```

### 食物
#### 攻击食物
##### Admonition渲染
```dataviewjs
dv.header(6, "==默认参数(collapse=\"none\", db=\"游戏攻略/英雄传说 闪之轨迹/数据库/食物\")==");
dv.span(await dv.view("Item/Food/Attack/Admonition", { food: dv.current().Tests.Item.Food.Attack.Admonition, options: { raw: true } }));

dv.header(6, "==设置可选参数(collapse=\"open\")==");
dv.span(await dv.view("Item/Food/Attack/Admonition", { food: dv.current().Tests.Item.Food.Attack.Admonition, options: { raw: true, collapse: "open" } }));

dv.header(6, "==设置可选参数(collapse=\"close\")==");
dv.span(await dv.view("Item/Food/Attack/Admonition", { food: dv.current().Tests.Item.Food.Attack.Admonition, options: { raw: true, collapse: "close" } }));
```

##### 行内渲染
```dataviewjs
dv.header(6, "==默认参数(size=15, display_name=true)==");
dv.span(await dv.view("Item/Food/Attack/InLine", { link: dv.current().Tests.Item.Food.Attack.InLine, options: { raw: true } }));

dv.header(6, "==设置可选参数(size=30)==");
dv.span(await dv.view("Item/Food/Attack/InLine", { link: dv.current().Tests.Item.Food.Attack.InLine, options: { raw: true, size: 30 } }));

dv.header(6, "==设置可选参数(display_name=false)==");
dv.span(await dv.view("Item/Food/Attack/InLine", { link: dv.current().Tests.Item.Food.Attack.InLine, options: { raw: true, display_name: false } }));
```

#### 食材
##### Admonition渲染
```dataviewjs
dv.header(6, "==默认参数(db=\"游戏攻略/英雄传说 闪之轨迹/数据库/食材\")==");
dv.span(await dv.view("Item/Food/Ingredient/Admonition", { ingredient: dv.current().Tests.Item.Food.Ingredient.Admonition, options: { raw: true } }));
```

##### 行内渲染
```dataviewjs
dv.header(6, "==默认参数(size=15, display_name=true)==");
dv.span(await dv.view("Item/Food/Ingredient/InLine", { link: dv.current().Tests.Item.Food.Ingredient.InLine, options: { raw: true } }));

dv.header(6, "==设置可选参数(size=30)==");
dv.span(await dv.view("Item/Food/Ingredient/InLine", { link: dv.current().Tests.Item.Food.Ingredient.InLine, options: { raw: true, size: 30 } }));

dv.header(6, "==设置可选参数(display_name=false)==");
dv.span(await dv.view("Item/Food/Ingredient/InLine", { link: dv.current().Tests.Item.Food.Ingredient.InLine, options: { raw: true, display_name: false } }));
```

##### 带数量行内渲染
```dataviewjs
dv.header(6, "==默认参数(size=15, count=0, limit=0, display_name=true)==");
dv.span(await dv.view("Item/Food/Ingredient/Count", { link: dv.current().Tests.Item.Food.Ingredient.Count.Link, options: { raw: true } }));

dv.header(6, "==设置可选参数(size=30)==");
dv.span(await dv.view("Item/Food/Ingredient/Count", { link: dv.current().Tests.Item.Food.Ingredient.Count.Link, options: { raw: true, size: 30 } }));

dv.header(6, "==设置可选参数(count=10, limit=9)==");
dv.span(await dv.view("Item/Food/Ingredient/Count", { link: dv.current().Tests.Item.Food.Ingredient.Count.Link, options: { raw: true, size: 15, count: 10, limit: 9 } }));

dv.header(6, "==设置可选参数(count=10, limit=10)==");
dv.span(await dv.view("Item/Food/Ingredient/Count", { link: dv.current().Tests.Item.Food.Ingredient.Count.Link, options: { raw: true, size: 15, count: 10, limit: 10 } }));

dv.header(6, "==设置可选参数(display_name=false)==");
dv.span(await dv.view("Item/Food/Ingredient/Count", { link: dv.current().Tests.Item.Food.Ingredient.Count.Link, options: { raw: true, display_name: false } }));
```

#### 古怪食物
##### Admonition渲染
```dataviewjs
dv.header(6, "==默认参数(collapse=\"none\", db=\"游戏攻略/英雄传说 闪之轨迹/数据库/食物\")==");
dv.span(await dv.view("Item/Food/Peculiar/Admonition", { food: dv.current().Tests.Item.Food.Peculiar.Admonition, options: { raw: true } }));

dv.header(6, "==设置可选参数(collapse=\"open\")==");
dv.span(await dv.view("Item/Food/Peculiar/Admonition", { food: dv.current().Tests.Item.Food.Peculiar.Admonition, options: { raw: true, collapse: "open" } }));

dv.header(6, "==设置可选参数(collapse=\"close\")==");
dv.span(await dv.view("Item/Food/Peculiar/Admonition", { food: dv.current().Tests.Item.Food.Peculiar.Admonition, options: { raw: true, collapse: "close" } }));
```

##### 行内渲染
```dataviewjs
dv.header(6, "==默认参数(size=15, display_name=true)==");
dv.span(await dv.view("Item/Food/Peculiar/InLine", { link: dv.current().Tests.Item.Food.Peculiar.InLine, options: { raw: true } }));

dv.header(6, "==设置可选参数(size=30)==");
dv.span(await dv.view("Item/Food/Peculiar/InLine", { link: dv.current().Tests.Item.Food.Peculiar.InLine, options: { raw: true, size: 30 } }));

dv.header(6, "==设置可选参数(display_name=false)==");
dv.span(await dv.view("Item/Food/Peculiar/InLine", { link: dv.current().Tests.Item.Food.Peculiar.InLine, options: { raw: true, display_name: false } }));
```

#### 普通食物
##### Admonition渲染
```dataviewjs
dv.header(6, "==默认参数(collapse=\"none\", db=\"游戏攻略/英雄传说 闪之轨迹/数据库/食物\")==");
dv.span(await dv.view("Item/Food/Regular/Admonition", { food: dv.current().Tests.Item.Food.Regular.Admonition, options: { raw: true } }));

dv.header(6, "==设置可选参数(collapse=\"open\")==");
dv.span(await dv.view("Item/Food/Regular/Admonition", { food: dv.current().Tests.Item.Food.Regular.Admonition, options: { raw: true, collapse: "open" } }));

dv.header(6, "==设置可选参数(collapse=\"close\")==");
dv.span(await dv.view("Item/Food/Regular/Admonition", { food: dv.current().Tests.Item.Food.Regular.Admonition, options: { raw: true, collapse: "close" } }));
```

##### 行内渲染
```dataviewjs
dv.header(6, "==默认参数(size=15, display_name=true)==");
dv.span(await dv.view("Item/Food/Regular/InLine", { link: dv.current().Tests.Item.Food.Regular.InLine, options: { raw: true } }));

dv.header(6, "==设置可选参数(size=30)==");
dv.span(await dv.view("Item/Food/Regular/InLine", { link: dv.current().Tests.Item.Food.Regular.InLine, options: { raw: true, size: 30 } }));

dv.header(6, "==设置可选参数(display_name=false)==");
dv.span(await dv.view("Item/Food/Regular/InLine", { link: dv.current().Tests.Item.Food.Regular.InLine, options: { raw: true, display_name: false } }));
```

#### 极品食物
##### Admonition渲染
```dataviewjs
dv.header(6, "==默认参数(collapse=\"none\", db=\"游戏攻略/英雄传说 闪之轨迹/数据库/食物\")==");
dv.span(await dv.view("Item/Food/Superb/Admonition", { food: dv.current().Tests.Item.Food.Superb.Admonition, options: { raw: true } }));

dv.header(6, "==设置可选参数(collapse=\"open\")==");
dv.span(await dv.view("Item/Food/Superb/Admonition", { food: dv.current().Tests.Item.Food.Superb.Admonition, options: { raw: true, collapse: "open" } }));

dv.header(6, "==设置可选参数(collapse=\"close\")==");
dv.span(await dv.view("Item/Food/Superb/Admonition", { food: dv.current().Tests.Item.Food.Superb.Admonition, options: { raw: true, collapse: "close" } }));
```

##### 行内渲染
```dataviewjs
dv.header(6, "==默认参数(size=15, display_name=true)==");
dv.span(await dv.view("Item/Food/Superb/InLine", { link: dv.current().Tests.Item.Food.Superb.InLine, options: { raw: true } }));

dv.header(6, "==设置可选参数(size=30)==");
dv.span(await dv.view("Item/Food/Superb/InLine", { link: dv.current().Tests.Item.Food.Superb.InLine, options: { raw: true, size: 30 } }));

dv.header(6, "==设置可选参数(display_name=false)==");
dv.span(await dv.view("Item/Food/Superb/InLine", { link: dv.current().Tests.Item.Food.Superb.InLine, options: { raw: true, display_name: false } }));
```

#### 独门食物
##### Admonition渲染
```dataviewjs
dv.header(6, "==默认参数(collapse=\"none\", db=\"游戏攻略/英雄传说 闪之轨迹/数据库/食物\")==");
dv.span(await dv.view("Item/Food/Unique/Admonition", { food: dv.current().Tests.Item.Food.Unique.Admonition, options: { raw: true } }));

dv.header(6, "==设置可选参数(collapse=\"open\")==");
dv.span(await dv.view("Item/Food/Unique/Admonition", { food: dv.current().Tests.Item.Food.Unique.Admonition, options: { raw: true, collapse: "open" } }));

dv.header(6, "==设置可选参数(collapse=\"close\")==");
dv.span(await dv.view("Item/Food/Unique/Admonition", { food: dv.current().Tests.Item.Food.Unique.Admonition, options: { raw: true, collapse: "close" } }));
```

##### 行内渲染
```dataviewjs
dv.header(6, "==默认参数(size=15, display_name=true)==");
dv.span(await dv.view("Item/Food/Unique/InLine", { link: dv.current().Tests.Item.Food.Unique.InLine, options: { raw: true } }));

dv.header(6, "==设置可选参数(size=30)==");
dv.span(await dv.view("Item/Food/Unique/InLine", { link: dv.current().Tests.Item.Food.Unique.InLine, options: { raw: true, size: 30 } }));

dv.header(6, "==设置可选参数(display_name=false)==");
dv.span(await dv.view("Item/Food/Unique/InLine", { link: dv.current().Tests.Item.Food.Unique.InLine, options: { raw: true, display_name: false } }));
```

### 消耗品
#### Admonition渲染
```dataviewjs
dv.header(5, "==默认参数(collapse=\"none\", db=\"游戏攻略/英雄传说 闪之轨迹/数据库/消耗品\")==");
dv.span(await dv.view("Item/Potion/Admonition", { potion: dv.current().Tests.Item.Potion.Admonition, options: { raw: true } }));

dv.header(5, "==默认参数(collapse=\"open\")==");
dv.span(await dv.view("Item/Potion/Admonition", { potion: dv.current().Tests.Item.Potion.Admonition, options: { raw: true, collapse: "open" } }));

dv.header(5, "==默认参数(collapse=\"close\")==");
dv.span(await dv.view("Item/Potion/Admonition", { potion: dv.current().Tests.Item.Potion.Admonition, options: { raw: true, collapse: "close" } }));
```

#### 行内渲染
```dataviewjs
dv.header(5, "==默认参数(size=15, display_name=true)==");
dv.span(await dv.view("Item/Potion/InLine", { link: dv.current().Tests.Item.Potion.InLine, options: { raw: true } }));

dv.header(5, "==设置可选参数(size=30)==");
dv.span(await dv.view("Item/Potion/InLine", { link: dv.current().Tests.Item.Potion.InLine, options: { raw: true, size: 30 } }));

dv.header(5, "==设置可选参数(display_name=false)==");
dv.span(await dv.view("Item/Potion/InLine", { link: dv.current().Tests.Item.Potion.InLine, options: { raw: true, display_name: false } }));
```

#### 带数量行内渲染
```dataviewjs
dv.header(5, "==默认参数(size=15, count=0, limit=0, display_name=true)==");
dv.span(await dv.view("Item/Potion/Count", { link: dv.current().Tests.Item.Potion.InLine, options: { raw: true } }));

dv.header(5, "==设置可选参数(size=30)==");
dv.span(await dv.view("Item/Potion/Count", { link: dv.current().Tests.Item.Potion.InLine, options: { raw: true, size: 30 } }));

dv.header(5, "==设置可选参数(size=15, count=10, limit=9)==");
dv.span(await dv.view("Item/Potion/Count", { link: dv.current().Tests.Item.Potion.InLine, options: { raw: true, count: 10, limit: 9 } }));

dv.header(5, "==设置可选参数(size=15, count=10, limit=11)==");
dv.span(await dv.view("Item/Potion/Count", { link: dv.current().Tests.Item.Potion.InLine, options: { raw: true, count: 10, limit: 11 } }));

dv.header(5, "==设置可选参数(display_name=false)==");
dv.span(await dv.view("Item/Potion/Count", { link: dv.current().Tests.Item.Potion.InLine, options: { raw: true, display_name: false } }));
```

### 结晶回路
#### 普通回路
##### Admonition渲染
```dataviewjs
dv.header(6, "==默认参数(collapse=\"none\", db=\"游戏攻略/英雄传说 闪之轨迹/数据库/结晶回路\")==");
dv.span(await dv.view("Item/Quartz/Regular/Admonition", { quartz: dv.current().Tests.Item.Quartz.Regular.Admonition, options: { raw: true } }));

dv.header(6, "==设置可选参数(collapse=\"open\")==");
dv.span(await dv.view("Item/Quartz/Regular/Admonition", { quartz: dv.current().Tests.Item.Quartz.Regular.Admonition, options: { raw: true, collapse: "open" } }));

dv.header(6, "==设置可选参数(collapse=\"cloese\")==");
dv.span(await dv.view("Item/Quartz/Regular/Admonition", { quartz: dv.current().Tests.Item.Quartz.Regular.Admonition, options: { raw: true, collapse: "cloese" } }));
```

##### 行内渲染
```dataviewjs
dv.header(6, "==默认参数(size=15, display_name=true)==");
dv.span(await dv.view("Item/Quartz/Regular/InLine", { link: dv.current().Tests.Item.Quartz.Regular.InLine, options: { raw: true } }));

dv.header(6, "==设置可选参数(size=30)==");
dv.span(await dv.view("Item/Quartz/Regular/InLine", { link: dv.current().Tests.Item.Quartz.Regular.InLine, options: { raw: true, size: 30 } }));

dv.header(6, "==设置可选参数(display_name=false)==");
dv.span(await dv.view("Item/Quartz/Regular/InLine", { link: dv.current().Tests.Item.Quartz.Regular.InLine, options: { raw: true, display_name: false } }));
```

##### 带数量行内渲染
```dataviewjs
dv.header(6, "==默认参数(size=15, count=0, limit=0, display_name=true)==");
dv.span(await dv.view("Item/Quartz/Regular/Count", { link: dv.current().Tests.Item.Quartz.Regular.Count.Link, options: { raw: true } }));

dv.header(6, "==设置可选参数(size=30)==");
dv.span(await dv.view("Item/Quartz/Regular/Count", { link: dv.current().Tests.Item.Quartz.Regular.Count.Link, options: { raw: true, size: 30} }));

dv.header(6, "==设置可选参数(count=10, limit=9)==");
dv.span(await dv.view("Item/Quartz/Regular/Count", { link: dv.current().Tests.Item.Quartz.Regular.Count.Link, options: { raw: true, size: 15, count: 10, limit: 9 } }));

dv.header(6, "==设置可选参数(size=15, count=10, limit=11)==");
dv.span(await dv.view("Item/Quartz/Regular/Count", { link: dv.current().Tests.Item.Quartz.Regular.Count.Link, options: { raw: true, size: 15, count: 10, limit: 11 } }));

dv.header(6, "==设置可选参数(display_name=false)==");
dv.span(await dv.view("Item/Quartz/Regular/Count", { link: dv.current().Tests.Item.Quartz.Regular.Count.Link, options: { raw: true, display_name: false} }));
```

### 耀晶片
#### Admonition渲染
```dataviewjs
dv.header(5, "==默认参数(db=\"游戏攻略/英雄传说 闪之轨迹/数据库/物品\")==");
dv.span(await dv.view("Item/Sepith/Admonition",{ sepith: dv.current().Tests.Item.Sepith.Admonition, options: { raw: true } }));
```

#### 行内渲染
```dataviewjs
dv.header(5, "==默认参数(size=15,display_name=true)==");
dv.span(await dv.view("Item/Sepith/InLine", { link: dv.current().Tests.Item.Sepith.InLine, options: { raw: true } }))

dv.header(5, "==设置可选参数(size=30)==");
dv.span(await dv.view("Item/Sepith/InLine", { link: dv.current().Tests.Item.Sepith.InLine, options: { raw: true, size: 30 } }))

dv.header(5, "==设置可选参数(size=15,display_name=false)==");
dv.span(await dv.view("Item/Sepith/InLine", { link: dv.current().Tests.Item.Sepith.InLine, options: { raw: true, display_name: false } }))
```

#### 带数量行内渲染
```dataviewjs
dv.header(5, "==默认参数(size=15, display_name=true, count=0, limit=0)==");
dv.span(await dv.view("Item/Sepith/Count", { link: dv.current().Tests.Item.Sepith.Count.Link, options: { raw: true } }))

dv.header(5, "==设置可选参数(size=30)==");
dv.span(await dv.view("Item/Sepith/Count", { link: dv.current().Tests.Item.Sepith.Count.Link, options: { raw: true, size: 30 } }))


dv.header(5, "==设置可选参数(display_name=false)==");
dv.span(await dv.view("Item/Sepith/Count", { link: dv.current().Tests.Item.Sepith.Count.Link, options: { raw: true, display_name: false} }))

dv.header(5, "==设置可选参数(count=100, limit=99)==");
dv.span(await dv.view("Item/Sepith/Count", { link: dv.current().Tests.Item.Sepith.Count.Link, options: { raw: true, count: 100, limit: 99 } }))

dv.header(5, "==设置可选参数(count=100, limit=100)==");
dv.span(await dv.view("Item/Sepith/Count", { link: dv.current().Tests.Item.Sepith.Count.Link, options: { raw: true, count: 100 , limit: 100 } }))

```

### U物质
#### Admonition渲染
```dataviewjs
dv.header(5, "==默认参数(db=\"游戏攻略/英雄传说 闪之轨迹/数据库/物品\")==");
dv.span(await dv.view("Item/UMaterial/Admonition",{ item: dv.current().Tests.Item.UMaterial.Admonition, options: { raw: true } }));
```

#### 行内渲染
```dataviewjs
dv.header(5, "==默认参数(size=15,display_name=false)==");
dv.span(await dv.view("Item/UMaterial/InLine", { link: dv.current().Tests.Item.UMaterial.InLine, options: { raw: true } }))

dv.header(5, "==设置可选参数(size=30)==");
dv.span(await dv.view("Item/UMaterial/InLine", { link: dv.current().Tests.Item.UMaterial.InLine, options: { raw: true, size: 30 } }))

dv.header(5, "==设置可选参数(display_name=true)==");
dv.span(await dv.view("Item/UMaterial/InLine", { link: dv.current().Tests.Item.UMaterial.InLine, options: { raw: true, display_name: true } }))
```

#### 带数量行内渲染
```dataviewjs
dv.header(5, "==默认参数(size=15, display_name=true, count=0, limit=0)==");
dv.span(await dv.view("Item/UMaterial/Count", { link: dv.current().Tests.Item.UMaterial.Count.Link, options: { raw: true } }))

dv.header(5, "==设置可选参数(size=30)==");
dv.span(await dv.view("Item/UMaterial/Count", { link: dv.current().Tests.Item.UMaterial.Count.Link, options: { raw: true, size: 30 } }))


dv.header(5, "==设置可选参数(display_name=false)==");
dv.span(await dv.view("Item/UMaterial/Count", { link: dv.current().Tests.Item.UMaterial.Count.Link, options: { raw: true, display_name: false} }))

dv.header(5, "==设置可选参数(count=100, limit=99)==");
dv.span(await dv.view("Item/UMaterial/Count", { link: dv.current().Tests.Item.UMaterial.Count.Link, options: { raw: true, count: 100, limit: 99 } }))

dv.header(5, "==设置可选参数(count=100, limit=100)==");
dv.span(await dv.view("Item/UMaterial/Count", { link: dv.current().Tests.Item.UMaterial.Count.Link, options: { raw: true, count: 100 , limit: 100 } }))
```

## 页面
### 钓鱼笔记
```dataviewjs
dv.span(await dv.view("Page/Fish", { fish: dv.current().Tests.Page.Fish, options: { raw: true } }));
```