<template>
<div class="document_scroll" id="document_scroll">
    <div class="p_head">
        <div class="p_head_content">
            <div class="p_head_nav" v-for="(nav, n) in panels" :key="'n'+n" @click="goTo(nav.id)">
                {{ nav.title }}
            </div>
        </div>
    </div>
    <div class="p_banner">
        <div class="p_banner_content">
            <div class="p_banner_div">
                <div class="p_banner_text">
                    Hi! I'm <br> <span class="p_banner_text_main">Kenn</span> Brian Nillama <br>
                    <span class="p_banner_text_sub">I am a UI/UX Designer who can also do Graphics Design, Web Development, and Visual Arts.</span>
                    <br>
                    <button class="b_button_main">
                        <fa :icon="['fa', 'arrow-alt-circle-down']"/>
                        <a href="/files/cv_kenn_brian_nillama_04.pdf" download>Download CV</a>
                    </button>
                </div>
            </div>
            <div class="p_banner_div">
                <div class="p_banner_picture"></div>
            </div>
        </div>
    </div>
    <div class="b_content">
        <div class="b_content_main">
            <div class="b_content_side">
                <div class="b_side_head">
                    <div class="b_side_pic"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="textHeight">g</div>
</div>
</template>

<script>
export default {
data() {
    return {
    name: "Kenn Brian Nillama",
    title: "UI/UX | Graphic Designer | Visual Artist",
    email: "kennbnillama@gmail.com",
    mobile: "(+63) 977-781-3785",
    address: "General Santos City 9500, Mindanao, Philippines",
    skills: [
      { skill: "Adobe Photoshop, Illustrator", lvl: 90 },
      { skill: "Figma ", lvl: 60 },
      { skill: "Vue, Vuex", lvl: 80 },
      { skill: "Bootstrap, Bootstrap Vue", lvl: 85 },
      { skill: "Nativescript-vue ", lvl: 60 },
    ],
    knowledge: [
      { skill: "Github / Bitbucket" },
      { skill: "JIRA" },
      { skill: "Axios" },
      { skill: "Wordpress" },
      { skill: "SEO" },
    ],
    panels: [
        {
            id: "portf",
            title: "Portfolio",
            icon: "folder",
            contents: [
            {
                title: "Graphic Designs", 
                sub: "",
                link: "https://drive.google.com/drive/folders/1jFDv-0ltW9uy9nVQOwo4icLCWnwmbnCw?usp=sharing",
                note: "Graphic designs from previous works",
                cont: []
            },
            {
                title: "Digital Arts", 
                sub: "",
                link: "https://drive.google.com/drive/folders/1qJaPsZ4SwmvmyHTGCXG1PpwjramjqU5q?usp=sharing",
                note: "Using Huion pentab and Adobe Photoshop",
                cont: []
            },
            {
                title: "Website Designs", 
                sub: "",
                link: "https://websitesamples.netlify.app/",
                note: "Web Design",
                cont: []
            },
            {
                title: "Github Projects", 
                sub: "",
                link: "https://github.com/kenny6012",
                note: "Sample Projects and previous works",
                cont: []
            }
            ]
        },
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
                {li: "This role made my experience even wider in the designing field."},
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
                {li: "This was my first job after graduating from the university and it gave me just the right amount of experience to start my career in graphics and web designing."},
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
            sub: "Primary UX Designer", 
            note: "Nativescript-vue, Android Studio, SASS",
            link: "",
            cont: [
              {li: "Created the first mobile app version for the company's existing web application."},
              {li: "Used nativescript-vue and android studio emmulator."},
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
        ]
      },
      {
        id: "educBac",
        title: "Educational Background",
        icon: "book-open",
        contents: [
          {
            title: "Notre Dame of Dadiangas University (NDDU)", 
            sub: "BS Computer Science", 
            link: "",
            note: "SY: 2015 - 2019",
            cont: [
              {li: "Montagne Scholar"},
              {li: "Junior Programers Group (Documentation Head)."},
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
    ],
    
    }
},
mounted() {
    var body = document.getElementById("document_scroll");
    window.onscroll = function() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        //alert("1");
    } else {
        //alert("2");
    }
};
}
}
</script>

<style lang="scss">
.p_banner_picture{
  background-image: url("../assets/me_sitting.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>