<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import HomeVisor from '@/components/HomeVisor.vue';
import JobListings from '@/components/JobListings.vue'
</script>
<template>
    <Hero />
    <HomeVisor />
    <!-- <JobListings v-bind:limit="3" v-bind:show-button="true" /> -->
</template>