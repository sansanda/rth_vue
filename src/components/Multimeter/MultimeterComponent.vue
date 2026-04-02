<script setup>
import { reactive, ref } from 'vue'

import GpibSettings from '../GPIB/GPIBSettings.vue'
import ChannelSettings from '../Channels/ChannelSettings.vue'
import SensorsSettings from '../Sensors/SensorsSettings.vue'
import FiltersSettings from '../Filters/FiltersSettings.vue'
import MeaureSettings from './MeaureSettings.vue'

import { createDefaultMultimeterConfig } from "./config"
import ApplyConfigButton from '../others/ApplyConfigButton.vue'
import { updateMultimeterConfig } from '@/services/configService'

const multimeterConfig = reactive(createDefaultMultimeterConfig());
const loading = ref(false)

const onApply = async () => {
  if (loading.value) return
  loading.value = true

  try {
    const result = await updateMultimeterConfig(multimeterConfig)

    if (result.ok) {
      console.log('OK')
    } else {
      console.error(result.error)
    }
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div>
    <div class="grid grid-cols-[auto_auto] items-center gap-3 mb-6">
      <h2 class="text-2xl font-bold w-65">Multimeter Setup</h2>
      <ApplyConfigButton :loading="loading" @apply="onApply" />
    </div>
    <GpibSettings v-model="multimeterConfig.gpib" />
    <ChannelSettings title="Top PT100 Sensor (Copper Spreader)" v-model="multimeterConfig.channels.top" />
    <ChannelSettings title="Bottom PT100 Sensor (Aluminium HeatSink)" v-model="multimeterConfig.channels.bottom" />
    <SensorsSettings v-model="multimeterConfig.sensor" />
    <FiltersSettings v-model="multimeterConfig.filter" />
    <MeaureSettings v-model="multimeterConfig.measure" />
  </div>
</template>