<script setup>
const model = defineModel();
</script>

<template>
  <div class="mb-6 p-4 border rounded-lg">
    <h3 class="font-semibold mb-3">Current Limits Options</h3>

    <div class="max-w-md">
      <div class="grid gap-4">
        <div class="grid grid-cols-[200px_1fr] items-center gap-3">
          <label>Max Current (Amps)</label>
          <input
            type="number"
            v-model="model.max_current"
            :step="model.max_current_step"
            :min="model.max_current_min"
            :max="model.max_current_max"
            class="w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>
