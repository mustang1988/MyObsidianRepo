```dataviewjs
const db = "游戏攻略/英雄传说 闪之轨迹/数据库/食谱";
let { Recipes } = dv.page(db)
Recipes = Recipes.sort((r1, r2) => r1.ID-r2.ID);
const GetItem = (itemLink) => {
  const {
    Name: { path, subpath },
    Cook = null,
    Num = null,
    Attack,
  } = itemLink;
  const [item = null] = dv.page(path).Items.filter((i) => i.ID === subpath);
  if (item !== null) {
    item.path = path;
    item.Cook = Cook;
    item.Num = Num;
    item.Attack = Attack;
  }
  return item;
};

const items = await Promise.all(Recipes.map(recipe => {
  let { Regular, Peculiar, Superb, Unique } = recipe;
  const RegularObj = GetItem(Regular);
  const PeculiarObj = GetItem(Peculiar);
  const SuperbObj = GetItem(Superb);
  const UniqueObj = GetItem(Unique);
  const list = [];
  list.push(dv.view('InLine/Food/Food', { food: Superb, type:'superb', options: { raw: true, size: 15 } }));
  list.push(dv.view('InLine/Food/Food', { food: Regular, type:'regular', options: { raw: true, size: 15 } }));
  if(PeculiarObj.Attack === true) {
    list.push(dv.view('InLine/Food/Food', { food: Peculiar, type:'attack', options: { raw: true, size: 15 } }));
  } else {
    list.push(dv.view('InLine/Food/Food', { food: Peculiar, type:'peculiar', options: { raw: true, size: 15 } }));
  }
  list.push(dv.view('InLine/Food/Food', { food: Unique, type:'unique', options: { raw: true, size: 15 } }));
  return Promise.all(list);
}));

const data = Recipes.map((recipe, index) => [
  dv.blockLink(db, `recipe-id-${recipe.ID}`, false, recipe.Name),
  recipe.Time,
  recipe.How,
  items[index]
]);
dv.table(
  ["", "获取章节", "获取方式", "获得物品"],
  data
);
```
