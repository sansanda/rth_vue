export function createDefaultMeasureResultsConfig() {
  return {
    fileName: {
      name: "rth",
      extension: "dat",
      name_format: "dd-mm-aaaa-hh-mm-ss",
      enableTimestamp: true,
    },
    autoSave:{
      autosave: true,
      autosave_period: 2, //mins
      autosave_period_default: 1,
      autosave_period_min: 1,
      autosave_period_max: 5,
      autosave_period_step: 1,
      mode: "append"
    },
    filePath: {
      path: ".",
      default_path: ".",
    },
  };
}
