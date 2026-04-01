<script setup>
import { ref, watch, nextTick } from 'vue'

const props = defineProps({
    logs: Array
})

const consoleEl = ref(null)

watch(
    () => props.logs.length,
    async () => {
        await nextTick()
        if (consoleEl.value) {
            consoleEl.value.scrollTop = consoleEl.value.scrollHeight
        }
    }
)
</script>

<template>
    <div class="console-container">
        <div class="console" ref="consoleEl">
            <div v-for="(log, index) in logs" :key="index" class="log-line" :class="log.level">
                [{{ log.time }}] {{ log.message }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.console-container {
    height: 100%;
    /* 🔥 ocupa todo el espacio disponible */
    display: flex;
    flex-direction: column;

    border: 1px solid #ccc;
    border-radius: 8px;
    background: #111;
}

.console {
    flex: 1;
    /* 🔥 crece SIEMPRE */
    overflow-y: auto;

    padding: 10px;

    font-family: monospace;
    font-size: 13px;
    color: #eee;
}
</style>