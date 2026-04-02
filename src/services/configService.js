// services/configService.js

// ==========================
// MULTIMETER CONFIG
// ==========================

export function mapToBackendMultimeterConfig(ui) {
  return {
    enabled: true,
    gpib: {
      gpib_card: 0,
      address: ui.gpib.address,
      timeout_ms: ui.gpib.timeout,
    },
    temperature: {
      sensor: {
        type: "FRTD",
        subtype: ui.sensor.type,
      },
      channels: {
        top: {
          id: "top",
          enabled: ui.channels.top.enabled,
          channel: ui.channels.top.number,
          description: "Top PT100 Sensor (Copper Spreader)",
        },
        bottom: {
          id: "bottom",
          enabled: ui.channels.bottom.enabled,
          channel: ui.channels.bottom.number,
          description: "Bottom PT100 Sensor (Aluminium HeatSink)",
        },
      },
      measure:{
        nplc: ui.measure.nplc,
        measurement_resolution: ui.measure.measurement_resolution 
      },
      averaging: {
        enabled: ui.filter.filter_enabled,
        type: ui.filter.filter_type === "Moving" ? "MOV" : "REP",
        window: ui.filter.filter_window,
        count: ui.filter.filter_count,
      },
    },
  };
}

// ==========================
// SOURCE-METER CONFIG
// ==========================

export function mapToBackendSourceMeterConfig(ui) {
  return {
    enabled: true,
    gpib: {
      gpib_card: 0,
      address: ui.gpib.address,
      timeout_ms: ui.gpib.timeout,
    },
    output: {
      enabled: ui.output.enabled,
      connection: ui.output.connection
    },
    source:{
      mode: "CURRENT",
      range: ui.source.current_range,
      value: ui.source.current,
      compliance: ui.source.voltage_compliance,
      delay_ms: ui.source.delay_ms
    },
    measure:{
      mode: "VOLT",
      range: ui.measure.range,
      nplc: ui.measure.nplc,
      timestamps: ui.measure.collectTS
    },
    averaging:{
      enabled: ui.filter.filter_enabled,
      type: ui.filter.filter_type,
      window: ui.filter.filter_window,
      count: ui.filter.filter_count
    }
  };
}

// ==========================
// LIMITS CONFIG
// ==========================

export function mapToBackendLimitsConfig(ui) {
  return {
    enabled: true,
    current: {
      max: ui.current.max_current 
    },
    temperature: {
      unit: "C",
      max: ui.temperature.max_temperature
    }
  };
}

// ==========================
// PROCESS SETUP CONFIG
// ==========================

export function mapToBackendProcessConfig(ui) {
  return {
    enabled: true,
    init: {
      test_multimeter: ui.Init.test_multimeter,
      test_source_meter: ui.Init.test_source_meter,
      notify: {
        enabled: ui.Init.send_message,
        phone_number: ui.Init.phone_number
      }
    },
    temperature_ramp_up: {
      unit: "C",
      target_temperature: ui.TemperatureRampUp.temperature,
      duration_min: ui.TemperatureRampUp.time_to
    },
    temperature_stabilization: {
      duration_min: ui.TemperatureStabilization.time_to
    },
    measurement: {
      num_measures: ui.MeasureParameters.n_measures,
      sample_period_s: ui.MeasureParameters.sample_period,
      channel_delay_ms: ui.MeasureParameters.time_betwwen_channels,
      channels: ui.MeasureParameters.channels
    },
    temperature_ramp_down: {
      duration_min: ui.TemperatureRampDown.time_to
    },
    end: {
      notify: {
        enabled: ui.End.send_message,
        phone_number: ui.End.phone_number
      }
    },
    safety: {
      stop_on_current_limit: ui.Safety.stop_on_current_limit,
      max_current: ui.Safety.max_current,
      cooldown_on_overtemp: ui.Safety.cooldown_on_overtemp,
      max_temperature: ui.Safety.max_temperature
    }
  };
}

// ==========================
// MEASURE RESULTS CONFIG
// ==========================

export function mapToBackendMeasureResultsConfig(ui) {
  return {
    enabled: true,
    file: {
      name: ui.fileName.name,
      format: ui.fileName.extension,
      path: ui.filePath.path,
      include_timestamp: ui.fileName.enableTimestamp
    },
    autosave: {
      enabled: ui.autoSave.autosave,
      period_min: ui.autoSave.autosave_period,
      mode: ui.autoSave.mode
    }
  };
}



// ==========================
// API CALLS
// ==========================

// ==========================
// MULTIMETER CONFIG
// ==========================

export async function updateMultimeterConfig(uiConfig) {
  try {
    const payload = mapToBackendMultimeterConfig(uiConfig);

    const response = await fetch("/api/multimeter/config", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    return {
      ok: true,
      data: data,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.response?.data || error.message,
    };
  }
}

// ==========================
// SOURCEMETER CONFIG
// ==========================

export async function updateSourceMeterConfig(uiConfig) {
  try {
    const payload = mapToBackendMeasureResultsConfig(uiConfig);

    const response = await fetch("/api/sourcemeter/config", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    return {
      ok: true,
      data: data,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.response?.data || error.message,
    };
  }
}

// ==========================
// LIMITS CONFIG
// ==========================

export async function updateLimitsConfig(uiConfig) {
  try {
    const payload = mapToBackendLimitsConfig(uiConfig);

    const response = await fetch("/api/limits/config", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    return {
      ok: true,
      data: data,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.response?.data || error.message,
    };
  }
}

// ==========================
// PROCESS CONFIG
// ==========================

export async function updateProcessConfig(uiConfig) {
  try {
    const payload = mapToBackendProcessConfig(uiConfig);

    const response = await fetch("/api/process/config", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    return {
      ok: true,
      data: data,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.response?.data || error.message,
    };
  }
}

// ==========================
// MEASURE RESULTS CONFIG
// ==========================

export async function updateMeasureResultsConfig(uiConfig) {
  try {
    const payload = mapToBackendMeasureResultsConfig(uiConfig);
    const response = await fetch("/api/measure-results/config", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    return {
      ok: true,
      data: data,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.response?.data || error.message,
    };
  }
}