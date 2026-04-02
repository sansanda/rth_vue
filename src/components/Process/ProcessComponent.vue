<script setup>
import { reactive, ref } from 'vue';
import InitProcessSettings from './InitProcessSettings.vue';
import RamUpSettings from './RamUpSettings.vue';
import RampDownSettings from './RampDownSettings.vue';
import TemperatureStabilizationSettings from './TemperatureStabilizationSettings.vue';
import MeasureParametersSettings from './MeasureParametersSettings.vue';
import EndProcessSettings from './EndProcessSettings.vue';
import ApplyConfigButton from '../others/ApplyConfigButton.vue';
import SafetySettings from './SafetySettings.vue';

import { createDefaultProcessConfig } from "./config";
import { updateProcessConfig } from '@/services/configService';

const processConfig = reactive(createDefaultProcessConfig());

const loading = ref(false)

const onApply = async () => {
  if (loading.value) return
  loading.value = true

  try {
    const result = await updateProcessConfig(processConfig)
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
      <h2 class="text-2xl font-bold w-65">Process Setup</h2>
      <ApplyConfigButton :loading="loading" @apply="onApply" />
    </div>
    <SafetySettings v-model="processConfig.Safety"></SafetySettings>
    <InitProcessSettings v-model="processConfig.Init" />
    <RamUpSettings v-model="processConfig.TemperatureRampUp" />
    <TemperatureStabilizationSettings title="Top Channel (Copper Spreader)"
      v-model="processConfig.TemperatureStabilization" />
    <MeasureParametersSettings title="Bottom Channel Aluminium HeatSink" v-model="processConfig.MeasureParameters" />
    <RampDownSettings v-model="processConfig.TemperatureRampDown" />
    <EndProcessSettings v-model="processConfig.End" />
  </div>
</template>