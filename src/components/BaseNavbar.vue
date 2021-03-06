<template>
  <div
    class="navbarRoot"
    v-scroll="handleScroll"
  >
    <div class="container">
      <div class="row">
        <div class="col-xs-12 navmenu-wrapper">
          <navbar-logo ref="logo"></navbar-logo>
          <ul class="navmenu">
            <li>
              <router-link to="/about">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseNavbarLogo from "./BaseNavbarLogo";
import { Vuenime } from "vuenime";

export default {
  components: {
    "navbar-logo": BaseNavbarLogo,
    vuenime: Vuenime,
  },
  name: "BaseNavbar",
  mounted() {
    this.handleColoring(this.$route.name);
  },
  computed: {
    collapsedComputed: function () {
      return this.collapsed;
    },
    routeNameComputed() {
      return this.$route.name;
    },
    logoAnimeComputed: function () {
      if (!this.logoAnime) this.logoAnime = this.$refs.logo.animateCollapse();
      return this.logoAnime;
    },
  },
  data() {
    return {
      collapsed: false,
      triggerCollapse: false,
      triggerExpand: false,
      opacity: { prop: 0 },
      logoAnime: null,
    };
  },
  watch: {
    triggerCollapse: function (newCollapsed, oldCollapsed) {
      if (newCollapsed && newCollapsed != oldCollapsed) {
        this.collapsed = true;
        this.$refs.logo.animateCollapse("normal").play();

        if(this.$route.name == "about") this.setCssVariable("--nav-background", this.getCssVariable("--about-bg"));
        else this.setCssVariable("--nav-background", this.getCssVariable("--dullpaper"));
      }
    },
    triggerExpand: function (newCollapsed, oldCollapsed) {
      if (newCollapsed && newCollapsed != oldCollapsed) {
        this.collapsed = false;
      this.$refs.logo.animateCollapse("reverse").play();

      if(this.$route.name != "about") this.setCssVariable("--nav-background", "transparent");
      }
    },
    routeNameComputed(name) {
      this.handleColoring(name);
    },
  },
  methods: {
    handleScroll: function (event, element) {
      this.triggerCollapse = window.scrollY > 30;
      this.triggerExpand = window.scrollY < 10;
    },
    handleColoring(routeName){
      let dark = getComputedStyle(document.documentElement).getPropertyValue("--text-color");
      let light = "white";

      if (routeName == "about") {
        this.setCssVariable("--logo-color", light);
        this.setCssVariable("--navbar-color", light);

        if(this.collapsed) this.setCssVariable("--nav-background", this.getCssVariable("--about-bg"));
        else this.setCssVariable("--nav-background", "transparent"); 
      }
      else if(routeName == "home"){
        this.setCssVariable("--logo-color", dark);
        this.setCssVariable("--navbar-color", this.getCssVariable("darkGrey"));
        
        if(this.collapsed) this.setCssVariable("--nav-background", this.getCssVariable("--dullpaper"));
        else this.setCssVariable("--nav-background", "transparent");
      }
    },
    getCssVariable(colorName){
      return getComputedStyle(document.documentElement).getPropertyValue(colorName)
    },
    setCssVariable(colorName, color){
      document.documentElement.style.setProperty(colorName, color);
    }
  },
};
</script>

<style lang="scss">
@import "../custom-variables";
.navbarRoot {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  background-color: var(--nav-background);
  transition: background-color 0.3s ease-in;

  .container {
    .row {
      margin-left: 0;
      margin-right: 0;

      .navmenu-wrapper {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        width: 100%;

        .navmenu {
          margin-left: auto;
          padding-top: 10px;
          display: flex;
          flex-flow: row wrap;

          li {
            list-style-type: none;
            & > a {
              font-weight: bold;
              font-family: 'Montserrat';
              color: var(--navbar-color);

			  &:hover{
				  text-decoration: none;
				  color: var(--applered);
			  }
            }
          }
        }
      }
    }
  }
}
</style>