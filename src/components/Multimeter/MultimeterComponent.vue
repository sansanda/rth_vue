<script setup>
import { reactive } from 'vue'

import GpibSettings from '../GPIB/GPIBSettings.vue'
import ChannelSettings from '../Channels/ChannelSettings.vue'
import SensorsSettings from '../Sensors/SensorsSettings.vue'
import FiltersSettings from '../Filters/FiltersSettings.vue'

const channelNumbers = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110];
const availableGPIBAddresses = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

const config = reactive({
  gpib: {
    address: 16,
    address_default: 16,
    address_min: 1,
    address_max: 30,
    address_step: 1,
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
  }
})
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Keithley 2700 - Multimeter Setup</h2>

    <GpibSettings v-model="config.gpib" />

    <ChannelSettings title="Top Channel (Copper Spreader)" v-model="config.channels.top" />
    <ChannelSettings title="Bottom Channel Aluminium HeatSink" v-model="config.channels.bottom" />

    <SensorsSettings v-model="config.sensor" />

    <FiltersSettings v-model="config.filter" />
  </div>
</template>