const channelNumbers = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110];
const availableGPIBAddresses = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

    <InitProcessSettings v-model="processConfig.Init"/>
    <RamUpSettings v-model="processConfig.RampUp" />
    <TemperatureStabilizationSettings title="Top Channel (Copper Spreader)" v-model="processConfig.TemperatureStabilization" />
    <MeasureParametersSettings title="Bottom Channel Aluminium HeatSink" v-model="processConfig.MeasureParameters" />
    <RampDownSettings v-model="processConfig.RampDown" />
    <EndProcessSettings v-model="processConfig.End"/>

export function createDefaultProcessConfig() {
  return {
    Init:{
      test_multimeter: true,
      test_source_meter: true,
      send_message: true,
      phone_number: '661290548'
    },
    RampUp: { //minutes
      time_to: 2,
      time_to_default: 2,
      time_to_min: 1,
      time_to_max: 5,
      time_to_step: 1,
    },
    channels: {
      top: {
        number: 101,
        numberOptions: channelNumbers,        
        enabled: true,
      },
      bottom: {
        number: 102,
        numberOptions: channelNumbers,
        enabled: true
      }
    },
    sensor: {
      type: 'PT100'
    },
    filter: {
      filter_enabled: false,
      filter_type: "Moving",
      filter_window: 0.1,
      filter_window_default: 0.1,
      filter_window_min: 0.1,
      filter_window_max: 10,
      filter_window_step: 0.1,
      filter_count: 10,
      filter_count_default: 10,
      filter_count_min: 1,
      filter_count_max: 100,
      filter_count_step: 1,
    }
  }
};