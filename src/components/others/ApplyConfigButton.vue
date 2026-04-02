<script setup>
const emit = defineEmits(['apply'])
const props = defineProps({
  loading : false,
})
</script>

<template>
  <button @click="emit('apply')" :disabled="loading" class="px-4 py-2 rounded-md font-semibold text-white
         bg-green-600 hover:bg-green-700
         disabled:bg-gray-400
         disabled:text-gray-200
         disabled:cursor-not-allowed
         transition">
    Update Configuration
  </button>
</template>