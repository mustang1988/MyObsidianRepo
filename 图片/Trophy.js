const TrophyIcons = {
  Platinum: {
    Icon: {
      File: "![[图片/白金奖杯.png]]",
      width: 60,
      height: 64,
    },
  },
  Gold: {
    Icon: {
      File: "![[图片/白金奖杯.png]]",
      width: 60,
      height: 64,
    },
  },
  Silver: {
    Icon: {
      File: "![[图片/白金奖杯.png]]",
      width: 60,
      height: 64,
    },
  },
  Bronze: {
    Icon: {
      File: "![[图片/白金奖杯.png]]",
      width: 60,
      height: 64,
    },
  },
};

const GetIcon = (type) => {
  return Object.keys(TrophyIcons).includes(type) ? TrophyIcons[type] : null;
};

const {  } = input;