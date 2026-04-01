<script setup>
import logo from '@/assets/img/logo.png';
import { RouterLink, useRoute } from 'vue-router';
const isActiveLink = (routePath) => {
    const route = useRoute();
    return route.path === routePath;
};
</script>


<template>
    <nav class="bg-green-700 border-b border-green-500">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="flex h-20 items-center justify-between">
                <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                    <!-- Logo -->
                    <RouterLink class="flex shrink-0 items-center mr-4" to="/">
                        <img class="h-10 w-auto" v-bind:src="logo" alt="Rth App" />
                        <span class="hidden md:block text-white text-2xl font-bold ml-2">Rth App</span>
                    </RouterLink>
                    <div class="md:ml-auto">
                        <div class="flex space-x-2">
                            <RouterLink to="/" v-bind:class="[isActiveLink('/') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white',
                                'text-white', 
                                'px-3', 
                                'py-2', 
                                'rounded-md']"> Configuration </RouterLink>
                            <RouterLink to="/process" v-bind:class="[isActiveLink('/jobs') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white',
                                'text-white', 
                                'px-3', 
                                'py-2', 
                                'rounded-md']"> Process </RouterLink>
                            <RouterLink to="/results-summary" v-bind:class="[isActiveLink('/jobs/add') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white',
                                'text-white', 
                                'px-3', 
                                'py-2', 
                                'rounded-md']"> Results Summary </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>