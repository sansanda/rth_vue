<script setup>
const model = defineModel()
</script>

<template>
  <div class="mb-6 p-4 border rounded-lg">
    <h3 class="font-semibold mb-3">Filters</h3>

    <div class="grid grid-cols-2 gap-4">
      <div>
        <label>Enable Filter</label>
        <input type="checkbox" v-model="model.enabled" />
      </div>

      <div>
        <label>NPLC</label>
        <input type="number" step="0.1" v-model="model.nplc" class="input" />
      </div>
    </div>
  </div>
</template>