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
          <br>
          <div class="content_desc" v-for="(li, l) in cont.cont" :key="'l'+l" v-show="cont.cont.length > 0"> &bullet;&ensp;{{ li.li }}</div>
          <div class="content_link">
            <button class="content_link_btn" v-show="cont.link != ''" @click="go(cont.link)">
              Click here to view &ensp; <fa :icon="['fa', 'arrow-alt-circle-right']"/>
            </button>
          </div>
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
            title: "Graphics Designer", 
            sub: "Biotech Farms Inc.", 
            link: "",
            note: "November 2019 - Preset",
            cont: [
              {li: "This is my first role in the company."},
              {li: "Typically working on job posting layouts and infographics."},
              {li: "Usually using Adobe Photoshop and Adobe Illustrator as my tools."},
            ]
          },
          {
            title: "User Experience Designer (UX)", 
            sub: "Biotech Farms Inc.", 
            link: "",
            note: "January 2020 - Preset",
            cont: [
              {li: "My 2nd role, along with the graphics designing."},
              {li: "This role made my experience even wider in front-end designing field."},
              {li: "Typically working on UI designs and API integrations."},
            ]
          },
          {
            title: "Web Designer", 
            sub: "Starbright School and Office Depot Inc.", 
            link: "",
            note: "June 2019 - October 2019",
            cont: 
            [
              {li: "This was my first job after graduating from the university and it gave me just the right amount of experience to start me career in graphics and web designing."},
            ]
          },
        ]
      },
      {
        id: "projEnv",
        title: "Projects Involved",
        icon: "project-diagram",
        contents: [
          {
            title: "Recruitment Tracking System", 
            sub: "Primary UX Designer", 
            note: "Vue, Nuxt, Bootstrap-vue, SASS",
            link: "",
            cont: [
              {li: "Proposed a refactoring of their old web system and is now deployed for production."},
              {li: "Used Axios for API integration."},
              {li: "Desktop / Mobile version."},
            ]
          },
          {
            title: "Raw Materials Receiving System", 
            sub: "UI / UX Designer", 
            note: "Nativescript-vue, Android Studio, SASS",
            link: "",
            cont: [
              {li: "Assigned as the primary UX Designer for the mobile app version."},
              {li: "Used nativescript-vue and android studio emmulator to develop the mobile app."},
              {li: "Used Axios for API integrations."},
            ]
          },
          {
            title: "Company Website", 
            sub: "UI / UX Designer", 
            link: "",
            note: "Wordpress, Yoast SEO",
            cont: [
              {li: "Used wordpress for this project."},
              {li: "Created my own wordpress template from scratch."},
              {li: "Was able to train regarding SEO."},
            ]
          },
          {
            title: "Circular Economy Infographics", 
            sub: "Graphics Designer", 
            link: "",
            note: "Adobe Photoshop, Adoba Illustrator",
            cont: [
              {li: "Discussed the company's circular economy with my boss / employer."},
              {li: "Was able to convert the company's sustainable productions into an infopgraphics."},
            ]
          },
        ]
      },
      {
        id: "educBac",
        title: "Educational Background",
        icon: "school",
        contents: [
          {
            title: "Notre Dame of Dadiangas University (NDDU)", 
            sub: "BS Computer Science", 
            link: "",
            note: "SY: 2015 - 2019",
            cont: [
              {li: "Montagne Scholar"},
              {li: "Junior Programers Group: Documentation Head."},
              {li: "Course Representative."},
            ]
          }
        ]
      },
      {
        id: "others",
        title: "Other Relevant Experiences",
        icon: "star",
        contents: [
          {
            title: "Visual Artistry", 
            sub: "Present", 
            link: "",
            note: "Self-taught",
            cont: [
              {li: "Able to create colored and black n' white portraits."},
              {li: "Character designs and sketches."},
              {li: "Digital and Traditional ways of creating art pieces."}
            ]
          },
          {
            title: "Web Résumé and Portfolio", 
            sub: "Year 2022", 
            link: "",
            note: "Vue, Nuxt, SASS, Github, Netlify",
            cont: [
              {li: "I made this very webiste you're looking right now."},
              {li: "I guess this could count as a part of my portfolio."},
            ]
          },
          {
            title: "SAP Be Visual! Sketching Basics for IT Business, Passer", 
            sub: "December 2020", 
            link: "",
            note: "Certification",
            cont: []
          },
        ]
      },
      {
        id: "portf",
        title: "Portfolio",
        icon: "folder",
        contents: [
          {
            title: "Graphic Designs", 
            sub: "",
            link: "https://github.com",
            note: "Graphic designs from previous works",
            cont: []
          },
          {
            title: "Digital Arts", 
            sub: "",
            link: "https://github.com",
            note: "Using Huion pentab and Adobe Photoshop",
            cont: []
          },
          {
            title: "Portraits", 
            sub: "",
            link: "https://github.com",
            note: "Colored and Graphite pencils, and Vellum paper",
            cont: []
          },
          {
            title: "Website Designs", 
            sub: "",
            link: "https://github.com",
            note: "Web Design",
            cont: []
          }
        ]
      },
      
    ],
  }
},
methods: {
  go(link) {
    // location.href='"'+link+'"';
    window.open(`${link}`);
  },
  scrollView(refName) {
    // this.$refs[refName].scrollIntoView();
    // console.log(refName);
    // console.log(this.$refs[refName]);
    // console.log(this.$refs[refName][0].id);
    document.getElementById(refName).scrollIntoView({behavior: 'smooth', block: 'center', inline: 'start'});
    for(var c=0; c < this.panels.length; c++) {
      if(this.panels[c].id == refName) {
        document.getElementById(this.panels[c].id).classList.add("extra_border");
      }
      else {
        document.getElementById(this.panels[c].id).classList.remove("extra_border");
      }
    }
  },
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
