<script setup>
defineProps({
  title: String,
});
const model = defineModel();
</script>

<template>
  <div class="mb-6 p-4 border rounded-lg">
    <h3 class="font-semibold mb-3">{{ title }}</h3>

    <div class="max-w-md">
      <div class="grid gap-4">

        <div class="grid grid-cols-[150px_1fr] items-center gap-3">
          <label>Enabled</label>
          <input type="checkbox" v-model="model.enabled" class="justify-self-start" />
        </div>

        <div class="grid grid-cols-[150px_1fr] items-center gap-3">
          <label>Channel Number</label>
          <select v-model="model.number" class="input w-full">
            <option v-for="n in model.numberOptions" :key="n" :value="n">
              {{ n }}
            </option>
          </select>
        </div>

      </div>
    </div>
  </div>
</template>