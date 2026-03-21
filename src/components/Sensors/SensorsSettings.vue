<script setup>
const model = defineModel()
</script>

<template>
  <div class="mb-6 p-4 border rounded-lg">
    <h3 class="font-semibold mb-3">Temperature Sensor</h3>

    <select v-model="model.type" class="input">
      <option>PT100</option>
      <option>PT1000</option>
      <option>Thermocouple K</option>
      <option>Thermocouple J</option>
    </select>
  </div>
</template>