<script setup>
const props = defineProps({
    state: String
})

const emit = defineEmits(['play', 'pause', 'stop'])
</script>

<template>
    <div class="mb-6 p-4 border rounded-lg">
        <h3 class="font-semibold mb-3">Process Control</h3>

        <div class="controls">

            <!-- PLAY -->
            <button class="btn" :disabled="state === 'running'" @click="emit('play')">
                <span class="led" :class="{ green: state === 'running' }"></span>
                ▶ Play
            </button>

            <!-- PAUSE -->
            <button class="btn" :disabled="state !== 'running'" @click="emit('pause')">
                <span class="led" :class="{ orange: state === 'paused' }"></span>
                ⏸ Pause
            </button>

            <!-- STOP -->
            <button class="btn" :disabled="state === 'idle'" @click="emit('stop')">
                <span class="led" :class="{ red: state === 'stopped' }"></span>
                ⏹ Stop
            </button>

        </div>
    </div>
</template>

<style scoped>
.controls {
    display: flex;
    gap: 16px;
}

/* Botón base */
.btn {
    display: flex;
    align-items: center;
    gap: 10px;

    padding: 14px 22px;
    font-size: 16px;
    font-weight: 600;

    border-radius: 10px;
    border: 1px solid #ccc;

    background: #f5f5f5;
    cursor: pointer;

    transition: all 0.15s ease;
}

/* Hover */
.btn:hover:not(:disabled) {
    background: #e0e0e0;
}

/* Disabled */
.btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* LED indicador */
.led {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #999;
}

/* Estados LED */
.led.green {
    background: #2e7d32;
    box-shadow: 0 0 6px #2e7d32;
}

.led.orange {
    background: #f9a825;
    box-shadow: 0 0 6px #f9a825;
}

.led.red {
    background: #c62828;
    box-shadow: 0 0 6px #c62828;
}
</style>