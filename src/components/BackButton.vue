<script setup>
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';
defineProps({
    buttonText: {
        type: String,
        default: 'Back to Home',
    },
    buttonLink: {
        type: String,
        default: '/'
    }
},
);
</script>


<template>
    <section>
        <div class="container m-auto py-6 px-6">
            <RouterLink :to='buttonLink' class="text-green-500 hover:text-green-600 flex items-center">
                <i class="pi pi-arrow-circle-left mr-2"></i>                         
                <label> {{ buttonText }}</label> 
            </RouterLink>
        </div>
    </section>
</template>