<script setup>
const model = defineModel();
</script>

<template>
  <div class="mb-6 p-4 border rounded-lg">
    <h3 class="font-semibold mb-3">Measure Parameters</h3>
    <div class="max-w-md">
      <div class="grid gap-4">
        <div class="grid grid-cols-[350px_1fr] items-center gap-3">
          <label
            title="Indicate the number of measures of the process"
            >Number of measures</label
          >
          <input
            type="number"
            v-model="model.n_measures"
            :min="model.n_measures_min"
            :max="model.n_measures_max"
            :step="model.n_measures_step"
            class="justify-self-start border rounded-md"
          />
        </div>
        <div class="grid grid-cols-[350px_1fr] items-center gap-3">
          <label
            title="Indicate the sample period"
            >Sample period (seconds)</label
          >
          <input
            type="number"
            v-model="model.sample_period"
            :min="model.sample_period_min"
            :max="model.sample_period_max"
            :step="model.sample_period_step"
            class="justify-self-start border rounded-md"
          />
        </div>
        <div class="grid grid-cols-[350px_1fr] items-center gap-3">
          <label
            title="Indicate the time gap in ms between the measure of the top and the bottom temperatures"
            >Time gap between channels measures (ms)</label
          >
          <input
            type="number"
            v-model="model.time_betwwen_channels"
            :min="model.time_betwwen_channels_min"
            :max="model.time_betwwen_channels_max"
            :step="model.time_betwwen_channels_step"
            class="justify-self-start border rounded-md"
          />
        </div>
      </div>
    </div>
  </div>
</template>
