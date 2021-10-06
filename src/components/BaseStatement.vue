<template>
	<div class="statementRoot container">
		<div class="row">
			<div class="col-sm-12">
				<div class="statmentWrapper">
					<span class="vertical-line"></span>
					<div class="paragraph-wrapper">
						<h5>
							I <span class="bold red">thrive</span> in projects where I’m involved from
							
							<span class="bold">concept</span> design to <span class="bold">coding</span> the final product.
						</h5>
					</div>
					<span class="vertical-line"></span>
				</div>			
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'BaseStatement',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
@import "../custom-variables";

.statementRoot{
	padding-top: 90px;
	padding-bottom: 90px;

	.statmentWrapper{
		display: flex;
		flex-flow: row nowrap;
		align-items: center;

		.vertical-line{
			$height: 4px;
			$border-width: 6px;

			display: block;
			height: $height;
			min-height: ($height + 2*$border-width); // sum of height and border
			flex: 12 0 auto;
			border: $border-width solid var(--background-color);
			border-left: none;
			border-right: none;
			background-color: var(--applered);
		}

		.paragraph-wrapper{
			flex: 1 1 40%;
			padding: 0 1.6%;

			h5{
				margin: 0;
				font-family: var(--font-family-sans-serif);
				text-align: center;
			}

		}
	}
}

@media screen and (max-width: map-get($map: $grid-breakpoints, $key: "sm")){
	.statementRoot{

		.statmentWrapper{
			flex-flow: column;
			align-items: center;

			.vertical-line{
				display: none;
			}

			.paragraph-wrapper{

				h5{
					width: 90%;
					padding: 4rem 0;
					padding-left: 1rem;
					background-color: var(--dullpaper);
					text-align: left;
				}

			}
		}
	}
}

</style>