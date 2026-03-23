<script setup>
const model = defineModel();
</script>

<template>
  <div class="mb-6 p-4 border rounded-lg">
    <h3 class="font-semibold mb-3">Temperature Limit Options</h3>
    <div class="max-w-md">
      <div class="grid gap-4">
        <div class="grid grid-cols-[200px_1fr] items-center gap-3">
          <label>Max Temperature (Celsius)</label>
          <input
            type="number"
            v-model="model.max_temperature"
            :step="model.max_temperature_step"
            :min="model.max_temperature_min"
            :max="model.max_temperature_max"
            class="w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>
