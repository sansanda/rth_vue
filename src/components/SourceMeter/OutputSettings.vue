<script setup>
const model = defineModel();
</script>

<template>
  <div class="mb-6 p-4 border rounded-lg">
    <h3 class="font-semibold mb-3">Output Options</h3>

    <div class="max-w-md">
      <div class="grid gap-4">
        <div class="grid grid-cols-[150px_1fr] items-center gap-3">
          <label>Enable Output</label>
          <input
            type="checkbox"
            v-model="model.enabled"
            class="justify-self-start"/>
          <label>Output Connection</label>
          <select v-model="model.connection" class="input w-full">
            <option v-for="c in model.connectionOptions" :key="c" :value="c">
              {{ c }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
