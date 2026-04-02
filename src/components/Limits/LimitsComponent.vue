<script setup>
import { reactive, ref } from "vue";
import CurrentLimitsSettings from "./CurrentLimitsSettings.vue";
import TemperatureLimitsSettings from "./TemperatureLimitsSettings.vue";
import { createDefaultLimitsConfig } from './config.js'
import ApplyConfigButton from "../others/ApplyConfigButton.vue";
import { updateLimitsConfig } from "@/services/configService";

const limitsConfig = reactive(createDefaultLimitsConfig());
const loading = ref(false)

const onApply = async () => {
  if (loading.value) return
  loading.value = true

  try {
    const result = await updateLimitsConfig(limitsConfig)
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
      <h2 class="text-2xl font-bold w-65">Limits Setup</h2>
      <ApplyConfigButton :loading="loading" @apply="onApply" />
    </div>
    <CurrentLimitsSettings v-model="limitsConfig.current" />
    <TemperatureLimitsSettings v-model="limitsConfig.temperature" />
  </div>
</template>
