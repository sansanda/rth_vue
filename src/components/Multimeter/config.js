const channelNumbers = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110];
const availableGPIBAddresses = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
const nplcValues = [0.01,0.1,1,10];
const measurementResolutionValues = [4,5,6,7]

export function createDefaultMultimeterConfig() {
  return {
    gpib: {
      address: 16,
      addressOptions: availableGPIBAddresses,
      timeout: 5000,
      timeout_default: 5000,
      timeout_min: 1000,
      timeout_max: 10000,
      timeout_step: 100
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
    },
    measure:{
      nplc: 1,
      nplc_options: nplcValues,
      measurement_resolution: 6, //number of digits
      measurement_resolution_options: measurementResolutionValues 
    }
  }
};