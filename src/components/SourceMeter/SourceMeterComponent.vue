<script setup>
import { reactive, ref } from "vue";

import GpibSettings from "../GPIB/GPIBSettings.vue";
import FiltersSettings from "../Filters/FiltersSettings.vue";
import SourceSettings from "./SourceSettings.vue";
import OutputSettings from "./OutputSettings.vue";
import MeasureSettings from "./MeasureSettings.vue";
import { createDefaultSourceConfig } from './config.js'
import ApplyConfigButton from "../others/ApplyConfigButton.vue";
import { updateSourceMeterConfig } from "@/services/configService";

const sourceMeterConfig = reactive(createDefaultSourceConfig());
const loading = ref(false)

const onApply = async () => {
  if (loading.value) return
  loading.value = true

  try {
    //const result = await updateSourceMeterConfig(sourceMeterConfig)
    const result = {
      ok: true
    }

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
      <h2 class="text-2xl font-bold w-65">Source Meter Setup</h2>
      <ApplyConfigButton :loading="loading" @apply="onApply" />
    </div>
    <GpibSettings v-model="sourceMeterConfig.gpib" />
    <OutputSettings v-model="sourceMeterConfig.output" />
    <SourceSettings v-model="sourceMeterConfig.source" />
    <MeasureSettings v-model="sourceMeterConfig.measure" />
    <FiltersSettings v-model="sourceMeterConfig.filter" />
  </div>
</template>
