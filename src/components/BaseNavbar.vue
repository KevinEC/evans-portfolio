<template>
	<div class="navbarRoot" v-scroll="handleScroll" :style="backgroundColorComputed">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 navmenu-wrapper">
					<navbar-logo ref="logo"></navbar-logo>
					<ul class="navmenu">
						<li>
							<router-link to="/bar">About</router-link>
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
import anime from "animejs";

export default {
	components: {
		"navbar-logo": BaseNavbarLogo,
		"vuenime": Vuenime
	},
  name: 'BaseNavbar',
  mounted(){
	  console.log("HEl", this.$route);
  },
  computed: {
  	collapsedComputed: function () {
  		return this.collapsed;
  	},
  	backgroundColorComputed: function () {
  		return {
  			backgroundColor: `rgba(248, 248, 244, ${this.opacityComputed})`
  		}
  	},
	routeNameComputed(){
		return this.$route.name;
	},
  	opacityComputed: function () {
  		return this.opacity.prop;
  	},
  	logoAnimeComputed: function () {
  		if(!this.logoAnime) this.logoAnime = this.$refs.logo.animateCollapse();
  		return this.logoAnime;
  	}
  },
  data () {
    return {
			collapsed: false,
			triggerCollapse: false,
			triggerExpand: false,
    	opacity: {prop: 0},
    	logoAnime: null
    }
  },
  watch: {
  	triggerCollapse: function (newCollapsed, oldCollapsed) {
  		if(newCollapsed && newCollapsed != oldCollapsed){
				this.collapsed = true;
  			this.animateOpacity(1).play();
  			this.$refs.logo.animateCollapse("normal").play();
			}
	},
	triggerExpand: function (newCollapsed, oldCollapsed) {
  		if(newCollapsed && newCollapsed != oldCollapsed){
			this.collapsed = false;
  			this.animateOpacity(1).play();
  			this.$refs.logo.animateCollapse("reverse").play();
		}
	},
	routeNameComputed(name){
		  let dark = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
		  let light = "white";
		  if(name == "about") document.documentElement.style.setProperty("--logo-color", light);
		  else document.documentElement.style.setProperty("--logo-color", dark);
		  let result = getComputedStyle(document.documentElement).getPropertyValue('--logo-color');
		  console.log("result after route change", result);
	  }
  },
  methods: {
  	handleScroll: function (event, element) {
			this.triggerCollapse = (window.scrollY > 30);
			this.triggerExpand = (window.scrollY < 10);
  	},
  	animateOpacity: function (value) {
  		let self = this;
  		return anime({
  			targets: self.opacity,
  			duration: 150,
  			prop: value
  		});
  	}
  }
}
</script>

<style lang="scss">
@import "../custom-variables";
.navbarRoot{
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 20;
	background-color: var(--nav-background);
	

	.container{

		.row{
			margin-left: 0;
			margin-right: 0;

			.navmenu-wrapper{
				display: flex;
				flex-flow: row nowrap;
				align-items: center;
				width: 100%;


				.navmenu{
					margin-left: auto;
					padding-top: 10px;
					display: flex;
					flex-flow: row wrap;

					li{
						list-style-type: none;
						& > a{
							font-weight: bold;
							color: var(--navbar-color);
						}
					}
				}
			}		
		}	
	}
}
</style>