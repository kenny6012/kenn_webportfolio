<template>
  <div class="main_container" id="main_cont">
    <!-- HEADER -->
    <!-- <Header /> -->
    
    <!-- NAVIGATIONS -->
    <div class="navigations">
      <!-- NAVIGATIONS -->
      <button class="nav_butn" v-for="(navs, n) in panels" :key="'n'+n" @click="scrollView(navs.id)">
        <fa :icon="['fa', navs.icon]"/> &ensp; {{ navs.title }}
      </button>

      <!-- PANELS -->
      <div class="panel_container" v-for="(data, d) in panels" :key="'d'+d" :ref="data.id" :id="data.id">
        <div class="panel_title" :id="'pnl_'+data.id">{{ data.title }}</div>
        <div class="panel_holder">
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
          // {
          //   title: "Video Introduction", 
          //   sub: "",
          //   link: "https://drive.google.com/file/d/1H1jk_GCDjak4cp_0EXE1Y891_LzzGcBE/view?usp=sharing",
          //   note: "A short video introduction about myself",
          //   links: [],
          //   cont: []
          // },
          {
            title: "UX Case Studies", 
            sub: "",
            link: "",
            note: "Case Studies focusing on solving real-world problems",
            links: [
              {
                linkname: "Case Study No. 1: Stride!",
                url: "https://drive.google.com/file/d/1FEf851_ruDTp6SiXxSeJzz4QIVzmWrzc/view?usp=sharing"
              },
            ],
            cont: []
          },
          {
            title: "Figma Works", 
            sub: "",
            link: "",
            note: "Converted to PDF Files to avoid being copied directly to figma",
            links: [
              // {
              //   linkname: "Job Hunting App",
              //   url: "https://www.figma.com/proto/jyCWPKiLTIoYM57cuq0vM9/Web-Portfolio?node-id=210-314&p=f&t=l8RIKZd9hx9AImhI-0&scaling=scale-down&content-scaling=fixed&page-id=204%3A7&starting-point-node-id=210%3A314&show-proto-sidebar=1"
              // },
              // {
              //   linkname: "Reqruitment Tracking System",
              //   url: "https://drive.google.com/drive/folders/1l1Bi0zc10jri6l0zimWzVx9T1rwTE3a9?usp=sharing"
              // },
              // {
              //   linkname: "Personal Music Tacker",
              //   url: "https://www.figma.com/file/J6dQNb43e1i4709Styf3Nj/BFI-PlayList?type=design&node-id=0-1&mode=design"
              // },
              {
                linkname: "Stride! MVP Screens",
                url: "https://drive.google.com/file/d/1GkGi45gOnd_iXSzzzc2R9kJbAYLlYgCW/view?usp=sharing"
              },
              {
                linkname: "Style Guide: All Natural",
                url: "https://drive.google.com/file/d/1Mkjj_44KCUiE5CXucihpM0ogOyQPTV3c/view?usp=sharing"
              },
              {
                linkname: "Style Guide: Health Care",
                url: "https://drive.google.com/file/d/1d1dnz9Mwy7SZmk1PcPuc7BMDXAhbvdJu/view?usp=sharing"
              },
            ],
            cont: []
          },
                    {
            title: "Live Prototypes", 
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
            note: "Using Huion pentab, iPad, or XPpen Display Tablet",
            links: [],
            cont: []
          },
          
        ]
      },
      {
        id: "skillsTools",
        title: "Skills and Tools",
        icon: "user-cog",
        contents: [
          {
            title: "UI/UX Designer", 
            sub: "", 
            link: "",
            note: "",
            links: [],
            cont: [
              {li: "Figma / Adobe XD"},
              {li: "User Research / UX Researc / Prototyping / Wireframing"},
              {li: "Mobile-First Design / User-Centered Design / Responsive Design"},
            ]
          },
          {
            title: "Front-end (FE) Web Development", 
            sub: "", 
            link: "",
            note: "",
            links: [],
            cont: [
              {li: "Vue JS / Nuxt JS"},
              {li: "Vuetify / Bootstrap / Material Design / Scss"},
              {li: "JS, HMTL, CSS"},
              {li: "JQuery / PHP"},
              {li: "Axios / Socket IO"},
              {li: "VS Code"},
            ]
          },
          {
            title: "Graphic Design/Art", 
            sub: "", 
            link: "",
            note: "",
            links: [],
            cont: [
              {li: "Adobe Photoshop / Adobe Illustrator"},
              {li: "Figma / Canva"},
              {li: "Clip Studio Paint / Procreate"},
              {li: "Color Theory / Typography / Branding"},
              {li: "Visual Hierarchy / Information Hierarchy"},
              {li: "Product Mockups"},
            ]
          },
        ]
      },
      {
        id: "workExp",
        title: "Work Experiences",
        icon: "users",
        contents: [
          {
            title: "UI/UX Designer | Front-end Developer", 
            sub: "Apaly Health Corporation", 
            link: "",
            note: "December 2024 - Aug 2025",
            links: [],
            cont: [
              {li: "Vue JS Developer"},
              {li: "UI/UX Design - User Research, Prototyping, and Wire-framing using Figma.."},
              {li: "Working on multiple web products."},
            ]
          },
          {
            title: "UI/UX Designer | Front-end Developer", 
            sub: "Capella BPO", 
            link: "",
            note: "May 2023 - Dec 2023",
            links: [],
            cont: [
              {li: "Vue JS Developer"},
              {li: "UI/UX Design - User Research, Prototyping, and Wire-framing using Figma.."},
              {li: "Worked on their websites using Wordpress."},
              {li: "Worked on their AI-powered project (AI Health Pro)"},
            ]
          },
          {
            title: "UI/UX Designer", 
            sub: "Joblu Technologies Pte. Ltd", 
            link: "",
            note: "December 2022 - May 2023",
            links: [],
            cont: [
              {li: "Project-based (4 months contract)."},
              {li: "User Research, Prototyping, and Wireframing."},
              {li: "Web and Mobile Designs"},
            ]
          },
          {
            title: "Graphic Designer", 
            sub: "Beanstalk! Growth Marketing", 
            link: "",
            note: "October 2022 - December 2022",
            links: [],
            cont: [
              {li: "Part-time"},
              {li: "Social Media postings per clients"},
              {li: "Create Mood Boards per clients"},
              {li: "Communicate with creative managers and clients"},
            ]
          },
          {
            title: "UI/UX Designer | Fron-end Developer | and Graphic Designer", 
            sub: "Biotech Farms Inc.", 
            link: "",
            note: "January 2020 - October 2022",
            links: [],
            cont: [
              {li: "Generalist UX Designer, working with front-end development and API integration."},
              {li: "Worked with Web Applications such as Applicant Tracking System (ATS) and Mobile Apps for tracking deliveries."},
              {li: "Also worked as Freelance Graphic Designer under the same company after working full-time."},
            ]
          },
          {
            title: "Graphic Designer | Web Designer", 
            sub: "Starbright School and Office Depot Inc.", 
            link: "",
            note: "June 2019 - October 2019",
            links: [],
            cont: 
            [
              {li: "Senior Graphic Designer and Web Developer (front-end)"},
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
            title: "Apaly Health: Member App", 
            sub: "UI/UX Designer | Front-end Developer", 
            note: "Figma, Vue, Nuxt, Vuetify, SCSS",
            link: "",
            links: [],
            cont: [
              {li: "Redesigned and rebuilt their existing member app scratch."},
              {li: "Currently in prodcution."},
              {li: "Collaborated with Back-end Developers and Project Manager."},
              {li: "Created the design systems for their web apps"},
              {li: "Desktop / Mobile Designs"},
            ]
          },
          {
            title: "Apaly Heath: DPC Portal", 
            sub: "UI/UX Designer | Front-end Developer", 
            note: "Figma, Vue, Nuxt, Vuetify, SCSS",
            link: "",
            links: [],
            cont: [
              {li: "Redesigned and rebuilt their existing DPC Portal from scratch."},
              {li: "Currently in prodcution."},
              {li: "Collaborated with Back-end Developers and Project Manager."},
              {li: "Created the design systems for their web apps"},
              {li: "Desktop / Mobile Designs"},
            ]
          },
          {
            title: "Joblu - Find Jobs & Hire Talent", 
            sub: "Primary UX Designer", 
            note: "Figma",
            link: "",
            links: [],
            cont: [
              {li: "Prototyping, Wireframing"},
              {li: "Collaborated with Developers and Project Managers"},
              {li: "Desktop / Mobile Designs"},
            ]
          },
          {
            title: "RecTrack - Recruitment Tracking System", 
            sub: "UI/UX Designer | Front-end Developer", 
            note: "Vue, Nuxt, Bootstrap-vue, SASS",
            link: "",
            links: [],
            cont: [
              {li: "Proposed a refactoring of old web system."},
              {li: "Currently in production."},
              {li: "Collaborated with co-developers, QAs, and Project Managers"},
              {li: "Used Axios for API integration."},
              {li: "Desktop / Mobile version."},
            ]
          },
          {
            title: "RMRS - Raw Materials Receiving System", 
            sub: "UI/UX Designer | Front-end Developer", 
            note: "Nativescript-vue, Android Studio, SASS",
            link: "",
            links: [],
            cont: [
              {li: "Created the first mobile app for the company's existing webapp."},
              {li: "Collaborated with co-developers, QAs, and Project Managers"},
              {li: "Used nativescript-vue and android studio emmulator."},
              {li: "Used Axios for API integrations."},
            ]
          },
          {
            title: "Biotech Farms Inc. - Company Website", 
            sub: "UI/UX Designer | Developer | Wordpress", 
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
        title: "Other Relevant Work and Experiences",
        icon: "star",
        contents: [
          {
            title: "Visual Artistry", 
            sub: "Present", 
            link: "",
            note: "Digital | Traditional",
            links: [],
            cont: [
              {li: "Strictly NO AI"},
              {li: "My works are mostly digital these past years."},
              {li: "I've done comissioned black n' white or colored portraits."},
              {li: "I do character designs and landscape arts."},
              {li: "Clip Studio Paint | Procreate | Adobe Photoshop | Adobe Illustrator"}
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
