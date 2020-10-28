<template>
	<div class="baseHomeRoot">
		<base-navbar></base-navbar>
		<base-header></base-header>
		<base-statement></base-statement>
		<project-header></project-header>
		<project-summaries />
	</div>
</template>

<script>
import BaseNavbar from "./BaseNavbar";
import BaseHeader from "./BaseHeader";
import BaseStatement from "./BaseStatement";
import ProjectHeader from "./ProjectHeader";
import ProjectSummaries from "./ProjectSummaries";

export default {
	components: {
  	BaseNavbar,
  	BaseHeader,
  	BaseStatement,
		ProjectHeader,
		ProjectSummaries
  },
  name: 'BaseHome',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
html{
	overflow-x: hidden;
}
.baseHomeRoot{
	
	.site-content{
		overflow: hidden;
	}
}
</style>