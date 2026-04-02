<script setup>
import { reactive, ref } from 'vue'
import {createDefaultMeasureResultsConfig} from "./config"
import SaveResultsFileSettings from './SaveResultsFileSettings.vue';
import SaveResultsPathSettings from './SaveResultsPathSettings.vue';
import ApplyConfigButton from '../others/ApplyConfigButton.vue';
import AutoSaveFileSettings from './AutoSaveFileSettings.vue';
import { updateMeasureResultsConfig } from '@/services/configService';

const measureResultsConfig = reactive(createDefaultMeasureResultsConfig());

const loading = ref(false)

const onApply = async () => {
  if (loading.value) return
  loading.value = true

  try {
    const result = await updateMeasureResultsConfig(measureResultsConfig)
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
      <h2 class="text-2xl font-bold w-65">Measure Results Setup</h2>
      <ApplyConfigButton :loading="loading" @apply="onApply" />
    </div>
    <SaveResultsFileSettings v-model="measureResultsConfig.fileName"/>
    <AutoSaveFileSettings v-model="measureResultsConfig.autoSave"></AutoSaveFileSettings>
    <SaveResultsPathSettings v-model="measureResultsConfig.filePath" />
  </div>
</template> 