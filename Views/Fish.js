const DEBUG = false;
const FISH_ICONS = {
  ColdSteel: {
    鳌虾: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/鳌虾.webp"
      ),
      width: 82,
      height: 72,
    },
    冰霜鳌虾: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/冰霜螯虾.webp"
      ),
      width: 107,
      height: 79,
    },
    大口鲈鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/大口鲈鱼.webp"
      ),
      width: 97,
      height: 85,
    },
    大山椒鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/大山椒鱼.webp"
      ),
      width: 112,
      height: 94,
    },
    鲑鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/鲑鱼.webp"
      ),
      width: 95,
      height: 97,
    },
    黑鲑: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/黑鲑.webp"
      ),
      width: 102,
      height: 83,
    },
    虹鳟鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/虹鳟鱼.webp"
      ),
      width: 95,
      height: 89,
    },
    花蟹: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/花蟹.webp"
      ),
      width: 94,
      height: 79,
    },
    金鲑: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/金鲑.webp"
      ),
      width: 108,
      height: 91,
    },
    金龙鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/金龙鱼.webp"
      ),
      width: 105,
      height: 91,
    },
    巨鲶: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/巨鲶.webp"
      ),
      width: 108,
      height: 85,
    },
    巨刃鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/巨刃鱼.webp"
      ),
      width: 102,
      height: 95,
    },
    巨血蟹: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/巨血蟹.webp"
      ),
      width: 112,
      height: 89,
    },
    鲤鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/鲤鱼.webp"
      ),
      width: 102,
      height: 89,
    },
    鳗鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/鳗鱼.webp"
      ),
      width: 110,
      height: 93,
    },
    刃鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/刃鱼.webp"
      ),
      width: 98,
      height: 82,
    },
    山椒鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/山椒鱼.webp"
      ),
      width: 82,
      height: 72,
    },
    亚诺鲁鲫鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/亚诺鲁鲫鱼.webp"
      ),
      width: 92,
      height: 82,
    },
    岩穴鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/岩穴鱼.webp"
      ),
      width: 98,
      height: 89,
    },
    银伞鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹/笔记/钓鱼笔记/银伞鱼.png"
      ),
      width: 85,
      height: 78,
    },
  },
  ColdSteelII: {
    鳌虾: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/笔记/钓鱼笔记/鳌虾.webp"
      ),
      width: 82,
      height: 72,
    },
    冰霜鳌虾: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/笔记/钓鱼笔记/冰霜鳌虾.webp"
      ),
      width: 107,
      height: 79,
    },
    大口鲈鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/笔记/钓鱼笔记/大口鲈鱼.webp"
      ),
      width: 97,
      height: 85,
    },
    大山椒鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/笔记/钓鱼笔记/大山椒鱼.webp"
      ),
      width: 112,
      height: 94,
    },
    斗鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/笔记/钓鱼笔记/斗鱼.webp"
      ),
      width: 95,
      height: 74,
    },
    鲑鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/笔记/钓鱼笔记/鲑鱼.webp"
      ),
      width: 95,
      height: 97,
    },
    黑鲑: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/笔记/钓鱼笔记/黑鲑.webp"
      ),
      width: 102,
      height: 83,
    },
    虹鳟鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/笔记/钓鱼笔记/虹鳟鱼.webp"
      ),
      width: 95,
      height: 89,
    },
    花蟹: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/笔记/钓鱼笔记/花蟹.webp"
      ),
      width: 94,
      height: 79,
    },
    角斗鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/笔记/钓鱼笔记/角斗鱼.webp"
      ),
      width: 109,
      height: 81,
    },
    金鲑: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/笔记/钓鱼笔记/金鲑.webp"
      ),
      width: 108,
      height: 91,
    },
    金龙鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/笔记/钓鱼笔记/金龙鱼.webp"
      ),
      width: 105,
      height: 91,
    },
    锦鲤: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/笔记/钓鱼笔记/锦鲤.webp"
      ),
      width: 107,
      height: 79,
    },
    巨鲶: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/笔记/钓鱼笔记/巨鲶.webp"
      ),
      width: 108,
      height: 85,
    },
    巨无霸暴君: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/笔记/钓鱼笔记/巨无霸暴君.webp"
      ),
      width: 99,
      height: 88,
    },
    巨血蟹: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/笔记/钓鱼笔记/巨血蟹.webp"
      ),
      width: 112,
      height: 89,
    },
    鲤鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/笔记/钓鱼笔记/鲤鱼.webp"
      ),
      width: 102,
      height: 89,
    },
    鳗鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/笔记/钓鱼笔记/鳗鱼.webp"
      ),
      width: 110,
      height: 93,
    },
    刃鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/笔记/钓鱼笔记/刃鱼.webp"
      ),
      width: 98,
      height: 82,
    },
    山椒鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/笔记/钓鱼笔记/山椒鱼.webp"
      ),
      width: 99,
      height: 87,
    },
    亚诺鲁鲫鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/笔记/钓鱼笔记/亚诺鲁鲫鱼.webp"
      ),
      width: 92,
      height: 82,
    },
    岩穴鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/笔记/钓鱼笔记/岩穴鱼.webp"
      ),
      width: 98,
      height: 89,
    },
    银伞鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/笔记/钓鱼笔记/银伞鱼.webp"
      ),
      width: 85,
      height: 78,
    },
    战鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹II/笔记/钓鱼笔记/战鱼.webp"
      ),
      width: 95,
      height: 76,
    },
  },
  ColdSteelIII: {
    巨龙鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/钓鱼笔记/巨龙鱼.webp"
      ),
      width: 180,
      height: 92,
    },
    匿踪鲨: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/钓鱼笔记/匿踪鲨.webp"
      ),
      width: 180,
      height: 92,
    },
    钴蓝蟹: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/钓鱼笔记/钴蓝蟹.webp"
      ),
      width: 180,
      height: 93,
    },
    雷鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/钓鱼笔记/雷鱼.webp"
      ),
      width: 180,
      height: 93,
    },
    幻影鲨: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/钓鱼笔记/幻影鲨.webp"
      ),
      width: 180,
      height: 97,
    },
    金鲑: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/钓鱼笔记/金鲑.webp"
      ),
      width: 180,
      height: 97,
    },
    锦鲤: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/钓鱼笔记/锦鲤.webp"
      ),
      width: 180,
      height: 97,
    },
    蓝宝石鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/钓鱼笔记/蓝宝石鱼.webp"
      ),
      width: 180,
      height: 102,
    },
    钝头鲀: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/钓鱼笔记/钝头鲀.webp"
      ),
      width: 180,
      height: 180,
    },
    寄生鲶: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/钓鱼笔记/寄生鲶.webp"
      ),
      width: 180,
      height: 180,
    },
    绿龙鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/钓鱼笔记/绿龙鱼.webp"
      ),
      width: 180,
      height: 109,
    },
    虹鳟鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/钓鱼笔记/虹鳟鱼.webp"
      ),
      width: 180,
      height: 111,
    },
    森林鳃鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/钓鱼笔记/森林鳃鱼.webp"
      ),
      width: 180,
      height: 111,
    },
    帝王鲈: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/钓鱼笔记/帝王鲈.webp"
      ),
      width: 180,
      height: 112,
    },
    红鲈: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/钓鱼笔记/红鲈.webp"
      ),
      width: 180,
      height: 113,
    },
    深海巨鲶: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/钓鱼笔记/深海巨鲶.webp"
      ),
      width: 180,
      height: 114,
    },
    天空鳃鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/钓鱼笔记/天空鳃鱼.webp"
      ),
      width: 180,
      height: 115,
    },
    三斑鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/钓鱼笔记/三斑鱼.webp"
      ),
      width: 180,
      height: 118,
    },
    岩穴鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/钓鱼笔记/岩穴鱼.webp"
      ),
      width: 180,
      height: 119,
    },
    刺鲀: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/钓鱼笔记/刺鲀.webp"
      ),
      width: 180,
      height: 121,
    },
    鲤鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/钓鱼笔记/鲤鱼.webp"
      ),
      width: 180,
      height: 121,
    },
    雪花蟹: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/钓鱼笔记/雪花蟹.webp"
      ),
      width: 180,
      height: 121,
    },
    银伞鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/钓鱼笔记/银伞鱼.webp"
      ),
      width: 180,
      height: 127,
    },
    蓝带神仙鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/钓鱼笔记/蓝带神仙鱼.webp"
      ),
      width: 180,
      height: 129,
    },
    女王神仙鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹III/笔记/钓鱼笔记/女王神仙鱼.webp"
      ),
      width: 180,
      height: 145,
    },
  },
  ColdSteelIV: {
    眼镜蛇头鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/眼镜蛇头鱼.webp"
      ),
      width: 180,
      height: 73,
    },
    钴蓝蟹: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/钴蓝蟹.webp"
      ),
      width: 180,
      height: 93,
    },
    埃雷肯拟态鲨: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/埃雷肯拟态鲨.webp"
      ),
      width: 180,
      height: 94,
    },
    火眼鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/火眼鱼.webp"
      ),
      width: 180,
      height: 94,
    },
    金鲑: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/金鲑.webp"
      ),
      width: 180,
      height: 97,
    },
    锦鲤: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/锦鲤.webp"
      ),
      width: 180,
      height: 97,
    },
    珍珠草鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/珍珠草鱼.webp"
      ),
      width: 180,
      height: 97,
    },
    北方龙鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/北方龙鱼.webp"
      ),
      width: 180,
      height: 98,
    },
    大理石乌鳢: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/大理石乌鳢.webp"
      ),
      width: 180,
      height: 100,
    },
    苍玉剑宝石鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/苍玉剑宝石鱼.webp"
      ),
      width: 180,
      height: 102,
    },
    虎龙鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/虎龙鱼.webp"
      ),
      width: 180,
      height: 102,
    },
    蓝宝石鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/蓝宝石鱼.webp"
      ),
      width: 180,
      height: 102,
    },
    暴食鲨: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/暴食鲨.webp"
      ),
      width: 180,
      height: 104,
    },
    雷克罗德巨鳟: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/雷克罗德巨鳟.webp"
      ),
      width: 180,
      height: 104,
    },
    水银鲤: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/水银鲤.webp"
      ),
      width: 180,
      height: 107,
    },
    钝头鲀: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/钝头鲀.webp"
      ),
      width: 180,
      height: 108,
    },
    寄生鲶: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/寄生鲶.webp"
      ),
      width: 180,
      height: 108,
    },
    星点鲈: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/星点鲈.webp"
      ),
      width: 180,
      height: 108,
    },
    虹鳟鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/虹鳟鱼.webp"
      ),
      width: 180,
      height: 111,
    },
    森林鳃鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/森林鳃鱼.webp"
      ),
      width: 180,
      height: 111,
    },
    红鲈: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/红鲈.webp"
      ),
      width: 180,
      height: 113,
    },
    天空鳃鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/天空鳃鱼.webp"
      ),
      width: 180,
      height: 115,
    },
    岩穴鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/岩穴鱼.webp"
      ),
      width: 180,
      height: 119,
    },
    刺鲀: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/刺鲀.webp"
      ),
      width: 180,
      height: 121,
    },
    鲤鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/鲤鱼.webp"
      ),
      width: 180,
      height: 121,
    },
    雪花蟹: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/雪花蟹.webp"
      ),
      width: 180,
      height: 121,
    },
    白雪鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/白雪鱼.webp"
      ),
      width: 180,
      height: 127,
    },
    银伞鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/银伞鱼.webp"
      ),
      width: 180,
      height: 127,
    },
    蓝带神仙鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/蓝带神仙鱼.webp"
      ),
      width: 180,
      height: 129,
    },
    粉红神仙鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 闪之轨迹IV/笔记/钓鱼笔记/粉红神仙鱼.webp"
      ),
      width: 180,
      height: 137,
    },
  },
  Reverie: {
    眼镜蛇头鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/眼镜蛇头鱼.webp"
      ),
      width: 180,
      height: 73,
    },
    钴蓝蟹: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/钴蓝蟹.webp"
      ),
      width: 180,
      height: 93,
    },
    埃雷肯拟态鲨: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/埃雷肯拟态鲨.webp"
      ),
      width: 180,
      height: 94,
    },
    金鲑: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/金鲑.webp"
      ),
      width: 180,
      height: 97,
    },
    锦鲤: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/锦鲤.webp"
      ),
      width: 180,
      height: 97,
    },
    珍珠草鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/珍珠草鱼.webp"
      ),
      width: 180,
      height: 97,
    },
    北方龙鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/北方龙鱼.webp"
      ),
      width: 180,
      height: 98,
    },
    大理石乌鳢: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/大理石乌鳢.webp"
      ),
      width: 180,
      height: 100,
    },
    虎龙鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/虎龙鱼.webp"
      ),
      width: 180,
      height: 102,
    },
    蓝宝石鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/蓝宝石鱼.webp"
      ),
      width: 180,
      height: 102,
    },
    暴食鲨: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/暴食鲨.webp"
      ),
      width: 180,
      height: 104,
    },
    水银鲤: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/水银鲤.webp"
      ),
      width: 180,
      height: 107,
    },
    钝头鲀: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/钝头鲀.webp"
      ),
      width: 180,
      height: 108,
    },
    寄生鲶: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/寄生鲶.webp"
      ),
      width: 180,
      height: 108,
    },
    虹鳟鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/虹鳟鱼.webp"
      ),
      width: 180,
      height: 111,
    },
    森林鳃鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/森林鳃鱼.webp"
      ),
      width: 180,
      height: 111,
    },
    红鲈: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/红鲈.webp"
      ),
      width: 180,
      height: 113,
    },
    天空鳃鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/天空鳃鱼.webp"
      ),
      width: 180,
      height: 115,
    },
    岩穴鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/岩穴鱼.webp"
      ),
      width: 180,
      height: 119,
    },
    刺鲀: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/刺鲀.webp"
      ),
      width: 180,
      height: 121,
    },
    鲤鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/鲤鱼.webp"
      ),
      width: 180,
      height: 121,
    },
    雪花蟹: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/雪花蟹.webp"
      ),
      width: 180,
      height: 121,
    },
    银伞鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/银伞鱼.webp"
      ),
      width: 180,
      height: 127,
    },
    蓝带神仙鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/蓝带神仙鱼.webp"
      ),
      width: 180,
      height: 129,
    },
    粉红神仙鱼: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/粉红神仙鱼.webp"
      ),
      width: 180,
      height: 137,
    },
    宝石蟹: {
      file: dv.fileLink(
        "图片/游戏攻略/英雄传说/英雄传说 创之轨迹/笔记/钓鱼笔记/宝石蟹.webp"
      ),
      width: 180,
      height: 141,
    },
  },
};
const DEFAULT_OPTIONS = {
  size: 20,
  category: "ColdSteel",
  inline: false,
  seperator: " , ",
  raw: false,
};
const MergeOptions = (options) => {
  return Object.assign(DEFAULT_OPTIONS, options);
};
const GetIcon = (name, category) => {
  DEBUG && console.log("GetIcon, args => ", { name, category });
  const checkCategory = Object.keys(FISH_ICONS).includes(category);
  DEBUG && console.log("GetIcon, checkCategory => ", checkCategory);
  if (checkCategory) {
    const icon = Object.keys(FISH_ICONS[category]).includes(name)
      ? FISH_ICONS[category][name]
      : null;
    DEBUG && console.log("GetIcon, checkCategory true, return => ", icon);
    return icon;
  }
  DEBUG && console.log("GetIcon, checkCategory false, return => ", null);
  return null;
};
const GetDisplaySize = (icon, size) => {
  const { width, height } = icon;
  return Math.round((width * size) / height);
};
const ToHTML = (fish, options) => {
  const {
    Name,
    file: { link, path },
  } = fish;
  const { size, category } = options;
  const icon = GetIcon(Name, category);
  if (icon) {
    return `<img width="${GetDisplaySize(icon, size)}" src="${
      this.app.vault.adapter.basePath
    }/${icon.file.path}" /> ${link}`;
  } else {
    DEBUG && console.error(fish);
    return "";
  }
};
const RenderFish = (fish, options) => {
  const { raw } = options;
  const fishObject = dv.page(fish.path || fish.file.path);
  return raw
    ? ToHTML(fishObject, options)
    : dv.span(ToHTML(fishObject, options));
};
const RenderFishes = (fishes, options) => {
  const { raw } = options;
  fishes = fishes.map((f) => dv.page(f.path || f.file.path));
  const { inline, seperator } = options;
  const HTML = inline
    ? fishes.map((f) => ToHTML(f, options)).join(seperator)
    : fishes.map((f) => ToHTML(f, options));
  return raw ? HTML : inline ? dv.span(HTML) : dv.list(HTML);
};
const { fish, options } = input;
DEBUG && console.log("Fish.js, Input => ", input);
return Array.isArray(fish)
  ? RenderFishes(fish, MergeOptions(options))
  : RenderFish(fish, MergeOptions(options));
