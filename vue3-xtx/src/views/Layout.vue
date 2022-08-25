<template>
<app-navbar></app-navbar>
<AppHeader></AppHeader>
<router-view></router-view>
</template>

<script setup>
import appNavbar from '@/components/app-navbar.vue'
import AppHeader from '../components/app-header.vue'
</script>

<style lang="less" scoped>

</style>
