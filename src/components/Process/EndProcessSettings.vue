<script setup>
const model = defineModel();
</script>
<template>
    <div class="mb-6 p-4 border rounded-lg">
        <h3 class="font-semibold mb-3">End Process</h3>
        <div class="max-w-md">
            <div class="grid gap-4">
                <div class="grid grid-cols-[150px_1fr] items-center gap-3">
                    <label title="Select if you want to be informed when the process ends">Send Message</label>
                    <input type="checkbox" v-model="model.send_message" class="justify-self-start" />
                </div>
                <div class="grid grid-cols-[150px_1fr] items-center gap-3">
                    <label title="Indicate the phone number in case of send message option">Phone Number</label>
                    <input type="text" v-model="model.phone_number" class="justify-self-start border rounded-md" />
                </div>
            </div>
        </div>
    </div>
</template>