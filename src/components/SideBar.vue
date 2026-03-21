<script setup>
defineProps({
  items: Array,
  selected: String
})

const emit = defineEmits(['select'])
</script>

<template>
  <div class="bg-gray-100 p-4 overflow-y-auto h-full">
    <div v-for="item in items" :key="item.key">
      <div
        @click="emit('select', item.key)"
        class="cursor-pointer p-3 rounded-lg mb-2 transition"
        :class="selected === item.key 
          ? 'bg-blue-500 text-white' 
          : 'bg-white hover:bg-gray-200'"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>