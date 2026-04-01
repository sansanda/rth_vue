<script setup>
const model = defineModel();
</script>

<template>
  <div class="mb-6 p-4 border rounded-lg">
    <h3 class="font-semibold mb-3">GPIB Communication</h3>

    <div class="max-w-md">
      <div class="grid gap-4">

        <div class="grid grid-cols-[150px_1fr] items-center gap-3">
          <label>GPIB Address</label>
          <select v-model="model.address" class="input w-min">
            <option v-for="address in model.addressOptions" :key="address" :value="address">
              {{ address }}
            </option>
          </select>
        </div>

        <div class="grid grid-cols-[150px_1fr] items-center gap-3">
          <label>Timeout (ms)</label>
          <input type="number" v-model="model.timeout" :min="model.timeout_min" :max="model.timeout_max"
            :step="model.timeout_step" class="justify-self-start border rounded-md" />
        </div>

      </div>
    </div>
  </div>
</template>