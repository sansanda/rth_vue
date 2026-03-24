<script setup>
import { reactive } from 'vue'
import {createDefaultMeasureResultsConfig} from "./config"
import SaveResultsFileSettings from './SaveResultsFileSettings.vue';
import SaveResultsPathSettings from './SaveResultsPathSettings.vue';
const measureResultsConfig = reactive(createDefaultMeasureResultsConfig());

</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Measure Results Setup</h2>
    <SaveResultsFileSettings v-model="measureResultsConfig.fileName"/>
    <SaveResultsPathSettings v-model="measureResultsConfig.filePath" />
  </div>
</template> 