<template>
  <div id="stapp">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './Header';
  import Main from './Main';
  import Footer from './Footer';

  export default {
    components: {
      Header,
      Main,
      Footer
    }
  }
</script>

<style scoped>
#stapp{
  background-color: red;
}
</style>