export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Kenn - Web Resume',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/mainStyle.scss",
    "@/assets/style2.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/fontawesome"],
  fontawesome: {
    autoAddCss: false,
    component: "fa",
    icons: {
      solid: [
        "faSignOutAlt",
        "faSignInAlt",
        "faCashRegister",
        "faBoxes",
        "faPowerOff",
        "faFile",
        "faChartLine",
        "faChartBar",
        "faChartPie",
        "faAngleLeft",
        "faAngleRight",
        "faTruck",
        "faBoxOpen",
        "faPlusCircle",
        "faEraser",
        "faChevronCircleRight",
        "faReceipt",
        "faExchangeAlt",
        "faHistory",
        "faStore",
        "faCartPlus",
        "faCartArrowDown",
        "faShoppingCart",
        "faTrash",
        "faClipboard",
        "faClipboardCheck",
        "faTag",
        "faEye",
        "faEyeSlash",
        "faMoneyBillWaveAlt",
        "faSave",
        "faDoorOpen",
        "faArrowAltCircleRight",
        "faDesktop",
        "faBars",
        "faUserShield",

        "faIdCardAlt",
        "faIdCard",
        "faUsers",
        "faUser",
        "faUserCog",
        "faKey",
        "faClipboardList",
        "faMouse",
        "faListOl",
        "faFileAlt",
        "faSitemap",
        "faBrain",
        "faFileExport",
        "faCopy",
        "faAddressCard",
        "faPeopleArrows",
        "faWalking",
        "faFileSignature",
        "faBell",
        "faCaretUp",
        "faCaretDown",
        "faCaretRight",
        "faCaretLeft",
        "faAngleDoubleLeft",
        "faAngleDoubleRight",
        "faSearch",
        "faEllipsisV",
        "faBan",
        "faUserTimes",
        "faEdit",
        "faRedoAlt",
        "faExclamationTriangle",
        "faClock",
        "faChevronRight",
        "faChevronLeft",
        "faCheck",
        "faCheckCircle",
        "faCheckSquare",
        "faSquare",
        "faTimesCircle",
        "faPlus",
        "faMinus",
        "faTimes",
        "faCircle",
        "faArchive",
        "faUserCircle",
        "faBuilding",
        "faFileExcel",
        "faInfoCircle",
        "faPrint",
        "faBookmark",
        "faBookOpen",
        "faThumbsDown",
        "faThumbsUp",
        "faFolder",
        "faCalendarDay",
        "faUserCheck",
        "faRocket",
        "faCalendarCheck",
        "faPercentage",
        "faUserTag",
        "faEnvelope",
        "faUserTie",
        "faSlidersH",
        "faInbox",
        "faPen",
        "faMobile",
        "faPhoneSquare",
        "faGlobeAsia",
        "faSchool",
        "faStar",
        "faProjectDiagram",
        
      ],
      brands: [
        "faGoogle",
        "faLinkedin",
        "faTwitter",
        "faFacebook",
        "faInstagram",
        "faPinterest",
        "faVuejs",
        "faReact",
      ]
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  }
}
