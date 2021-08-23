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
            title: "Survey data visualization platform",
            company: "Populum",
            year: "2019 & 2020",
            role: "Frontend Developer / UX Designer / Backend Developer",
            description: "During my position as a frontend developer at Populum I also had responsibility and influence on UX decisions. At Populum the goal was to make intricate data visualization intuitive. While working toward this my focus was to also make graphs come alive through animations and interactive hover functionality while also retaining Populum's sleek professional design language. As intuitiveness always was the primary goal, animations were always included to improve this quality and not take away from it.",
            previewImg: 'populum_sc.jpg',
            galleryPath: 'populum',
            gallery: ['flerpixlarheh.jpg','historical.jpg','colors.jpg',]
          },
          {
            title: "Design Disclosure Blog",
            company: "Concept Work",
            year: "2020",
            role: "UI Designer / Graphic Designer / Social Media Manager ",
            description: "The online blog Design Disclosure was created with the aim to create a bold modern abrupt visual language. The blog wrote about contemporary design trends identified online through social media platforms and from mediums like music and film. The resulting design language was inspired by graphic brutalism and revolved around crowded large bold text arrangements and a dotted pattern creating contrasting layouts through overlapping and outlined elements.",
            previewImg: 'post.jpg',
            galleryPath: 'design_disclosure',
            gallery: ['design_disclosure_logo-favico.png','unknown_aesthet_c_0-1.jpg','unknown aesthetic 0-2.jpg','hover.gif','launch today.jpg','post sneak peak.jpg']
          },
          {
            title: "Conference Web App",
            company: "Fullstack Developer / UX Designer",
            year: "2020",
            role: "UI Designer / Graphic Designer / Social Media Manager ",
            description: "In the project The Web Conference a soft friendly design language was developed to create an inviting sensation. While keeping elements simple and straight forward to maintain a professional look to respect the conference context. The website contains functionality to ask the speaker questions live. When designing this functionality focus was put on accessibility and keyboard navigation as to avoid the interaction to become disruptive when listening. The main focus of the this website was to guide the user to this functionality and therefore preview links are presented in the landing page hero element which takes the user to the events page.",
            previewImg: 'home_header.png',
            galleryPath: 'conference',
            gallery: ['conference_app_sc.jpg','events_default.png','events_selected.png','home_header.png','keynotes_defaukt.png','keynotes_selected.png']
          },
          {
            title: "Santa Concept Web Shop",
            company: "Concept Work",
            year: "2019",
            role: "Frontend Devloper / UX Designer",
            description: "The concept web shop Santa the website contained a blog explaining the development process and the shop itself. While WordPress development was the primary focus during this project a fun playful visual language was developed along with it. This project played around with offset elements with sharp corners to create unconventional layouts and a contrasting color scheme to keep things interesting and different.",
            previewImg: 'santa_sc.jpg',
            galleryPath: 'santa',
            gallery: ['start.jpg','products2.gif','shop.jpg','blog.jpg','blog_post_preview.jpg','blog_post.jpg','error_mail.jpg']
          },
          {
            title: "Bo Henrik Artist Page",
            company: "Bo Henrik",
            year: 2018,
            role: "Web Developer / Designer",
            description: "On request of my old friend Henrik I developed his official artist website with the goal of increased online presence. I took his vision to concept and translated his brand into the medium of a website. The outcome was a website that represented Bo’s work as a musician.",
            previewImg: 'bo_henrik_sc.jpg',
            galleryPath: 'bo_henrik',
            gallery: ['release.jpg','music_about','contact.gif','busniess_card.jpg','mockup.jpg','mockup_music_contact.jpg',]
          },
          {
            title: "TMA Artist Page",
            company: "TMA Music",
            year: 2018,
            role: "UX & UI Designer",
            description: "In this project to create an artist website I was given free hands to create something in my own style by the client. I chose one primary color beside a shade of black and white and purposely chose Times New Roman as body text for its stripped down character to contrast the bold heading font. I worked a lot with overlapping and offset elements to make the otherwise simple layout to something more than the sum of its parts. This project never took off but the client was surprised how the mockups hit the nail on its head given how little visual context they had given.",
            previewImg: 'tma_sc.jpg',
            galleryPath: 'tma',
            gallery: ['mockup_start.jpg','mockup_bio','bio_pattern.jpg','achievements.jpg','contact.jpg']

          },
        ]
      }
    },
    mounted(){
      
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