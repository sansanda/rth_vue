// services/configService.js

// ==========================
// MULTIMETER
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

export function mapFromBackendMultimeterConfig(api) {
  return {
    gpib: {
      address: api.gpib.address,
      timeout: api.gpib.timeout_ms,
    },
    channels: {
      top: {
        number: api.temperature.channels.top.channel,
        enabled: api.temperature.channels.top.enabled,
      },
      bottom: {
        number: api.temperature.channels.bottom.channel,
        enabled: api.temperature.channels.bottom.enabled,
      },
    },
    sensor: {
      type: api.temperature.sensor.subtype,
    },
    filter: {
      filter_enabled: api.temperature.averaging.enabled,
      filter_type:
        api.temperature.averaging.type === "MOV" ? "Moving" : "Repeat",
      filter_window: api.temperature.averaging.window,
      filter_count: api.temperature.averaging.count,
    },
  };
}

// ==========================
// API CALLS
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