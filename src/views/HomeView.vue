<script setup>
import { reactive, computed } from "vue";
import Sidebar from "../components/SideBar.vue";

import MultimeterComponent from "../components/Multimeter/MultimeterComponent.vue";
import SourceMeterComponent from "../components/SourceMeter/SourceMeterComponent.vue";
import LimitsComponent from "../components/Limits/LimitsComponent.vue";
import ProcessComponent from "../components/ProcessComponent.vue";
import DataResultsComponent from "../components/DataResultsComponent.vue";

const state = reactive({
  selectedComponent: "MultimeterComponent",
});

const componentsMap = {
  MultimeterComponent,
  SourceMeterComponent,
  LimitsComponent,
  ProcessComponent,
  DataResultsComponent,
};

const componentsList = [
  { key: "MultimeterComponent", label: "Multimeter Setup" },
  { key: "SourceMeterComponent", label: "Source Meter Setup" },
  { key: "LimitsComponent", label: "Limits Setup" },
  { key: "ProcessComponent", label: "Process Setup" },
  { key: "DataResultsComponent", label: "Data Results" },
];

const currentComponent = computed(
  () => componentsMap[state.selectedComponent] || MultimeterComponent,
);
</script>

<template>
  <section class="h-screen">
    <div class="grid grid-cols-[300px_1fr] h-full">
      <!-- Sidebar -->
      <Sidebar
        :items="componentsList"
        :selected="state.selectedComponent"
        @select="state.selectedComponent = $event"
      />

      <!-- Visor -->
      <div class="p-6">
        <component :is="currentComponent" />
      </div>
    </div>
  </section>
</template>
