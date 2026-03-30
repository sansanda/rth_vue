<script setup>
const sensor_type_options = ["PT100"] // ["PT100", "PT1000", "RTD", "TK", "TJ"]
const model = defineModel()
</script>

<template>
  <div class="mb-6 p-4 border rounded-lg">
    <h3 class="font-semibold mb-3">Temperature Sensors</h3>

    <div class="max-w-md">
      <div class="grid grid-cols-[100px_1fr] items-center gap-3">
        <label>Type</label>
        <select v-model="model.type" class="input w-min">
          <option v-for="opt in sensor_type_options" :key="opt" :value="opt">
            {{ opt }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>