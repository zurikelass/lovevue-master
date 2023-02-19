<script setup>
// import NavigationMenu from '../components/menu/navigationMenu.vue';
import MainLayout from './mainLayout.vue';

</script>
<template>
    <MainLayout>
        <template #header>
            <NavigationMenu/>
        </template>
        <slot/>
    </MainLayout>
</template>