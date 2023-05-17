<template>
  <div class="main_layout" ref="main_layout" :style="'width: '+final_width+'px;'">
    <div class="side_layout">

      <div class="side_container" ref="side_cont">
        <!-- SIDE HEADER -->
        <div class="side_header">
          <div class="side_picture"></div>
          <div class="side_profile">
            <div class="profile_name">{{ name }}</div>
            <div class="profile_title">{{ title }}</div>
          </div>
        </div>
        <!-- SCROLLABLE SIDE -->
        <div class="side_scroll" :style="'height:'+final_height+'px;'">
          <!-- SIDE CONTENTS -->
          <div class="side_content">
            <!-- CONTACTS -->
            <div class="side_panel">
              <div class="display_B text_title"> Contacts:</div>
              <div class="display_B text_sub"> <fa :icon="['fa', 'envelope']"/> &ensp; {{ email }} </div>
              <div class="display_B text_sub"> <fa :icon="['fa', 'phone-square']"/> &ensp; {{ mobile }} </div>
              <div class="display_B text_sub"> <fa :icon="['fa', 'globe-asia']"/> &ensp; {{ address }} </div>
            </div>
            <!-- SKILLS -->
            <div class="side_panel">
              <div class="display_B text_title"> Skills: </div>
              <div class="skill_set" v-for="(skills, s) in skills" :key="'s'+s">
                <div class="display_B text_title2">{{ skills.skill }}</div>
                <div class="display_B prog_bar">
                  <div class="prog" :style="'width:'+skills.lvl+'%;'"></div>
                </div>
              </div>
            </div>
            <!-- KNOWLEDGE -->
            <div class="side_panel">
              <div class="display_B text_title"> Knowledgeable in: </div>
              <div class="display_B text_sub" v-for="(know, k) in knowledge" :key="'k'+k"> <fa :icon="['fa', 'check-circle']"/> &ensp; {{ know.skill }} </div>
            </div>

          </div>
        </div>

      </div>

    </div>
    <div :style="'height:'+computedHeight+'px;'" class="content_layout" >
        <Nuxt />
    </div>

    
  </div>
</template>

<script>
export default {
// name: 'IndexPage',
data() {
  return {
    final_width: "",
    computedHeight: "",
    name: "Kenn Brian Nillama",
    title: "UI/UX | Graphic Designer | Visual Artist",
    email: "kennbnillama@gmail.com",
    mobile: "(+63) 977-781-3785",
    address: "General Santos City 9500, Mindanao, Philippines",
    skills: [
      { skill: "Figma, Adobe XD", lvl: 80 },
      { skill: "Adobe Photoshop, Illustrator, Canva", lvl: 80 },
      { skill: "Vue, Vuex", lvl: 60 },
      { skill: "Bootstrap, Bootstrap Vue", lvl: 80 },
      { skill: "Nativescript-vue ", lvl: 60 },
    ],
    knowledge: [
      { skill: "Github / Bitbucket" },
      { skill: "JIRA / Trello / Confluence" },
      { skill: "Axios" },
      { skill: "Wordpress" },
      { skill: "SEO" },
    ],
    final_height: "",
    final_scroll_height: "",
  }
},
methods: {
  
},
mounted() {
  // GET MAIN LAYOUT'S HEIGHT
  var main_layout = parseInt(this.$refs.main_layout.offsetHeight);
  var main_layout_w = parseInt(this.$refs.main_layout.offsetWidth);

  // GET SIDE CONTAINER'S HEIGHT
  const side_container_height = this.$refs.side_cont.offsetHeight;
  var needed_height;

  // FOR CONTENT SCROLL
  var sh = side_container_height;
  this.computedHeight = parseInt(sh) + 50; // idk why I had to put 50

  // FOR WIDTH
  if(main_layout_w > 1300) {
    this.final_width = 1344;
  }
  else {
    this.final_width = main_layout_w;
  }
  if(main_layout < 733) {
    alert("Redirecting to mobile version");
    needed_height = parseFloat(side_container_height) * 0.65; // 65 percent
  }
  else if(main_layout > 800) {
    needed_height = parseFloat(side_container_height) * 0.99; // 80 percent
  }
  else {
    needed_height = parseFloat(side_container_height) * 0.70; // 70 percent
  }
  this.final_height = parseInt(needed_height);

},
computed: {
}
}
</script>

<style lang="scss">
.side_picture{
  background-image: url("../assets/kenn_brian_dp.png");
  background-repeat: no-repeat;
  background-size: 120%;
  background-position: center;
  image-rendering: smooth;
}
</style>
