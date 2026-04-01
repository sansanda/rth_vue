<script setup>
const model = defineModel();
</script>

<template>
  <div class="mb-6 p-4 border rounded-lg">
    <h3 class="font-semibold mb-3">Measure Options</h3>

    <div class="max-w-md">
      <div class="grid gap-4">
        
        <div class="grid grid-cols-[150px_1fr] items-center gap-3">
          <label>NPLC</label>
          <select v-model="model.nplc" class="input w-min">
            <option
              v-for="nplc in model.nplc_options"
              :key="nplc"
              :value="nplc"
            >
              {{ nplc }}
            </option>
          </select>
        </div>

        <div class="grid grid-cols-[150px_1fr] items-center gap-3">
          <label>Measure Resolution</label>
          <select v-model="model.measurement_resolution" class="input w-min">
            <option
              v-for="mr in model.measurement_resolution_options"
              :key="mr"
              :value="mr"
            >
              {{ mr }}
            </option>
          </select>
        </div>

      </div>
    </div>
  </div>
</template>
