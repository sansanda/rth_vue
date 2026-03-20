<script setup>
import BackButton from './BackButton.vue';
import Card from './Card.vue';

</script>

<template>
  <BackButton></BackButton>
  <section class="h-screen">
    <div class="grid grid-cols-[300px_1fr] h-full">
      <!-- COLUMNA IZQUIERDA -->
      <div class="bg-gray-100 p-4 overflow-y-auto">
        <Card @click="selected = 'MultimeterSetup'">Multimeter Setup</Card>
        <Card @click="selected = 'SourceMeterSetup'">Source Meter Setup</Card>
        <Card @click="selected = 'Limits ¡Setup'">Limits Setup</Card>
        <Card @click="selected = 'AdjustCurrentSetup'">Adjust Current Setup</Card>
        <Card @click="selected = 'TemperatureStabilizationSetup'">Temperature Stabilization Setup</Card>
        <Card @click="selected = 'MeasureProcessSetup'">Measure Process Setup</Card>
        <Card @click="selected = 'DataResultsSetup'">Data Results Setup</Card>
      </div>

      <!-- COLUMNA DERECHA -->
      <div class="p-6">
        <component :is="currentComponent" />
      </div>
    </div>
  </section>
</template>
