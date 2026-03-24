<script setup>
const model = defineModel();
</script>
<template>
  <div class="mb-6 p-4 border rounded-lg">
    <h3 class="font-semibold mb-3">Temperature Ramp Up</h3>

    <div class="max-w-md">
      <div class="grid gap-4">
        <div class="grid grid-cols-[250px_1fr] items-center gap-3">
          <label
            title="Indicate the temperature you want at the top of the sample"
            >Temperature (ºC)</label
          >
          <input
            type="number"
            v-model="model.temperature"
            :min="model.temperature_min"
            :max="model.temperature_max"
            :step="model.temperature_step"
            class="justify-self-start border rounded-md"
          />
        </div>
        <div class="grid grid-cols-[250px_1fr] items-center gap-3">
          <label
            title="Indicate the time to reach temperature that you want at the top of the sample"
            >Time to reach temperature (mins)</label
          >
          <input
            type="number"
            v-model="model.time_to"
            :min="model.time_to_min"
            :max="model.time_to_max"
            :step="model.time_to_step"
            class="justify-self-start border rounded-md"
          />
        </div>
      </div>
    </div>
  </div>
</template>
