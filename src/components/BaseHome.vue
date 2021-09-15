<template>
  <transition 
  				name="fade" 
  				mode="out-in"
				v-on:before-enter="beforeEnter"
				v-on:enter="enter"
				v-on:after-enter="afterEnter"
				v-on:enter-cancelled="enterCancelled"

				v-on:before-leave="beforeLeave"
				v-on:leave="leave"
				v-on:after-leave="afterLeave"
				v-on:leave-cancelled="leaveCancelled"
	>
    <div class="baseHomeRoot">
      <base-header></base-header>
      <base-statement></base-statement>
      <project-header></project-header>
      <project-summaries />
    </div>
  </transition>
</template>

<script>
import BaseHeader from "./BaseHeader";
import BaseStatement from "./BaseStatement";
import ProjectHeader from "./ProjectHeader";
import ProjectSummaries from "./ProjectSummaries";

import anime from "animejs"

export default {
  components: {
    BaseHeader,
    BaseStatement,
    ProjectHeader,
    ProjectSummaries,
  },
  name: "BaseHome",
  data() {
    return {};
  },
  methods: {
	beforeEnter(){

	},
	enter(){

	},
	afterEnter(){

	},
	enterCancelled(){

	},
	beforeLeave(){

	},
	leave(){

	},
	afterLeave(){

	},
	leaveCancelled(){

	},
  }
};
</script>

<style lang="scss">
html {
  overflow-x: hidden;
}
.baseHomeRoot {
  .site-content {
    overflow: hidden;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>