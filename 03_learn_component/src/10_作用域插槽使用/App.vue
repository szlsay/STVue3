<template>
  <div>
    <!-- 编译作用域 -->
    <!-- <child-cpn>
      <button>{{title}}</button>
    </child-cpn> -->

    <!-- <show-names :names="names">
      <template v-slot="coderwhy">
        <button>{{coderwhy.item}}-{{coderwhy.index}}</button>
      </template>
    </show-names> -->

    <!-- <show-names :names="names" v-slot="coderwhy">
      <button>{{coderwhy.item}}-{{coderwhy.index}}</button>
    </show-names> -->

    <!-- 注意: 如果还有其他的具名插槽, 那么默认插槽也必须使用template来编写 -->
    <show-names :names="names">
      <template v-slot="coderwhy">
        <button>{{coderwhy.item}}-{{coderwhy.index}}</button>
      </template>

      <template v-slot:why>
        <h2>我是why的插入内容</h2>
      </template>
    </show-names>

    <!-- <show-names :names="names">
      <template v-slot="slotProps">
        <strong>{{slotProps.item}}-{{slotProps.index}}</strong>
      </template>
    </show-names> -->
  </div>
</template>

<script>
  import ChildCpn from './ChildCpn.vue';
  import ShowNames from './ShowNames.vue';

  export default {
    components: {
      ChildCpn,
      ShowNames
    },
    data() {
      return {
        names: ["why", "kobe", "james", "curry"],
        title: "123"
      }
    }
  }
</script>

<style scoped>

</style>