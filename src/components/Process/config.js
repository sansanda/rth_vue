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
