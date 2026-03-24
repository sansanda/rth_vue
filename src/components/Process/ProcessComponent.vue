<script setup>
import { reactive } from 'vue'
import InitProcessSettings from './InitProcessSettings.vue';
import RamUpSettings from './RamUpSettings.vue';
import RampDownSettings from './RampDownSettings.vue';
import TemperatureStabilizationSettings from './TemperatureStabilizationSettings.vue';
import MeasureParametersSettings from './MeasureParametersSettings.vue';
import EndProcessSettings from './EndProcessSettings.vue';
import {createDefaultProcessConfig} from "./config"
const processConfig = reactive(createDefaultProcessConfig());

</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Process Setup</h2>
    <InitProcessSettings v-model="processConfig.Init"/>
    <RamUpSettings v-model="processConfig.TemperatureRampUp" />
    <TemperatureStabilizationSettings title="Top Channel (Copper Spreader)" v-model="processConfig.TemperatureStabilization" />
    <MeasureParametersSettings title="Bottom Channel Aluminium HeatSink" v-model="processConfig.MeasureParameters" />
    <RampDownSettings v-model="processConfig.TemperatureRampDown" />
    <EndProcessSettings v-model="processConfig.End"/>
  </div>
</template>