<script setup>
import { reactive } from "vue";
const model = defineModel();
</script>

<template>
  <div class="mb-6 p-4 border rounded-lg">
    <h3 class="font-semibold mb-3">Temperature Stabilization</h3>
    <div class="max-w-md">
      <div class="grid gap-4">
        <div class="grid grid-cols-[350px_1fr] items-center gap-3">
          <label
            title="Indicate the phone number in case of send message option"
            >Time to wait for temperature stabilization (mins)</label
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
