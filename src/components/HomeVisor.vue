<script setup>
import { reactive, computed } from 'vue';
import BackButton from './BackButton.vue';
import Card from './Card.vue';
import MultimeterComponent from './Multimeter/MultimeterComponent.vue';
import SourceMeterComponent from './SourceMeterComponent.vue';
import LimitsComponent from './LimitsComponent.vue';
import ProcessComponent from './ProcessComponent.vue';
import DataResultsComponent from './DataResultsComponent.vue';

const state = reactive({
  selectedComponent: 'MultimeterComponent',
});


const currentComponent = computed(() => {
  return {
    'MultimeterComponent': MultimeterComponent,
    'SourceMeterComponent': SourceMeterComponent,
    'LimitsComponent': LimitsComponent,
    'ProcessComponent': ProcessComponent,
    'DataResultsComponent': DataResultsComponent
  }[state.selectedComponent] || MultimeterComponent
});

</script>

<template>
  <BackButton></BackButton>
  <section class="h-screen">
    <div class="grid grid-cols-[300px_1fr] h-full">
      <!-- COLUMNA IZQUIERDA -->
      <div class="bg-gray-100 p-4 overflow-y-auto">
        <Card @click="state.selectedComponent = 'MultimeterComponent'">Multimeter Setup</Card>
        <Card @click="state.selectedComponent = 'SourceMeterComponent'">Source Meter Setup</Card>
        <Card @click="state.selectedComponent = 'LimitsComponent'">Limits Setup</Card>
        <Card @click="state.selectedComponent = 'ProcessComponent'">Process Setup</Card>
        <Card @click="state.selectedComponent = 'DataResultsComponent'">Data Results Setup</Card>
      </div>

      <!-- COLUMNA DERECHA -->
      <div class="p-6">
        <component :is="currentComponent" />
      </div>
    </div>
  </section>
</template>
