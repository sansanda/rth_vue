<script setup>
const model = defineModel();
</script>

<template>
  <div class="mb-6 p-4 border rounded-lg">
    <h3 class="font-semibold mb-3">Source Options</h3>

    <div class="max-w-md">
      <div class="grid gap-4">
        <div class="grid grid-cols-[200px_1fr] items-center gap-3">
          <label>Current (Amps)</label>
          <input
            type="number"
            v-model="model.current"
            :step="model.current_step"
            :min="model.current_min"
            :max="model.current_max"
            class="justify-self-start border rounded-md"
          />
        </div>

        <div class="grid grid-cols-[200px_1fr] items-center gap-3">
          <label>Voltage Compliance (Volts)</label>
          <input
            type="number"
            v-model="model.voltage_compliance"
            :step="model.voltage_compliance_step"
            :min="model.voltage_compliance_min"
            :max="model.voltage_compliance_max"
            class="justify-self-start border rounded-md"
          />
        </div>
        <div class="grid grid-cols-[200px_1fr] items-center gap-3">
          <label>Delay (ms)</label>
          <input
            type="number"
            v-model="model.delay_ms"
            :step="model.delay_ms_step"
            :min="model.delay_ms_min"
            :max="model.delay_ms_max"
            class="justify-self-start border rounded-md"
          />
        </div>
      </div>
    </div>
  </div>
</template>
