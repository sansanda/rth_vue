<script setup>
import { reactive } from 'vue'

import GpibSettings from '../GPIB/GPIBSettings.vue'
import ChannelSettings from '../Channels/ChannelSettings.vue'
import SensorsSettings from '../Sensors/SensorsSettings.vue'
import FiltersSettings from '../Filters/FiltersSettings.vue'
import {createDefaultMultimeterConfig} from "./config"

const multimeterConfig = reactive(createDefaultMultimeterConfig());

</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Multimeter Setup</h2>
    <GpibSettings v-model="multimeterConfig.gpib" />
    <ChannelSettings title="Top PT100 Sensor (Copper Spreader)" v-model="multimeterConfig.channels.top" />
    <ChannelSettings title="Bottom PT100 Sensor (Aluminium HeatSink)" v-model="multimeterConfig.channels.bottom" />
    <SensorsSettings v-model="multimeterConfig.sensor" />
    <FiltersSettings v-model="multimeterConfig.filter" />
  </div>
</template>