<script setup>
const model = defineModel();
</script>
<template>
  <div class="mb-6 p-4 border rounded-lg">
    <h3 class="font-semibold mb-3">File</h3>
    <div class="max-w-md">
      <div class="grid gap-4">

        <div class="grid grid-cols-[200px_1fr] items-center gap-3">
          <label>File Name</label>
          <input type="text" v-model="model.name" class="justify-self-start border rounded-md" />
        </div>

        <div class="grid grid-cols-[200px_1fr] items-center gap-3">
          <label>Enable TimeStamp</label>
          <input type="checkbox" v-model="model.enableTimestamp" class="justify-self-start" />
        </div>

      </div>
    </div>
  </div>
</template>
