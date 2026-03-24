export function createDefaultProcessConfig() {
  return {
    Init: {
      test_multimeter: true,
      test_source_meter: true,
      send_message: false,
      phone_number: "661290548",
    },
    TemperatureRampUp: {
      //celsius and minutes
      temperature: 55,
      temperature_default: 55,
      temperature_min: 40,
      temperature_max: 60,
      temperature_step: 1,
      time_to: 5,
      time_to_default: 5,
      time_to_min: 5,
      time_to_max: 30,
      time_to_step: 1,
    },
    TemperatureStabilization: {
      time_to: 15,
      time_to_default: 15,
      time_to_min: 0,
      time_to_max: 60,
      time_to_step: 1,
    },
    MeasureParameters: {
      n_measures: 15,
      n_measures_default: 15,
      n_measures_min: 1,
      n_measures_max: 100,
      n_measures_step: 1,
      sample_period: 120, //seconds
      sample_period_default: 120,
      sample_period_min: 1,
      sample_period_max: 1200,
      sample_period_step: 1,
      time_betwwen_channels: 100, //ms
      time_betwwen_channels_default: 100,
      time_betwwen_channels_min: 100,
      time_betwwen_channels_max: 1000,
      time_betwwen_channels_step: 100,
    },
    TemperatureRampDown: {
      //minutes
      time_to: 15,
      time_to_default: 15,
      time_to_min: 10,
      time_to_max: 30,
      time_to_step: 1,
    },
    End: {
      send_message: true,
      phone_number: "661290548",
    },
  };
}
