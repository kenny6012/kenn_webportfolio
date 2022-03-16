<template>
  <div class="main_container">
    <!-- NAVIGATIONS -->
    <div class="navigations">
      <!-- NAVIGATIONS -->
      <button class="nav_butn" v-for="(navs, n) in panels" :key="'n'+n" @click="scrollView(navs.id)">
        <fa :icon="['fa', navs.icon]"/> &ensp; {{ navs.title }}
      </button>

      <!-- PANELS -->
      <div class="panel_container" v-for="(data, d) in panels" :key="'d'+d" :ref="data.id" :id="data.id">
      <div class="panel_title">{{ data.title }}</div>
        <div class="panel_content" v-for="(cont, c) in data.contents" :key="'c'+c">
          <div class="content_title">{{ cont.title }}</div>
          <div class="content_sub">{{ cont.sub }}</div>
          <div class="content_note">{{ cont.note }}</div>
          <div class="content_desc" v-show="cont.cont != ''">{{ cont.cont }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    panels: [
      {
        id: "workExp",
        title: "Work Experiences",
        icon: "users",
        contents: [
          {
            title: "User Experience Designer (UX)", 
            sub: "Biotech Farms Inc.", 
            note: "January 2019 - Preset",
            cont: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ]
      },
      {
        id: "projEnv",
        title: "Projects Involved",
        icon: "folder",
        contents: [
          {
            title: "Recruitment Tracking System", 
            sub: "Primary UX Designer", 
            note: "Vue, Nuxt, Bootstrap-vue, SASS",
            cont: ""
          },
          {
            title: "Check Management Application", 
            sub: "Primary UX Designer", 
            note: "Vue, Nuxt, Bootstrap-vue, SASS",
            cont: ""
          },
          {
            title: "Master Data Management System", 
            sub: "Primary UX Designer", 
            note: "Vue, Nuxt, Bootstrap-vue, SASS",
            cont: ""
          },
          {
            title: "Assets Management System", 
            sub: "Secondary UX Designer", 
            note: "Vue, Nuxt, Bootstrap-vue, SASS",
            cont: ""
          },
          {
            title: "REvive Booking System", 
            sub: "Secondary UX Designer", 
            note: "Vue, Nuxt, Bootstrap-vue, SASS",
            cont: ""
          },
        ]
      },
      {
        id: "educBac",
        title: "Educational Background",
        icon: "school",
        contents: [
          {
            title: "Mindanao State University (MSU)", 
            sub: "BS Information Technology", 
            note: "SY: 2015 - 2019",
            cont: ""
          }
        ]
      },
      {
        id: "achMil",
        title: "Achievements & Milestones",
        icon: "star",
        contents: [
          {
            title: "SAP Be Visual! Sketching Basics for IT Business, Passer", 
            sub: "December 2020", 
            note: "Certification",
            cont: ""
          },
          {
            title: "Civil Service Profesional, Passer", 
            sub: "March 2018", 
            note: "Certification",
            cont: ""
          },
          {
            title: "Cargill Scholar", 
            sub: "Year: 2006 - 2010", 
            note: "Scholarship",
            cont: ""
          },
          {
            title: "Graduated with Honors", 
            sub: "Year: 2006", 
            note: "DWCES",
            cont: ""
          },
        ]
      },
      
    ],
  }
},
methods: {
  scrollView(refName) {
    // this.$refs[refName].scrollIntoView();
    // console.log(refName);
    // console.log(this.$refs[refName]);
    // console.log(this.$refs[refName][0].id);
    document.getElementById(refName).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start'  });
  }
},
mounted() {
  
},
components: {

},
created() {
},
computed: {
  
}
}
</script>
