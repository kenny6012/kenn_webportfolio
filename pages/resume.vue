<template>
  <div>
    <Header/>
    <Contents/>
  </div>
</template>

<script>
import Contents from "../components/contents.vue";
import Header from "../components/header.vue";
export default {
  layout: "sidebar",
  components: {
    Contents,
    Header
  },
}
</script>

<style>

</style>