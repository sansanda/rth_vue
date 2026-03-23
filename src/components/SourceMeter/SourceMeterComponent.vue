<script setup>
import { reactive } from "vue";

import GpibSettings from "../GPIB/GPIBSettings.vue";
import FiltersSettings from "../Filters/FiltersSettings.vue";
import SourceSettings from "./SourceSettings.vue";
import OutputSettings from "./OutputSettings.vue";
import MeasureSettings from "./MeasureSettings.vue";
import { createDefaultSourceConfig } from './config.js'

const sourceMeterConfig = reactive(createDefaultSourceConfig());

</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Source Meter Setup</h2>
    <GpibSettings v-model="sourceMeterConfig.gpib" />
    <OutputSettings v-model="sourceMeterConfig.output"/>
    <SourceSettings v-model="sourceMeterConfig.source"/>
    <MeasureSettings v-model="sourceMeterConfig.measure"/>
    <FiltersSettings v-model="sourceMeterConfig.filter" />
  </div>
</template>
