<template>
  <div class="projectSummariesRoot container narrow">
    <div class="projectsLine"></div>
    <div class="galleryLine"></div>
    <project-summary 
      v-for="(project, i) in projects"
      :key="i"
      :project="project"
    />
  </div>
</template>

<script>
  import ProjectSummary from "./ProjectSummary"

  export default {
    name: 'ProjectSummaries',
    components: {
      ProjectSummary
    },
    data () {
      return  {
        projects: [
          {
            title: "Bo Henrik Artist Page",
            company: "Bo Henrik",
            year: 2018,
            role: "Web Developer / Designer",
            description: "On request of my old friend Henrik I developed his official artist website with the goal of increased online presence. I took his vision to concept and translated his brand into the medium of a website. The outcome was a website that represented Bo’s work as a musician.",
            previewImg: 'bo_henrik_sc.png'
          },
          {
            title: "Survey data visualization platform",
            company: "Populum",
            year: "2019 & 2020",
            role: "Frontend Developer",
            description: "On request of my old friend Henrik I developed his official artist website with the goal of increased online presence. I took his vision to concept and translated his brand into the medium of a website. The outcome was a website that represented Bo’s work as a musician.",
            previewImg: 'populum_sc.png'
          },
          {
            title: "TMA Artist Page",
            company: "TMA Music",
            year: 2018,
            role: "Web Developer / Designer",
            description: "On request of my old friend Henrik I developed his official artist website with the goal of increased online presence. I took his vision to concept and translated his brand into the medium of a website. The outcome was a website that represented Bo’s work as a musician.",
            previewImg: 'tma_sc.png'

          },
          {
            title: "Santa Concept Web Shop",
            company: "Concept Co",
            year: "2019",
            role: "Frontend Developer",
            description: "On request of my old friend Henrik I developed his official artist website with the goal of increased online presence. I took his vision to concept and translated his brand into the medium of a website. The outcome was a website that represented Bo’s work as a musician.",
            previewImg: 'santa_sc.png'
          },
        ]
      }
    },
    mounted(){
      console.log("projectSummariesY: ", this.$vnode.elm.getBoundingClientRect());
    }
  }
</script>

<style lang="scss">
.projectSummariesRoot{
  position: relative;
  
  .projectsLine{
    position: absolute;
    margin-top: -6px;
    left: 0;
    height: 100%;
    width: 2px;
    background-color: var(--lightpink);
  }

  .galleryLine{
    position: absolute;
    right: 527px;
    top: -180px;
    height: 100%;
    width: 1px;
    z-index: -1;
    background-color: var(--lightpink);
  }
}
</style>