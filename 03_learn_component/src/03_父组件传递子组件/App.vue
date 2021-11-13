<template>
  <div>
    <show-message title="title0" content="content0"></show-message>
    <show-message :title="title" :content="content"></show-message>
    <show-message :title="message.title" :content="message.content"></show-message>
    <show-message v-bind="message"></show-message>
    <show-message id="abc" class="why" title="title1" content="content1" message-info=""></show-message>
    <multi-root-element id="aaaa"></multi-root-element>
  </div>
</template>

<script>
  import ShowMessage from './ShowMessage.vue';
  import MultiRootElement from './MultiRootElement.vue';

  export default {
    components: {
      ShowMessage,
      MultiRootElement
    },
    data() {
      return {
        title: "app-title",
        content: "app-content",
        message: {
          title: "message-title",
          content: "message-content"
        }
      }
    }
  }
</script>

<style scoped>

</style>