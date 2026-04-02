<script setup>
const model = defineModel();
</script>
<template>
  <div class="mb-6 p-4 border rounded-lg">
    <h3 class="font-semibold mb-3">Auto Save File</h3>
    <div class="max-w-md">
      <div class="grid gap-4">
        <div class="grid grid-cols-[200px_1fr] items-center gap-3">
          <label>Enable AutoSave</label>
          <input type="checkbox" v-model="model.autosave" class="justify-self-start" />
        </div>

        <div class="grid grid-cols-[200px_1fr] items-center gap-3">
          <label>AutoSave Period (mins)</label>
          <input type="number" v-model="model.autosave_period" :step="model.autosave_period_step"
            :min="model.autosave_period_min" :max="model.autosave_period_max"
            class="justify-self-start border rounded-md" />
        </div>

      </div>
    </div>
  </div>
</template>
