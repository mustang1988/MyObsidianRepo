const DEBUG = true;
const CHARACTER_ICONS = {
  ColdSteel: {
    艾德尔: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/艾德尔.webp"
      ),
      width: 176,
      height: 148,
    },
    艾伦: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/艾伦.webp"
      ),
      width: 176,
      height: 148,
    },
    艾略特: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/艾略特.webp"
      ),
      width: 176,
      height: 148,
    },
    艾玛: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/艾玛.webp"
      ),
      width: 176,
      height: 148,
    },
    爱蜜莉: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/爱蜜莉.webp"
      ),
      width: 176,
      height: 148,
    },
    安洁莉卡: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/安洁莉卡.webp"
      ),
      width: 176,
      height: 148,
    },
    宝菈: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/宝菈.webp"
      ),
      width: 176,
      height: 148,
    },
    贝莉尔: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/贝莉尔.webp"
      ),
      width: 176,
      height: 148,
    },
    贝琪: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/贝琪.webp"
      ),
      width: 176,
      height: 148,
    },
    碧翠丝教官: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/碧翠丝.webp"
      ),
      width: 156,
      height: 130,
    },
    布莱希特: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/布莱希特.webp"
      ),
      width: 176,
      height: 148,
    },
    梵戴克学院长: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/梵戴克.webp"
      ),
      width: 156,
      height: 130,
    },
    菲: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/菲.webp"
      ),
      width: 176,
      height: 148,
    },
    菲莉丝: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/菲莉丝.webp"
      ),
      width: 176,
      height: 148,
    },
    弗列妲: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/弗列妲.webp"
      ),
      width: 156,
      height: 130,
    },
    盖乌斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/盖乌斯.webp"
      ),
      width: 176,
      height: 148,
    },
    海贝尔: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/海贝尔.webp"
      ),
      width: 176,
      height: 148,
    },
    亨利主任: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/亨利主任.webp"
      ),
      width: 128,
      height: 106,
    },
    贾斯柏: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/贾斯柏.webp"
      ),
      width: 176,
      height: 148,
    },
    科蕾特: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/科蕾特.webp"
      ),
      width: 176,
      height: 148,
    },
    克莱菈: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/克莱菈.webp"
      ),
      width: 176,
      height: 148,
    },
    克连: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/克连.webp"
      ),
      width: 176,
      height: 148,
    },
    克洛: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/克洛.webp"
      ),
      width: 156,
      height: 130,
    },
    肯尼斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/肯尼斯.webp"
      ),
      width: 181,
      height: 152,
    },
    兰伯特: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/兰伯特.webp"
      ),
      width: 176,
      height: 148,
    },
    劳拉: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/劳拉.webp"
      ),
      width: 176,
      height: 148,
    },
    雷克斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/雷克斯.webp"
      ),
      width: 176,
      height: 148,
    },
    黎恩: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/黎恩.webp"
      ),
      width: 176,
      height: 148,
    },
    琳黛: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/琳黛.webp"
      ),
      width: 176,
      height: 148,
    },
    罗金斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/罗金斯.webp"
      ),
      width: 152,
      height: 128,
    },
    萝德: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/萝德.webp"
      ),
      width: 123,
      height: 104,
    },
    萝西努: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/萝西努.webp"
      ),
      width: 176,
      height: 148,
    },
    马卡洛夫教官: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/马卡洛夫.webp"
      ),
      width: 152,
      height: 128,
    },
    马奇亚斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/马奇亚斯.webp"
      ),
      width: 176,
      height: 148,
    },
    玛格丽特: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/玛格丽特.webp"
      ),
      width: 176,
      height: 148,
    },
    玛丽教官: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/玛丽教官.webp"
      ),
      width: 151,
      height: 127,
    },
    孟亨: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/孟亨.webp"
      ),
      width: 176,
      height: 148,
    },
    米莉亚姆: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/米莉亚姆.webp"
      ),
      width: 176,
      height: 148,
    },
    敏特: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/敏特.webp"
      ),
      width: 176,
      height: 148,
    },
    莫妮卡: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/莫妮卡.webp"
      ),
      width: 176,
      height: 148,
    },
    奈特哈尔教官: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/奈特哈尔.webp"
      ),
      width: 151,
      height: 127,
    },
    尼可拉斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/尼可拉斯.webp"
      ),
      width: 176,
      height: 148,
    },
    派崔克: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/派崔克.webp"
      ),
      width: 176,
      height: 148,
    },
    裴德烈: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/裴德烈.webp"
      ),
      width: 176,
      height: 148,
    },
    乔治: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/乔治.webp"
      ),
      width: 151,
      height: 127,
    },
    瑟雷斯坦管家: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/瑟雷斯坦.webp"
      ),
      width: 176,
      height: 148,
    },
    莎拉教官: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/莎拉.webp"
      ),
      width: 156,
      height: 130,
    },
    莎莉法: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/莎莉法.webp"
      ),
      width: 128,
      height: 106,
    },
    史提芬: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/史提芬.webp"
      ),
      width: 181,
      height: 152,
    },
    泰蕾莎: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/泰蕾莎.webp"
      ),
      width: 176,
      height: 148,
    },
    汤玛斯教官: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/汤玛斯.webp"
      ),
      width: 151,
      height: 128,
    },
    桃乐丝: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/桃乐丝.webp"
      ),
      width: 176,
      height: 148,
    },
    托娃: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/托娃.webp"
      ),
      width: 176,
      height: 148,
    },
    薇薇: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/薇薇.webp"
      ),
      width: 176,
      height: 148,
    },
    文森: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/文森.webp"
      ),
      width: 176,
      height: 148,
    },
    雪伦: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/雪伦.webp"
      ),
      width: 156,
      height: 130,
    },
    亚莉莎: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/亚莉莎.webp"
      ),
      width: 176,
      height: 148,
    },
    尤西斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/尤西斯.webp"
      ),
      width: 176,
      height: 148,
    },
    雨果: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/人物信息/雨果.webp"
      ),
      width: 176,
      height: 148,
    },
  },
  ColdSteelII: {
    // TODO
  },
  ColdSteelIII: {
    汤玛斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/汤玛斯.webp"
      ),
      width: 220,
      height: 149,
    },
    黎恩: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/黎恩.webp"
      ),
      width: 220,
      height: 153,
    },
    阿加特: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/阿加特.webp"
      ),
      width: 220,
      height: 155,
    },
    乔治: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/乔治.webp"
      ),
      width: 220,
      height: 155,
    },
    亚修: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/亚修.webp"
      ),
      width: 220,
      height: 155,
    },
    亚尔提娜: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/亚尔提娜.webp"
      ),
      width: 220,
      height: 155,
    },
    亚莉莎: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/亚莉莎.webp"
      ),
      width: 220,
      height: 155,
    },
    克蕾雅: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/克蕾雅.webp"
      ),
      width: 220,
      height: 155,
    },
    兰迪: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/兰迪.webp"
      ),
      width: 220,
      height: 155,
    },
    凯利: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/凯利.webp"
      ),
      width: 220,
      height: 155,
    },
    劳拉: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/劳拉.webp"
      ),
      width: 220,
      height: 155,
    },
    古斯塔夫: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/古斯塔夫.webp"
      ),
      width: 220,
      height: 155,
    },
    史塔克: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/史塔克.webp"
      ),
      width: 220,
      height: 155,
    },
    塔琪安娜: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/塔琪安娜.webp"
      ),
      width: 220,
      height: 155,
    },
    奥利维特: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/奥利维特.webp"
      ),
      width: 220,
      height: 155,
    },
    奥蕾莉亚: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/奥蕾莉亚.webp"
      ),
      width: 220,
      height: 155,
    },
    妙婕: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/妙婕.webp"
      ),
      width: 220,
      height: 155,
    },
    孟亨: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/孟亨.webp"
      ),
      width: 220,
      height: 155,
    },
    安娜贝尔: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/安娜贝尔.webp"
      ),
      width: 220,
      height: 155,
    },
    安洁莉卡: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/安洁莉卡.webp"
      ),
      width: 220,
      height: 155,
    },
    尤西斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/尤西斯.webp"
      ),
      width: 220,
      height: 155,
    },
    帕布罗: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/帕布罗.webp"
      ),
      width: 220,
      height: 155,
    },
    席德尼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/席德尼.webp"
      ),
      width: 220,
      height: 155,
    },
    库尔特: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/库尔特.webp"
      ),
      width: 220,
      height: 155,
    },
    弗雷迪: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/弗雷迪.webp"
      ),
      width: 220,
      height: 155,
    },
    悠娜: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/悠娜.webp"
      ),
      width: 220,
      height: 155,
    },
    托娃: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/托娃.webp"
      ),
      width: 220,
      height: 155,
    },
    托瓦尔: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/托瓦尔.webp"
      ),
      width: 220,
      height: 155,
    },
    敏特: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/敏特.webp"
      ),
      width: 220,
      height: 155,
    },
    施密特: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/施密特.webp"
      ),
      width: 220,
      height: 155,
    },
    晶歌: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/晶歌.webp"
      ),
      width: 220,
      height: 155,
    },
    杰西卡: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/杰西卡.webp"
      ),
      width: 220,
      height: 155,
    },
    桑蒂: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/桑蒂.webp"
      ),
      width: 220,
      height: 155,
    },
    派崔克: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/派崔克.webp"
      ),
      width: 220,
      height: 155,
    },
    爱丽榭: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/爱丽榭.webp"
      ),
      width: 220,
      height: 155,
    },
    玛雅: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/玛雅.webp"
      ),
      width: 220,
      height: 155,
    },
    琳黛: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/琳黛.webp"
      ),
      width: 220,
      height: 155,
    },
    瑟蕾奴: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/瑟蕾奴.webp"
      ),
      width: 220,
      height: 155,
    },
    瑟雷斯坦: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/瑟雷斯坦.webp"
      ),
      width: 220,
      height: 155,
    },
    瓦莱丽: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/瓦莱丽.webp"
      ),
      width: 220,
      height: 155,
    },
    盖乌斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/盖乌斯.webp"
      ),
      width: 220,
      height: 155,
    },
    米海尔: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/米海尔.webp"
      ),
      width: 220,
      height: 155,
    },
    米莉亚姆: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/米莉亚姆.webp"
      ),
      width: 220,
      height: 155,
    },
    维因: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/维因.webp"
      ),
      width: 220,
      height: 155,
    },
    缇妲: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/缇妲.webp"
      ),
      width: 220,
      height: 155,
    },
    缇欧: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/缇欧.webp"
      ),
      width: 220,
      height: 155,
    },
    罗赛莉亚: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/罗赛莉亚.webp"
      ),
      width: 220,
      height: 155,
    },
    肯尼斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/肯尼斯.webp"
      ),
      width: 220,
      height: 155,
    },
    艾伦: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/艾伦.webp"
      ),
      width: 220,
      height: 155,
    },
    艾尔芬: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/艾尔芬.webp"
      ),
      width: 220,
      height: 155,
    },
    艾玛: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/艾玛.webp"
      ),
      width: 220,
      height: 155,
    },
    艾略特: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/艾略特.webp"
      ),
      width: 220,
      height: 155,
    },
    莎拉: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/莎拉.webp"
      ),
      width: 220,
      height: 155,
    },
    菲: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/菲.webp"
      ),
      width: 220,
      height: 155,
    },
    菲莉丝: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/菲莉丝.webp"
      ),
      width: 220,
      height: 155,
    },
    萝西努: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/萝西努.webp"
      ),
      width: 220,
      height: 155,
    },
    蕾欧诺拉: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/蕾欧诺拉.webp"
      ),
      width: 220,
      height: 155,
    },
    薇薇: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/薇薇.webp"
      ),
      width: 220,
      height: 155,
    },
    贝琪: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/贝琪.webp"
      ),
      width: 220,
      height: 155,
    },
    雨果: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/雨果.webp"
      ),
      width: 220,
      height: 155,
    },
    雪伦: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/雪伦.webp"
      ),
      width: 220,
      height: 155,
    },
    雷克多: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/雷克多.webp"
      ),
      width: 220,
      height: 155,
    },
    雷克斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/雷克斯.webp"
      ),
      width: 220,
      height: 155,
    },
    露伊洁: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/露伊洁.webp"
      ),
      width: 220,
      height: 155,
    },
    马奇亚斯: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/人物信息/马奇亚斯.webp"
      ),
      width: 220,
      height: 155,
    },
  },
  ColdSteelIV: {
    // TODO
  },
  Reverie: {
    // TODO
  },
};
const GetCharacterIcon = (name, category) => {
  const iconCategories = Object.keys(CHARACTER_ICONS);
  if (!iconCategories.includes(category)) {
    return null;
  }
  const iconCharacterNames = Object.keys(CHARACTER_ICONS[category]);
  if (!iconCharacterNames.includes(name)) {
    return null;
  }
  return CHARACTER_ICONS[category][name];
};
const { name, category } = input;
DEBUG && console.log("Character.js, Input: ", { name, category });
return GetCharacterIcon(name, category);
