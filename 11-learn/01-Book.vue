<template>
  <div>
    <template v-if="showTB">
      <table>
        <thead>
          <th>id</th>
          <th>name</th>
          <th>date</th>
          <th>price</th>
          <th>action</th>
        </thead>
        <tbody>
          <tr v-for="(book, index) in books" :key="index">
            <td>{{ book.id }}</td>
            <td>{{ book.name }}</td>
            <td>{{ book.date }}</td>
            <td>{{ formatPrice(book.price) }}</td>
            <td>
              <button
                @click="reduce(index)"
                :disabled="book.count < 1 ? true : false"
              >
                -
              </button>
              <span>{{ book.count }}</span>
              <button @click="add(index)">+</button>
              <button @click="remove(index)">❎</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3">总价:{{ formatPrice(countSum) }}</td>
          </tr>
        </tfoot>
      </table>
    </template>
    <template v-else>
      <h2>空空如也</h2>
    </template>
  </div>
</template>
<script>
import { computed, ref, toRef } from "vue";
export default {
  setup(props) {
    const books = ref([
      {
        id: 1,
        name: "《算法导论》",
        date: "2006-9",
        price: 85.0,
        count: 1,
      },
      {
        id: 2,
        name: "《UNIX编程艺术》",
        date: "2006-2",
        price: 59.0,
        count: 1,
      },
      {
        id: 3,
        name: "《编程珠玑》",
        date: "2008-10",
        price: 39.0,
        count: 1,
      },
      {
        id: 4,
        name: "《代码大全》",
        date: "2006-3",
        price: 128.0,
        count: 1,
      },
    ]);

    const countSum = computed(() => {
      let sum = 0;
      for (let index = 0; index < books.value.length; index++) {
        const price = books.value[index].price;
        const count = books.value[index].count;
        sum += price * count;
      }
      return sum;
    });
    
    const formatPrice = (price) => "￥" + price;
    const add = (index) => books.value[index].count++;
    const reduce = (index) => books.value[index].count--;
    const remove = (index) => books.value.splice(index, 1);
    const showTB = computed(() => books.value.length > 0);
    return {
      books,
      formatPrice,
      add,
      reduce,
      countSum,
      remove,
      showTB,
    };
  },
};
</script>

<style lang="scss" scoped></style>
