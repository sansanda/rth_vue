const connectionValues = ["REAR","FRONT"];
const nplcValues = [0.01,0.1,1,10];
const measureRangeValues = [0.2,2,20,100];
const availableGPIBAddresses = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

export function createDefaultSourceConfig() {
  return {
    gpib: {
      address: 17,
      addressOptions: availableGPIBAddresses,
      timeout: 5000,
      timeout_default: 5000,
      timeout_min: 1000,
      timeout_max: 10000,
      timeout_step: 100
    },
    output: {
      connection: 'FRONT',
      connectionOptions: connectionValues,
      enabled: false
    },
    source: {
      current: 0,
      current_default: 0,
      current_min: 0,
      current_max: 1,
      current_step: 1E-6,
      current_range: 1,
      voltage_compliance: 63,
      voltage_compliance_default: 63,
      voltage_compliance_min: 0,
      voltage_compliance_max: 63,
      voltage_compliance_step: 1E-3,
      delay_ms: 1000,
      delay_ms_default: 1000,
      delay_ms_min: 0,
      delay_ms_max: 5000,
      delay_ms_step: 1,
    },
    measure: {
      range: 100,
      range_options: measureRangeValues,
      nplc: 1,
      nplc_options: nplcValues,
      collectTS: false,
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
  };
}