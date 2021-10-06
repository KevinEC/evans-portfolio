<template>
	<div class="baseHeaderRoot container">
		<div class="row">
			<div class="col-sm-12">
				<kinesis-container event="scroll">
					<div class="baseHeaderWrapper">
						<div class="bg-graphics">
							<img inline-svg class="triangle" src="triangle.svg" alt="triangle graphic" />
							<div class="line"></div>
						</div>
						<div class="welcome-message">
							<div class="animation-clip"><h1 class="greeting">Hey,</h1></div>
							<div id="what-I-am-wrapper" class="animation-clip"><h2 class="what-I-am">I'm a <span>coding designer</span>.</h2></div>
							<div class="animation-clip"><span class="what-I-do">I make experiences come alive on the web</span></div>
						</div>
						<div class="vertical-line-wrapper">
							<a v-scroll-to="'#projectHeader'" class="circle"><div class="circleDot"></div></a>
							<div class="line"></div>
						</div>
					</div>
				</kinesis-container>
			</div>
		</div>
	</div>
</template>

<script>
import anime from "animejs";
import { KinesisContainer, KinesisElement } from "vue-kinesis";


export default {
	name: 'BaseHeader',
	components: {
		KinesisContainer, 
		KinesisElement
	},
  data () {
    return {
    	triangleEl: ".triangle",
    	diagonalEl: ".bg-graphics .line",
    	heyEl: ".greeting",
    	whatIamEl: ".what-I-am",
    	whatIdoEl: ".what-I-do",
    	diagonalTransformX: 140,
    	diagonalTransformY: 180,
		diagonalRotateZ: -45,
		introAnimationComplete: false,
		init: true,
    }
	},
	computed: {
		introAnimationCompleteComputed(){
			return this.introAnimationComplete;
		},
		initZeroTransform(){
			if(this.introAnimationCompleteComputed && this.init) {
				this.init = false;
				return {
					transform: 'rotate3d(0,0,0,0) translate3d(0,0,0)' 
				}
			}
		}
	},
  mounted () {
		this.introAnimation().play();
	},
  methods: {
  	// this solution may be less performative as you search the dom every time
  	// an element is fetched. 
  	// Higher performance structure would be with computed values
  	// however this leads to repretetive code
  	getEl: function (selector) {
  		return this.$vnode.elm.querySelector(selector);
  	},
	fixAddressbar(){
		this.$router.push({name: "home"}, () => {
		});
	},
  	introAnimation() {
			let self = this;
  		let timeline = anime.timeline({
  			complete(anim){
					self.introAnimationComplete = true;
				}
  		});

  		let diagonalDuration = 1300;

  		let diagonalAnime = new anime({
  			targets: this.getEl(this.diagonalEl),
  			opacity: {
  				value: [0,1],
  				duration: 300,
  				delay: 600
  			},
  			translateX: [-800, this.diagonalTransformX],
  			translateY: [400, this.diagonalTransformY],
  			rotateZ: [-100, this.diagonalRotateZ],
  			duration: diagonalDuration,
  			delay: 500,
  			easing: 'easeOutExpo'
  		});

  		let traingleAnime = new anime({
  			targets: this.getEl(this.triangleEl),
  			opacity: {
  				value: [0,1],
  				duration: 500
  			},
  			translateX: [-50, 0],
  			translateY: [-20, 0],
  			duration: 2000,
				easing: 'easeOutExpo',
				complete(anim){
					self.introAnimationComplete = true;
				}
  		});

  		let greetingAnime = new anime({
  			targets: [this.getEl(this.heyEl), this.getEl(this.whatIamEl), this.getEl(this.whatIdoEl)],
  			translateY: [100, 0],
  			duration: 1000,
  			easing: 'easeOutExpo',
  			delay: anime.stagger(100, {start: 900})
  		});

  		timeline.add(diagonalAnime);
  		timeline.add(traingleAnime, `-=${diagonalDuration - 600}`);
  		timeline.add(greetingAnime);

  		return timeline;
  	}
  }
}
</script>

<style lang="scss">
@import "../custom-variables.scss";
.baseHeaderRoot{
	.baseHeaderWrapper{
		background-color: var(--lightpink);

		display: flex;
		align-items: center;
		justify-content: center;
		height: 80vh;
		width: 100%;
		box-shadow: 0 0 3px rgba(#1d1d1d, 0.3),
								0 0 8px rgba(#1d1d1d, 0.12),
								0 0 25px rgba(#1d1d1d, 0.1);

		.bg-graphics{
			display: flex;
			flex-flow: row nowrap;
			justify-content: center;

			.kinesis-wrapper{
				display: inherit;
				align-items: inherit;
				justify-content: inherit;
				flex-flow: inherit;
				z-index: 1;
			}

			.triangle{
				width: 70%;
				z-index: 5;
			}

			.line{
				--diagonalTransformX: 140px;
				--diagonalTransfromY: 180px;
				--diagonalRotateZ: -45deg;

				width: 500px;
				height: 8px;
				background-color: var(--applered);
				position: absolute;
				z-index: 0;
				//transform: translate(var(--diagonalTransformX), var(--diagonalTransformY)) rotateZ(var(--diagonalRotateZ));
			}
		}

		.welcome-message{
			position: absolute;
			z-index: 6;
			margin-top: -30px;
			text-transform: uppercase;

			.greeting{
				font-size: 100px;
				line-height: 70px;
				margin-left: 50px;
			}

			#what-I-am-wrapper{
				margin-left: -40px;
			}
			.what-I-am{
				font-size: 55px;

				span{
					color: var(--applered);
				}
			}

			.what-I-do{
				display: inline-block;
				font-weight: bold;
				font-size: 20px;
				margin-left: 55px;
			}
		}
		.vertical-line-wrapper{
			position: absolute;
			bottom: 100px;
			right: 20vw;
			display: flex;
			justify-content: center;
			z-index: 10;

			.circle{
				background-color: white;
				width: 24px;
				height: 24px;
				z-index: 5;
				border-radius: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				transition: margin-bottom 0.15s var(--easeOutQuad);


				&:hover{
					margin-bottom: -5px;
					cursor: pointer;

					.circleDot{
						transform: rotate(45deg);
						border-radius: 0%;
					}
				}

				.circleDot{
					width: 9px;
					height: 9px;
					border-radius: 100%;
					display: block;
					background-color: var(--applered);

					transition: margin-top 0.25s var(--ezOuut);
				}

				
			}

			.line{
				width: 1px;
				height: 400px;
				position: absolute;
				z-index: 4;
				background-color: var(--dullpink);
			}
		}
	}
}

@media screen and (max-width: map-get($map: $grid-breakpoints, $key: "lg")){
	.baseHeaderRoot{

		.baseHeaderWrapper{

			.bg-graphics{

				.line{
					margin-top: -5vw;
					margin-left: -5vw;
					width: 300px;
				}
			}

			.welcome-message{
				.greeting{
					font-size: 13vw;
					line-height: 95px;
					margin-left: 0px;
				}
				#what-I-am-wrapper{
					margin-left: 0;

					.what-I-am{
						font-size: 5vw;
						line-height: 40px;
					}
				}

				.what-I-do{
					margin: 0;
				}
			}
		}
	}
}

@media screen and (max-width: map-get($map: $grid-breakpoints, $key: "md")){
	.baseHeaderRoot{
		.baseHeaderWrapper{

			.bg-graphics{

				.line{
					margin-top: -10vw;
					margin-left: -15vw;
				}
			}

			.welcome-message{
				padding: 0 40px;
				.greeting{
					line-height: 60px;
				}
			}
		}
	}
}

@media screen and (max-width: map-get($map: $grid-breakpoints, $key: "sm")){
	.baseHeaderRoot{
		.baseHeaderWrapper{
			width: 102vw;
			margin-left: -4vw;
			box-shadow: none;

			.bg-graphics{

				.line{
					display: none;
				}

				.triangle{
					width: 90%;
				}
			}
			.welcome-message{
				top: 8rem;
				padding: 0 20px;

				.greeting{
					font-size: 20vw;
					line-height: 100px;
				}

				#what-I-am-wrapper{

					.what-I-am{
						font-size: 10vw;
					}
				}
			}

			.vertical-line-wrapper{
				width: fit-content;
				left: 10vw;
				bottom: 10vh;
				right: 0;

				.circle{
					width: 2.5rem;
					height: 2.5rem;

					.circleDot{
						width: 0.9rem;
						height: 0.9rem;
						border-radius: 100%;
					}
					
					&:hover{
						margin-bottom: 0px;

						.circleDot{
							transform: rotate(0deg);
							border-radius: 0%;
						}
					}

					&:active{
						margin-bottom: -5px;
						cursor: pointer;

						.circleDot{
							transform: rotate(45deg);
							border-radius: 0%;
						}
					}
				}
				

				.line{
					height: 80vh;
				}
			}	
		}
	}
	
}

</style>