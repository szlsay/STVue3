<template>
  <div class="tab-control">
     <div v-for="(title, index) in titles" :key="title" class="tab-control-item" :class="{active : currentIndex == index}" @click="handle(index)">
       <span>{{title}}</span>
     </div>
  </div>
</template>

<script>
  export default {
    emits: {
      titleClick: null
    },
    props: {
      titles: []
    },
    data(){
      return {
        currentIndex: 0
      }
    },
    methods: {
      handle(index){
        this.currentIndex = index;
        this.$emit("titleClick", index)
        console.log(index);
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
  }

  .tab-control-item {
    flex: 1;
    text-align: center;
  }

  .tab-control-item.active {
    color: red;
  }

  .tab-control-item.active span {
    border-bottom: 3px solid red;
    padding: 5px 10px;
  }
</style>