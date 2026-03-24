<script setup>
const model = defineModel();
</script>

<template>
  <div class="mb-6 p-4 border rounded-lg">
    <h3 class="font-semibold mb-3">Filters</h3>

    <div class="max-w-md">
      <div class="grid gap-4">

        <div class="grid grid-cols-[150px_1fr] items-center gap-3">
          <label>Enable Filter</label>
          <input 
            type="checkbox" 
            v-model="model.filter_enabled"
            class="justify-self-start"
          />
        </div>

        <div class="grid grid-cols-[150px_1fr] items-center gap-3">
          <label>Filter Type</label>
          <select v-model="model.filter_type" class="input w-full">
            <option>Moving</option>
            <option>Repeat</option>
          </select>
        </div>

        <div class="grid grid-cols-[150px_1fr] items-center gap-3">
          <label>Filter Window</label>
          <input 
            type="number" 
            v-model="model.filter_window"
            :step="model.filter_window_step"
            :min="model.filter_window_min"
            :max="model.filter_window_max"
            class="justify-self-start border rounded-md"
          />
        </div>

        <div class="grid grid-cols-[150px_1fr] items-center gap-3">
          <label>Filter Count</label>
          <input 
            type="number" 
            v-model="model.filter_count"
            :step="model.filter_count_step"
            :min="model.filter_count_min"
            :max="model.filter_count_max"
            class="justify-self-start border rounded-md"
          />
        </div>

      </div>
    </div>
  </div>
</template>