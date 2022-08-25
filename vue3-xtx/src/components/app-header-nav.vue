<template>
<ul class="app-header-nav">
  <li><router-link to="/">首页</router-link></li>
  <li v-for="item in list" :key="item.id">
  <router-link to="/">{{item.name}}</router-link>
  </li>
</ul>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()
const list = computed(() => {
  return store.state.category.list
})
</script>

<style lang="less" scoped>
.app-header-nav{
  width: 820px;
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    > a{
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }
    &:hover{
      > a{
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
    }
  }
}
</style>
