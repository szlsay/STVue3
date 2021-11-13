<template>
  <div>
    <tab-control :titles="titles" @titleClick="titleClick"></tab-control>
    <h2>{{currentIndex}}</h2>
  </div>
</template>

<script>
import TabControl from './TabControl.vue'
  export default {
  components: { TabControl },
  data(){
    return {
      currentIndex: 0,
      titles: ['000', '111', '222']
    }
  },
    methods: {
      titleClick(index){
        console.log(index);
        this.currentIndex = index;
      }
    }
  }
</script>

<style scoped>

</style>