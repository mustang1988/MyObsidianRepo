/**
 * 
 */
// ===== Constrains =====
const DEBUG = true;
const DEFAULT_OPTIONS = {
    db: "游戏攻略/英雄传说 闪之轨迹/数据库/食谱",
    raw: true,
};

// ===== Functions =====
const MergeOptons = (options) => Object.assign(DEFAULT_OPTIONS, options);
const GetIngredientTable = async(ingredients, options) => {
    return Promise.all(ingredients.map(i => {
        const opt = JSON.parse(JSON.stringify(options));
        opt.count = i.Num;
        return dv.view("Item/Food/Ingredient/Count", { link: i.Name, options: opt })
    }))
    .then(items => {
        const row_3 = items.length >= 3 ? `</tr>
        <tr>
        <td style="border: none;">${items[2] ? items[2] : ""}</td>
        <td style="border: none;">${items[6] ? items[6] : ""}</td>
        </tr>` : "";
        const row_4 = items.length >= 4 ? `<tr>
        <td style="border: none;">${items[3] ? items[3] : ""}</td>
        <td style="border: none;">${items[7] ? items[7] : ""}</td>
        </tr>` : "";
        return `<table style="width: 25%;">
        <tbody>
        <tr>
        <td style="border: none;">${items[0] ? items[0] : ""}</td>
        <td style="border: none;">${items[4] ? items[4] : ""}</td>
        </tr>
        <tr>
        <td style="border: none;">${items[1] ? items[1] : ""}</td>
        <td style="border: none;">${items[5] ? items[5] : ""}</td>
        ${row_3}
        ${row_4}
        </tbody>
        </table>`;
    });
};
const GetFoodTable = async(Superb, Regular, Peculiar, Unique, options) => {
    return Promise.all([
        dv.view("Item/Food/Superb/InLine", { link: Superb, options }),
        dv.view("Item/Food/Regular/InLine", { link: Regular, options }),
        dv.view("Item/Food/Peculiar/InLine", { link: Peculiar, options }),
        dv.view("Item/Food/Unique/InLine", { link: Unique, options }),
    ]).then(foods => {
        return `<ul>${foods.map(f => `<li>${f}</li>`).join("")}</ul>`;
    });
}
// ===== Begin =====
let { recipe, options } = input;
options = MergeOptons(options);
DEBUG && console.debug("[][Views/][Input]:\n", { recipe, options });
const { ID: id } = recipe;
const { db } = options;
return dv.view("Common/Query/ID", { id, db, options })
.then(({ item: recipeData, link: recipeLink }) => {
    if(recipeData === null) {
        return "";
    }
    const { Ingredients, Regular, Peculiar, Superb, Unique } = recipeData;
    return dv.view("Common/Wiki", { link: recipeLink, options })
    .then(linkHTML => {
        return GetIngredientTable(Ingredients, options)
        .then(items => {
            return GetFoodTable(Superb,Regular,Peculiar,Unique, options)
            .then(foods => {
                return `<table style="width: 100%;">
                <theader>
                <tr><td style="border: none;"><h1>${linkHTML}</h1></td></tr>
                </theader>
                <tbody>
                <tr><td style="border: none;"><h2>必要食材</h2></td></tr>
                <tr><td style="border: none;">${items}</td></tr>
                <tr><td style="border: none;"><h2>获得道具</h2></td></tr>
                <tr><td style="border: none;">${foods}</td></tr>
                </tbody>
                </table>`;
            });  
        });
    }); 
});