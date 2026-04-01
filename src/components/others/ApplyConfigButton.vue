<script setup>
const emit = defineEmits(['apply'])
</script>

<template>
  <button
    @click="emit('apply')"
    class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-semibold disabled:opacity-50"
  >
    Apply
  </button>
</template>