export function createDefaultMeasureResultsConfig() {
  return {
    fileName: {
      name: "rth",
      extension: "dat",
      name_format: "dd-mm-aaaa-hh-mm-ss",
      autosave: true,
      autosave_period: 1, //mins
      autosave_period_default: 1,
      autosave_period_min: 1,
      autosave_period_max: 5,
      autosave_period_step: 1,
    },
    filePath: {
      //celsius and minutes
      path: ".",
      default_path: ".",
    },
  };
}
