<script setup lang="ts"></script>

<template>
  <div class="bill-header">
    <div class="total">
      <div>
        <span>总支出：</span>
        <span class="total-count">￥12.34</span>
      </div>
      <div style="margin-left: 15px;">
        <span>总收入：</span>
        <span class="total-count">￥12.34</span>
      </div>
    </div>
    <div class="select-type-date">
    全部类型
    </div>
  </div>
</template>

<style lang="less" scoped>
.bill-header {
  background-color: #007fff;
  color: white;
  font-size: 14px;

  .total{
    display: flex;
    justify-content: flex-start;
    padding: 10px 20px;
    &-count{
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
