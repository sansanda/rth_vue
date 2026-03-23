<script setup>
import { reactive } from 'vue'

import {createDefaultProcessConfig} from "./config"

const processConfig = reactive(createDefaultProcessConfig());

</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Process Setup</h2>
    <InitProcessSettings v-model="processConfig.Init"/>
    <RamUpSettings v-model="processConfig.RampUp" />
    <TemperatureStabilizationSettings title="Top Channel (Copper Spreader)" v-model="processConfig.TemperatureStabilization" />
    <MeasureParametersSettings title="Bottom Channel Aluminium HeatSink" v-model="processConfig.MeasureParameters" />
    <RampDownSettings v-model="processConfig.RampDown" />
    <EndProcessSettings v-model="processConfig.End"/>
  </div>
</template>