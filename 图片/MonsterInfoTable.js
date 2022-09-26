const DEBUG = true;

const DEFAULT_OPTIONS = {
  size: 200,
};

const MergeOptions = (options) => {
  return Object.assign(DEFAULT_OPTIONS, options);
};

const RenderMonsterInfoTable = (monster, options) => {
  const { size } = options;
  const { Icon, Description, Locations } = monster;
  dv.table(
    [],
    [[dv.fileLink(Icon.path, true, `${size}`), Description, Locations]]
  );
};

const { monster, options } = input;
return RenderMonsterInfoTable(monster, MergeOptions(options));
