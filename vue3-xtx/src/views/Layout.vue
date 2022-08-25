<!--
 * @LastEditTime: 2022-08-25 22:40:05
-->
<template>
<app-navbar></app-navbar>
<AppHeader></AppHeader>
<router-view></router-view>
</template>

<script setup>
import appNavbar from '@/components/app-navbar.vue'
import AppHeader from '../components/app-header.vue'
import { useStore } from 'vuex'
const store = useStore()
store.dispatch('category/getList')
</script>

<style lang="less" scoped>

</style>
