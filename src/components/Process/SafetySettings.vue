<script setup>
const model = defineModel();
</script>
<template>
    <div class="mb-6 p-4 border rounded-lg">
        <h3 class="font-semibold mb-3">Safety Settings</h3>
        <div class="max-w-md">
            <div class="grid gap-4">
                <div class="grid grid-cols-[250px_1fr] items-center gap-3">
                    <label title="Select if you want to be informed when the process ends">Stop On Current Limit</label>
                    <input type="checkbox" v-model="model.stop_on_current_limit" class="justify-self-start" />
                </div>
                <div class="grid grid-cols-[250px_1fr] items-center gap-3">
                    <label title="Indicate the phone number in case of send message option">Max Current</label>
                    <input type="text" v-model="model.max_current" class="justify-self-start border rounded-md" />
                </div>
                <div class="grid grid-cols-[250px_1fr] items-center gap-3">
                    <label title="Select if you want to be informed when the process ends">Cooldown On Overtemperature</label>
                    <input type="checkbox" v-model="model.cooldown_on_overtemp" class="justify-self-start" />
                </div>
                <div class="grid grid-cols-[250px_1fr] items-center gap-3">
                    <label title="Indicate the phone number in case of send message option">Max Temperature</label>
                    <input type="text" v-model="model.max_temperature" class="justify-self-start border rounded-md" />
                </div>
            </div>
        </div>
    </div>
</template>