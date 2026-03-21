<script setup>
const model = defineModel()
</script>

<template>
  <div class="mb-6 p-4 border rounded-lg">
    <h3 class="font-semibold mb-3">GPIB Communication</h3>

    <div class="grid grid-cols-2 gap-4">
      <div>
        <label>Address</label>
        <input type="number" v-model="model.address" class="input" />
      </div>

      <div>
        <label>Timeout (ms)</label>
        <input type="number" v-model="model.timeout" class="input" />
      </div>
    </div>
  </div>
</template>