<script setup>
const model = defineModel();
</script>

<template>
  <div class="mb-6 p-4 border rounded-lg">
    <h3 class="font-semibold mb-3">GPIB Communication</h3>

    <div class="max-w-md">
      <div class="grid gap-4">

        <div class="grid grid-cols-[150px_1fr] items-center gap-3">
          <label title="Select the address of the multimeter">Address</label>
          <input type="number" v-model="model.address" :min="model.address_min" :max="model.address_max"
            :step="model.address_step" class="justify-self-start"/>
        </div>

        <div class="grid grid-cols-[150px_1fr] items-center gap-3">
          <label>Timeout (ms)</label>
          <input type="number" v-model="model.timeout" :min="model.timeout_min" :max="model.timeout_max"
            :step="model.timeout_step" class="justify-self-start" />
        </div>
      </div>
    </div>
  </div>
</template>