<template>
  <div>
    <ul>
      <li v-for="(title, index) in titles" :key="index">
        <show-message :title="title" :isActive='currentIndex == index' @superadd="superadd"></show-message>
      </li>
    </ul>
    <h2>{{suptitle}}</h2>
  </div>
</template>

<script>
import {ref} from 'vue'
import ShowMessage from "./ShowMessage.vue";
export default {
  components: { ShowMessage },
  setup(props) {
    const currentIndex = ref(0) 
    const titles = ref(['衣服', '鞋子', '裤子'])
    const superadd = ((title) => {
      currentIndex.value = titles.value.indexOf(title)
      suptitle.value = title
    })
    const suptitle = ref(titles.value[0])
    return {
      titles,currentIndex,superadd,suptitle
    }
  },
};
</script>

<style scoped>
li {
  display: inline-block;
  width: 100px;
  height: 50px;
  list-style: none;
}

</style>