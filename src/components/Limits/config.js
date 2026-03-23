export function createDefaultLimitsConfig() {
  return {
    current: {
      max_current: 0.7,
      max_current_default: 0.7,
      max_current_min: 1e-3,
      max_current_max: 1,
      max_current_step: 1e-3,
    },
    temperature: {
      max_temperature: 55,
      max_temperature_default: 55,
      max_temperature_min: 35,
      max_temperature_max: 60,
      max_temperature_step: 1,
    },
  };
}
