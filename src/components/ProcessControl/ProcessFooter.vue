<script setup>
const props = defineProps({
  state: String,
  progress: Number,
  step: Number,
  stepDescription: String
})
</script>

<template>
  <div class="mt-4 p-2 border-t text-sm text-gray-600 flex gap-4">
    <span>Estado: {{ state }}</span>
    <span>Progreso: {{ progress }}%</span>
    <span>Etapa: {{ step }}</span>
    <span>Descripción: {{ stepDescription }}</span>
  </div>
</template>