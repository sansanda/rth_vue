<script setup>
const model = defineModel();
</script>
<template>
    <div class="mb-6 p-4 border rounded-lg">
        <h3 class="font-semibold mb-3">Path</h3>
        <div class="max-w-md">
            <div class="grid gap-4">
                <div class="grid grid-cols-[150px_1fr] items-center gap-3">
                    <label title="Indicate the phone number in case of send message option">Folder Path</label>
                    <input type="text" v-model="model.path" class="justify-self-start border rounded-md" />
                </div>
            </div>
        </div>
    </div>
</template>