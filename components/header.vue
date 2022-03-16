<template>
  <div class="main_header">
      <div class="header_d">
          <span class="cover_title">Driven &amp; Passionate</span>
          <br>
          <span class="cover_sub">always looking for ways to create and design things, for better experience.</span>

      </div>
  </div>
</template>

<script>
export default {
data() {
  return {
  }
},
components: {

},
created() {
},
computed: {
  
}
}
</script>

<style lang="scss">
.main_header{
  background-image: url("../assets/cover.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  // background-position: center;
  background-position-y: -350px;
  background-position-x: 110px;
  background-attachment: fixed;
}
.header_d {
    z-index: 2;
}
</style>
