<template>
	<div class="navBarLogoRoot" :class="collapsedStyleComputed">
		<span class="firstname">K<span class="firstnameFade">evin</span></span>
		<span class="lastname">Evans</span>
	</div>
</template>

<script>
import anime from "animejs";

export default {

  name: 'NavBarLogo',
  computed: {
  	firstnameFadeElComputed: function () {
  		if(!this.firstnameFadeEl) this.firstnameFadeEl = this.$vnode.elm.querySelector(".firstnameFade");
  		return this.firstnameFadeEl;
  	},
  	lastnameElComputed: function () {
  		if(!this.lastnameEl) this.lastnameEl = this.$vnode.elm.querySelector(".lastname");
  		return this.lastnameEl;
  	},
  	collapsedStyleComputed: function () {
  		if(this.collapsed) return "collapsed";
  	}
  },
  data () {
    return {
    	firstnameFadeEl: null,
    	lastnameEl: null,
    	collapsed: false
    }
  },
  methods: {
  	animateCollapse: function (direction) {
  		let self = this;

  		let timeline = anime.timeline({
  			easing: "linear",
  			direction: direction,
  			duration: 100,
  		});

  		// translateY
  		timeline.add({
  			targets: [self.firstnameFadeElComputed, self.lastnameElComputed],
  			translateY: [0,"-100%"],
  			easing: "easeOutQuad",
  			complete: function () {
  				if(direction === "normal") self.collapsed = true;
  				else if(direction === "reverse") self.collapsed = false;
  			}
  		});

  		timeline.add({
  			targets: self.firstnameFadeElComputed,
  			opacity: [1,0],
  		}, 0);

  		return timeline;
  	}
  }
}
</script>

<style lang="scss">
@import "../custom-variables";

.navBarLogoRoot{
	display: flex;
	flex-flow: column;
	padding: 20px 0;
	position: relative;

	transition: padding-bottom 0.1s var(--easeOutQuad);

	.firstname, .lastname{
		font-family: "Archivo Black";
		font-size: $h3-font-size;
		line-height: 30px;
		text-transform: uppercase;
	}
	.firstname{
		letter-spacing: 6px;

		.firstnameFade{ display: inline-block; }
	}
	.lastname{
		letter-spacing: 16px;
		margin-left: 31px;
		color: transparent;
		-webkit-text-stroke: 2px black;

		transition: letter-spacing 0.4s var(--easeOutExpo);
	}
}

.navBarLogoRoot.collapsed{
		padding-bottom: 0;

		.lastname{
			letter-spacing: 6px;
		}
}
</style>