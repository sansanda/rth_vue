<script setup>
const model = defineModel();
</script>

<template>
  <div class="mb-6 p-4 border rounded-lg">
    <h3 class="font-semibold mb-3">Filters</h3>

    <div class="grid grid-cols-1 gap-4">
      <div>
        <label>Enable Filter</label>
        <input type="checkbox" v-model="model.enabled" />
      </div>

      <div>
        <label>Filter Type</label>
        <select v-model="model.type" class="input">
          <option>Moving</option>
          <option>Repeat</option>
        </select>
      </div>

      <div>
        <label>Filter Window</label>
        <input type="number" v-model="model.window" step="0.1" value="0.1" />
      </div>

      <div>
        <label>Filter Count</label>
        <select v-model="model.type" class="input">
          <option>Moving</option>
          <option>Repeat</option>
        </select>
      </div>
    </div>
  </div>
</template>
