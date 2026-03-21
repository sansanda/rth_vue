<script setup>
import { reactive } from 'vue'

import GpibSettings from '../GPIB/GPIBSettings.vue'
import ChannelSettings from '../Channels/ChannelSettings.vue'
import SensorsSettings from '../Sensors/SensorsSettings.vue'
import FiltersSettings from '../Filters/FiltersSettings.vue'

const config = reactive({
  gpib: {
    address: 16,
    timeout: 5000
  },
  channels: {
    top: {
      number: 101,        
      enabled: true,
      range: 'AUTO'
    },
    bottom: {
      number: 102,
      enabled: true,
      range: 'AUTO'
    }
  },
  sensor: {
    type: 'PT100'
  },
  filter: {
    enabled: false,
    nplc: 1
  }
})
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Keithley 2700 - Multimeter Setup</h2>

    <GpibSettings v-model="config.gpib" />

    <ChannelSettings title="Top Channel" v-model="config.channels.top" />
    <ChannelSettings title="Bottom Channel" v-model="config.channels.bottom" />

    <SensorsSettings v-model="config.sensor" />

    <FiltersSettings v-model="config.filter" />
  </div>
</template>