const DEBUG = false;
const GetIcon = (key) => {
  let object = dv.page("图片/游戏攻略/英雄传说/通用/图标/Icon");
  const keys = key.split(".");
  const keyLength = keys.length;
  let index = 0;
  while (object != null && index < keyLength) {
    object = object[keys[index++]];
  }
  return object;
};
const { key } = input;
return GetIcon(key);
