<template>
  <div class="main_container" id="main_cont">
    <!-- HEADER -->
    <Header />
    
    <!-- NAVIGATIONS -->
    <div class="navigations">
      <!-- NAVIGATIONS -->
      <button class="nav_butn" v-for="(navs, n) in panels" :key="'n'+n" @click="scrollView(navs.id)">
        <fa :icon="['fa', navs.icon]"/> &ensp; {{ navs.title }}
      </button>

      <!-- PANELS -->
      <div class="panel_container" v-for="(data, d) in panels" :key="'d'+d" :ref="data.id" :id="data.id">
      <div class="panel_title" :id="'pnl_'+data.id">{{ data.title }}</div>
        <div class="panel_content" v-for="(cont, c) in data.contents" :key="'c'+c">
          <div class="content_title">{{ cont.title }}</div>
          <div class="content_sub">{{ cont.sub }}</div>
          <div class="content_note">{{ cont.note }}</div>
          <br>
          <div class="content_urls">
            <div 
            v-for="(urls, u) in cont.links" 
            v-show="cont.links.length > 0" 
            :key="'u'+u"
            class="content_urlname content_link_btn" @click="go(urls.url)">
              {{urls.linkname}} &ensp; <fa :icon="['fa', 'arrow-alt-circle-right']"/>
            </div>
          </div>
          <div class="content_desc" 
            v-for="(li, l) in cont.cont" 
            :key="'l'+l" 
            v-show="cont.cont.length > 0"
          > 
            &bullet;&ensp;{{ li.li }}
          </div>
          <div class="content_link" v-show="cont.links.length < 1">
            <button class="content_link_btn" v-show="cont.link != ''" @click="go(cont.link)">
              Click here to view &ensp; <fa :icon="['fa', 'arrow-alt-circle-right']"/>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- SIDE BUTTONS -->
    <!-- <div class="side_bottons">
      <button 
      class="side_botton" 
      v-for="(navs, n) in panels" 
      :key="'n'+n" 
      v-b-tooltip.hover.left
      :title="navs.title"
      :id="'btn_'+navs.id"
      @click="scrollView(navs.id)">
        <fa :icon="['fa', navs.icon]"/>
      </button>
    </div> -->
    <div class="side_bottons">
      <button 
      class="side_botton" 
      v-for="(navs, n) in panels" 
      :key="'n'+n" 
      :id="'btn_'+navs.id"
      @click="scrollView(navs.id)">
        <fa :icon="['fa', navs.icon]"/>
      </button>
    </div>

    <div class="goTop">
      <button class="goTopBtn" @click="goTop()" >
        <fa :icon="['fa', 'caret-up']"/>
      </button>
    </div>
    
  </div>
</template>

<script>
import Header from "./header.vue";
export default {
components: {
  Header
},
data() {
  return {
    panels: [
      {
        id: "portf",
        title: "Portfolio",
        icon: "folder",
        contents: [
          {
            title: "Live Website Designs", 
            sub: "",
            link: "https://websitesamples.netlify.app/",
            note: "Basic Web Tools | Vue JS | Nuxt JS | SASS | Bootstrap Vue",
            links: [
              // {
              //   linkname: "AI Health Pro",
              //   url: "https://aihealthpros.com/"
              // },
              {
                linkname: "Black One",
                url: "https://blackone.netlify.app/"
              },
              {
                linkname: "Black Two",
                url: "https://blacktwo.netlify.app/"
              },
              {
                linkname: "Black Three",
                url: "https://blackthree.netlify.app/"
              },
              {
                linkname: "Magazine Two",
                url: "https://magazinetwo.netlify.app/"
              },
              {
                linkname: "Magazine Three",
                url: "https://magazinethree.netlify.app/"
              },
              {
                linkname: "Landing Three",
                url: "https://landingthree.netlify.app/"
              },
            ],
            cont: []
          },
          {
            title: "Figma Designs", 
            sub: "",
            link: "https://github.com/kenny6012",
            note: "Personal UI/UX Works",
            links: [
              {
                linkname: "JHunter: Job Hunt App",
                url: "https://www.figma.com/file/jyCWPKiLTIoYM57cuq0vM9/Web-Portfolio?type=design&node-id=204-7&mode=design"
              },
              {
                linkname: "ReqTrack: Reqruitment Tracking System (Screenshots)",
                url: "https://drive.google.com/drive/folders/1l1Bi0zc10jri6l0zimWzVx9T1rwTE3a9?usp=sharing"
              },
              {
                linkname: "Lou Geh Playlist: Personal Music Tacker",
                url: "https://www.figma.com/file/J6dQNb43e1i4709Styf3Nj/BFI-PlayList?type=design&node-id=0-1&mode=design"
              },
              {
                linkname: "Sample: StyleGuide",
                url: "https://www.figma.com/file/TjZ4CI6vrcnob0Jy5L2f74/BFI-Style-Guide?type=design&node-id=1-20&mode=design"
              },
            ],
            cont: []
          },
          {
            title: "Graphic Designs", 
            sub: "",
            link: "https://drive.google.com/drive/folders/1jFDv-0ltW9uy9nVQOwo4icLCWnwmbnCw?usp=sharing",
            note: "Graphic designs from previous works",
            links: [],
            cont: []
          },
          {
            title: "Digital Arts", 
            sub: "",
            link: "https://drive.google.com/drive/folders/1qJaPsZ4SwmvmyHTGCXG1PpwjramjqU5q?usp=sharing",
            note: "Using Huion pentab and Adobe Photoshop",
            links: [],
            cont: []
          },
          
        ]
      },
      {
        id: "workExp",
        title: "Work Experiences",
        icon: "users",
        contents: [
          {
            title: "UI/UX Designer", 
            sub: "Joblu Technologies Pte. Ltd", 
            link: "",
            note: "December 2022 - May 2023",
            links: [],
            cont: [
              {li: " Project-based (4 months contract)."},
              {li: "User Research, Prototyping, and Wireframing."},
              {li: "Web and Mobile Designs"},
            ]
          },
          {
            title: "UI/UX Designer & Graphic Designer", 
            sub: "Biotech Farms Inc.", 
            link: "",
            note: "January 2020 - October 2022",
            links: [],
            cont: [
              {li: "UX Designer, front-end development and API integration."},
              {li: "Worked with Web and Mobile apps."},
              {li: "Freelance Graphic Designer under the same company."},
            ]
          },
          {
            title: "Graphic Designer & Web Designer", 
            sub: "Starbright School and Office Depot Inc.", 
            link: "",
            note: "June 2019 - October 2019",
            links: [],
            cont: 
            [
              {li: "Senior Graphic Designer and Web Developer."},
              {li: "Worked with Points/Rewards System and Logistics System."},
              {li: "Social Media postings, ads, flyers, and brochures."},
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
            title: "Joblu - Find Jobs & Hire Talent", 
            sub: "Primary UX Designer", 
            note: "Figma",
            link: "",
            links: [],
            cont: [
              {li: "Prototyping"},
              {li: "Wireframimg"},
              {li: "Desktop / Mobile Designs"},
            ]
          },
          {
            title: "RecTrack - Recruitment Tracking System", 
            sub: "Primary UX Designer & Front-end Developer", 
            note: "Vue, Nuxt, Bootstrap-vue, SASS",
            link: "",
            links: [],
            cont: [
              {li: "Proposed a refactoring of old web system. Now in production."},
              {li: "Used Axios for API integration."},
              {li: "Desktop / Mobile version."},
            ]
          },
          {
            title: "RMRS - Raw Materials Receiving System", 
            sub: "Primary UX Designer & Front-end Developer", 
            note: "Nativescript-vue, Android Studio, SASS",
            link: "",
            links: [],
            cont: [
              {li: "Created the first mobile app for the company's existing webapp."},
              {li: "Used nativescript-vue and android studio emmulator."},
              {li: "Used Axios for API integrations."},
            ]
          },
          {
            title: "Biotech Farms Inc. - Company Website", 
            sub: "UI / UX Designer", 
            link: "",
            note: "Wordpress, Yoast SEO",
            links: [],
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
            links: [],
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
            links: [],
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
            links: [],
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
            links: [],
            cont: []
          },
        ]
      },
    ],
  }
},
methods: {
  goTop() {
    // SCROLL TO TOP
    document.getElementById("main_cont").scrollIntoView({behavior: 'smooth', block: 'start'});
    // REMOVE ALL EXTRA STYLES
    for(var c=0; c < this.panels.length; c++) {
      document.getElementById('pnl_'+this.panels[c].id).classList.remove("extra_color");
      document.getElementById(this.panels[c].id).classList.remove("extra_border");
      document.getElementById('btn_'+this.panels[c].id).classList.remove("extra_sideBtn");
    }
  },
  go(link) {
    window.open(`${link}`);
  },
  scrollView(refName) {
    document.getElementById(refName).scrollIntoView({behavior: 'smooth', block: 'center', inline: 'start'});
    for(var c=0; c < this.panels.length; c++) {
      if(this.panels[c].id == refName) { // ADD EXTRA CSS FOR EMPHASIS
        document.getElementById(this.panels[c].id).classList.add("extra_border");
        document.getElementById('pnl_'+this.panels[c].id).classList.add("extra_color");
        document.getElementById('btn_'+this.panels[c].id).classList.add("extra_sideBtn");
      }
      else { //REMOVE EXTRA CSS IF NOT CLICKED
        document.getElementById('btn_'+this.panels[c].id).classList.remove("extra_sideBtn");
        document.getElementById('pnl_'+this.panels[c].id).classList.remove("extra_color");
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
