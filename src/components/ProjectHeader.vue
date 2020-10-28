<template>
	<div v-scroll="handleScroll" class="projectHeaderRoot" :class="collapsedClassComputed">
		<div class="container narrow">
			<div class="row">
				<div class="col-sm-12">
					<div class="projectHeaderWrapper">
						<h1 class="title"><span class="first-letter">P</span>rojects</h1>
						<div class="thick-line">
							<div class="gallery-line"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'ProjectHeader',
  data () {
    return {
			collapsed: false,
			collapseY: 850,
			titleEl: null,
			lineEl: null
    }
	},
	computed:{
		collapsedComputed(){
			return this.collapsed;
		},
		collapsedClassComputed(){
			if(this.collapsedComputed) return "collapsed";
		},
		titleElComputed(){
			if(!this.titleEl) this.titleEl = this.$vnode.elm.querySelector(".title");
			return this.titleEl;
		},
		lineElComputed(){
			if(!this.lineEl) this.lineEl = this.$vnode.elm.querySelector(".thick-line");
			return this.lineEl;
		}
	},
	watch: {
		collapsed(newCollapsed, oldCollapsed){
			if(newCollapsed != oldCollapsed){
  			if(newCollapsed) this.animateCollapse().play() 
  			else this.animateCollapse().reverse()
			}
		}
	},
	methods: {
		handleScroll: function(event, element){
			this.collapsed = (window.scrollY > this.collapseY)
		},
		animateCollapse(){
			let timeline = anime.timeline({
				
			});

			timeline.add({
				targets: [this.titleElComputed],
				translateY: [0, 8],
				easing: "easeInOutQuad",
				duration: 300
			})

			timeline.add({
				targets: [this.lineElComputed],
				opacity: [1, 0],
				easing: "easeOutQuad",
				duration: 100
			}, 100)

			return timeline;
		}
	}
}
</script>

<style lang="scss">
.projectHeaderRoot{

	.projectHeaderWrapper{
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		padding-bottom: 5%;

		.title{
			font-size: 70px;
			flex: 1 1 auto;
			text-transform: uppercase;
			color: var(--applered);
			padding-right: 4%;

			transition: margin-left 0.15s ease-out;

			.first-letter{
				-webkit-text-stroke: 2px var(--applered);
				color: transparent;
			}
		}

		.thick-line{
			$height: 10px;
			$border-height: 5px;

			position: relative;
			display: block;
			flex: 10 1 100%;
			height: $height;
			background-color: var(--offBlack);

			transition: opacity 0.1s ease-in-out;

			&::before, &::after{
				content: '';
				z-index: 5;
				display: block;
				height: 10px;
				width: 100%;
				position: absolute;
				background-color: var(--background-color);
			}

			&:before{ top: -10px }
			&:after{ bottom: -10px }
		}
	}

}
.projectHeaderRoot.collapsed{
	position: sticky;
	top: 50px;
	background-color: var(--dullpaper);
	z-index: 20;

	.projectHeaderWrapper{
		padding-bottom: 0;

		.title{
			//font-size: 35px;
			margin-left: -65px;
		}

		.thick-line{
			//opacity: 0;
		}
	}
}
</style>