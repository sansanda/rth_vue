<script setup>
import { reactive } from "vue";
import { createDefaultProcessConfig } from './config.js'
const processConfig = reactive(createDefaultProcessConfig());
</script>

<template>
    <div>
        <h2 class="text-2xl font-bold mb-6">End Process</h2>
    </div>
</template>