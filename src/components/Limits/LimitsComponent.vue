<script setup>
import { reactive } from "vue";
import CurrentLimitsSettings from "./CurrentLimitsSettings.vue";
import TemperatureLimitsSettings from "./TemperatureLimitsSettings.vue";
import { createDefaultLimitsConfig } from './config.js'


const limitsConfig = reactive(createDefaultLimitsConfig());

</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Limits Setup</h2>
    <CurrentLimitsSettings v-model="limitsConfig.current" />
    <TemperatureLimitsSettings v-model="limitsConfig.temperature" />
  </div>
</template>
