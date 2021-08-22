<template>
  <div class="projectSummaryRoot" :class="collapseMarginComputed" v-scroll="handleScroll">
    <div class="row" :style="wrapperYOffsetStyleComputed">
      <div class="col-sm-6 projectContentCol">
        <div class="projectDot"></div>
        <kinesis-container  :perspective="500"> <!-- temp disable of hover interaction -->
          <kinesis-element type="depth" :strength="10" axis="x" transformOrigin="50% 50%">
            <div class="projectTitleWrapper">
              <h1
                class="projectTitle"
                @click="toggle"
                data-toggle="collapse"
                :href="'#'+toggleId"
                role="button"
                aria-expanded="true"
                :aria-controls="toggleId"
              >{{this.titleComputed}}</h1>
              <kinesis-container event="scroll" class="kinesisWrapper">
                <kinesis-element class="kinesisWrapper" type="translate" :strength="-70">
                  <div class="projectTitleBg"></div>
                </kinesis-element>
              </kinesis-container>
            </div>
          </kinesis-element>
        </kinesis-container>

        <div class="projectContent collapse show" :id="toggleId">
          <h4 class="projectInfo">
            <span class="projectInfoLabel">Company</span>
            {{ this.companyComputed }}
          </h4>
          <h4 class="projectInfo">
            <span class="projectInfoLabel">year</span>
            {{ this.yearComputed }}
          </h4>
          <h4 class="projectInfo">
            <span class="projectInfoLabel">role</span>
            {{ this.roleComputed }}
          </h4>
          <p class="projectSummary">{{ descriptionComputed }}</p>
        </div>
        <div class="demoLinkWrapper" :class="showComputed">
          <a @click="galleryToggle"
            data-toggle="collapse"
            :href="'#'+galleryToggleId"
            role="button"
            aria-expanded="true"
            :aria-controls="galleryToggleId"
          >
          Pictures</a>
          <span class="demoLinkUnderline"></span>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="projectImgPreviewWrapper">
          <div class="projectImgWrapper" :id="imageId">
            <div class="previewImageLayer" id="projectImagePinkLayer"></div>
            <div class="previewImageLayer" id="previewImageWhiteLayer"></div>
            <img :src="'./projectPreviews/'+previewImgComputed" class="projectPreviewImage" :alt="'preview image for'+ titleComputed" />
            <div class="previewImageLayer" id="previewImageBg"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <kinesis-container class="projectGalleryKinesisContainer collapse" :id="galleryToggleId">
          <kinesis-element 
            type="translate"
            axis="x"
            :strength="1000"
            transformOrigin="-1000px 0"
            class="projectGalleryWrapper"
            >
            <div class="projectGalleryImageWrapper">
              <div class="previewImageLayer" id="projectImagePinkLayer"></div>
              <div class="previewImageLayer" id="previewImageWhiteLayer"></div>
              <img class="projectGalleryImage" :src="'./projectPreviews/'+previewImgComputed"/>
              <div class="previewImageLayer" id="previewImageBg"></div>
            </div>
            <div class="projectGalleryImageWrapper">
              <div class="previewImageLayer" id="projectImagePinkLayer"></div>
              <div class="previewImageLayer" id="previewImageWhiteLayer"></div>
              <img class="projectGalleryImage" :src="'./projectPreviews/'+previewImgComputed"/>
              <div class="previewImageLayer" id="previewImageBg"></div>
            </div>
            <div class="projectGalleryImageWrapper">
              <div class="previewImageLayer" id="projectImagePinkLayer"></div>
              <div class="previewImageLayer" id="previewImageWhiteLayer"></div>
              <img class="projectGalleryImage" :src="'./projectPreviews/'+previewImgComputed"/>
              <div class="previewImageLayer" id="previewImageBg"></div>
            </div>
            <div class="projectGalleryImageWrapper">
              <div class="previewImageLayer" id="projectImagePinkLayer"></div>
              <div class="previewImageLayer" id="previewImageWhiteLayer"></div>
              <img class="projectGalleryImage" :src="'./projectPreviews/'+previewImgComputed"/>
              <div class="previewImageLayer" id="previewImageBg"></div>
            </div>
          </kinesis-element>
        </kinesis-container>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import $ from 'jquery'
import { KinesisContainer, KinesisElement } from "vue-kinesis";

export default {
  name: "ProjectSummary",
  components: {
    KinesisElement,
    KinesisContainer
  },
  props: {
    project: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      expanded: true,
      galleryExpanded: false,
      expandGalleryToo: false,
      entranceAnimation: null,
      projectSummariesY: null,
      previewImageYBase: null,
      previewImageYCurrent: null,
      wrapperYOffsetStyle: {},
      xOffsetStyle: {},
      previewImagePerspectiveStyle: null
    };
  },
  mounted(){
    
    this.initEntranceAnimation();
  },
  computed: {
    titleComputed() {
      if (this.project) return this.project.title;
    },
    companyComputed() {
      if (this.project) return this.project.company;
    },
    yearComputed() {
      if (this.project) return this.project.year;
    },
    roleComputed() {
      if (this.project) return this.project.role;
    },
    descriptionComputed() {
      if (this.project) return this.project.description;
    },
    previewImgComputed(){
      if (this.project) return this.project.previewImg;
    },
    showComputed() {
      if (this.expanded) return "show";
    },
    showGalleryComputed() {
      if (!this.galleryExpanded) return "show";
    },
    collapseMarginComputed(){
      if(!this.expanded && !this.galleryExpanded) return "collapsedMargin"
    },
    toggleId() {
      return "dropdown" + this._uid;
    },
    galleryToggleId() {
      return "gallery" + this._uid;
    },
    imageId(){
      return "image" + this._uid;
    },
    wrapperYOffsetStyleComputed(){
      return this.wrapperYOffsetStyle;
    },
    xOffsetStyleComputed(){
      return this.xOffsetStyle;
    },
    previewImagePerspectiveStyleComputed(){
      if(this.previewImagePerspectiveStyle === null) return {};
      else return this.previewImagePerspectiveStyle;
    }
  },
  methods: {
    toggle() {
      this.expanded = !this.expanded;
      if(!this.expanded) {
        //save state before collapse
        if(this.galleryExpanded) this.expandGalleryToo = true;
        $("#"+this.galleryToggleId).collapse('hide');
        this.galleryExpanded = false;
      }
      else if(this.expandGalleryToo){
        $("#"+this.galleryToggleId).collapse('show');
        this.galleryExpanded = true;
        this.expandGalleryToo = false;
      } 
    },
    galleryToggle() {
      this.galleryExpanded = !this.galleryExpanded;
    },
    getEl: function (selector) {
  		return this.$vnode.elm.querySelector(selector);
  	},
    handleScroll(event, element){

      let imageY = element.getBoundingClientRect().top + window.scrollY - 800;
      let pageScroll = document.documentElement.scrollTop || document.body.scrollTop;

      if(!this.entranceAnimation.began && (pageScroll > imageY)) {
        this.entranceAnimation.play();
      }
    },
    computeImageEntrance(){
      this.previewImagePerspectiveStyle = {
        transform: `perspective(1500px) rotateX(50deg) rotateZ(-16deg) rotateY(13deg) scale(1.5) translateY(250px)`,
        opacity: "1"
      }
    },
    initEntranceAnimation(){
      this.entranceAnimation = new anime({
        targets: this.getEl("#"+this.imageId),
        perspective: 1500,
        translateY: [900, 250],
        rotateX: [25, 50],
        rotateY: [0, 13],
        rotateZ: [-1, -16],
        scale: [1.49, 1.5],
        opacity: [0,1],
        duration: 2300,
        autoplay: false,
        easing: 'easeOutExpo'
      });
    },
    computeYOffset(scrollValue){
      let offsetScroll = 0;//Math.exp(scrollValue*0.01) - 100;
      this.wrapperYOffsetStyle = {
        transform: `translateY(${offsetScroll}px)`,
      }
    },
    computeXOffset(scrollValue){
      let offsetScroll = Math.exp(scrollValue*0.01) - 100;
      this.xOffsetStyle = {
        transform: `translateX(-${offsetScroll}px)`,
      }
    },
    clampInterpolation(value, min, max){
      if(value < min) return min;
      if(value > max) return max;
      return value;
    },
    interpolate(progress, from, to){
      return from + (to-from)*progress;
    },
    easeValue(val){
      return val/(2-val);
    }
  }
};
</script>

<style lang="scss">
.projectSummaryRoot {
  margin: 10rem 0;
  margin-bottom: 30rem;

  transition: margin-bottom ease-out 0.15s;

  .projectDot {
    display: block;
    position: absolute;
    margin-top: 20px;
    z-index: 3;
    width: 20px;
    height: 20px;
    background-color: var(--applered);
    border: 6px solid white;
    border-radius: 100%;
    left: -74px;
  }

  .projectTitleWrapper {
    display: flex;
    position: relative;
    width: 65%;
    // transform-origin: 50% 50%;
    // transform: rotateY(9.97684deg) translate3d(0px, 0px, 20px);

    .projectTitle {
      color: transparent;
      -webkit-text-stroke: 2px black;
      text-transform: uppercase;
      z-index: 4;
      font-size: 3rem;
      display: inline-flex;
      align-items: baseline;

      transition: color 0.1s ease-out;
    }

    .projectTitle:hover {
      color: #b17f7f;
      -webkit-text-stroke: 0px;
      cursor: pointer;
    }

    .kinesisWrapper {
      position: absolute;
      width: 100%;
      height: 100%;

      .projectTitleBg {
        position: absolute;
        top: 0px;
        left: -14px;
        height: 80%;
        width: 70%;
        background-color: var(--lightpink);
        z-index: 0;
      }
    }
  }
  .projectContentCol{
    z-index: 1;
  }
  .projectContent {
    padding-top: 1rem;

    .projectInfo {
      $info-spacing: 0.4rem;
      padding: $info-spacing 0;
      text-transform: uppercase;
      font-family: "Montserrat";
      font-weight: 700;
      color: var(--applered);

      .projectInfoLabel {
        color: black;
        padding-right: $info-spacing;
      }
    }
  }

  .projectImgPreviewWrapper{
    margin-top: -250px;
    margin-left: -200px;
    width: 100%;
    //z-index: -1;
    display: flex;
    justify-content: flex-end;
    position: relative;
    transition: transform ease-out 0.25s;
    
    &:hover{

      .projectImgWrapper{
        .projectPreviewImage{
          filter: saturate(1) blur(0px);
        }
      }

      #projectImagePinkLayer{
        background-color: rgba(#ebd8d8, 0);
      }

      #previewImageWhiteLayer{
        background-color: rgba(white, 0);
      }
    }

    .projectImgWrapper{
      width: 80%;
      position: relative;
      opacity: 0;
    
      .projectPreviewImage{
        z-index: -5;
        filter: saturate(0);
        position: relative;
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
  }

  .demoLinkWrapper {
    position: relative;
    width: 110px;

    a {
      display: none;
    }

    .demoLinkUnderline {
      display: block;
      position: absolute;
      bottom: -10px;
      height: 6px;
      width: 100%;
      background-color: var(--applered);
      transition: bottom ease-out 0.15s;
    }
  }

  .demoLinkWrapper.show {
    width: fit-content;

    a {
      display: block;
      color: black;
      font-size: 1.2rem;
    }

    a:hover{
      color: var(--applered);
      text-decoration: none;
    }

    &:hover{

      .demoLinkUnderline{
        bottom: -8px;
      }
    }
  }

  .projectGalleryKinesisContainer{
    
    .projectGalleryWrapper{
      margin-top: 120px;
      display: flex;
      flex-flow: row nowrap;
      overflow-x: visible;

      .projectGalleryImageWrapper{
        position: relative;
        transform: translate3d(0, 0, 0) translateX(-160%) ;
        margin-right: 10%;
        transition: transform cubic-bezier(0.35, 0.76, 0.36, 1) 0.15s;

        &:hover{
          transform: translate3d(0, 0, 0) translateX(-160%) rotateX(0deg) rotateZ(0deg) rotateY(0deg) translateY(-100px) scale(1.3);
          //margin-right: 10%;

          .projectGalleryImage{
            filter: saturate(1) blur(0px);
          }

          #projectImagePinkLayer{
            background-color: rgba(#ebd8d8, 0);
          }

          #previewImageWhiteLayer{
            background-color: rgba(white, 0);
          }
          #previewImageBg{
            top: 0px;
            left: 0px;
            transform: scale(0.9);
            background-color: var(--applered);
          }
        }
      }
  
      .projectGalleryImage{
        width: 500px;
        height: auto;
        backface-visibility: hidden;
        object-fit: contain;
        z-index: -5;
        position: relative;
        filter: saturate(0) blur(0px);
        transition: filter ease-out 0.15s;
      }
  
    }
  }
  .previewImageLayer{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: background-color ease-out 0.35s,
                top ease-out 0.15s,
                left ease-out 0.15s,;
  }

  #projectImagePinkLayer{
    z-index: -3;
    background-color: rgba(#ebd8d8, 1);
    mix-blend-mode: multiply;
  }

  #previewImageWhiteLayer{
    z-index: -4;
    background-color: rgba(white, 0.56);
  }
  #previewImageBg{
    z-index: -6;
    top: 5px;
    left: -5px;
    background-color: var(--applered);
  }
}

// ugly hard coding for first projectsummary 
.projectSummaryRoot:nth-child(3){
  margin: 0;
  margin-top: 5rem;
  margin-bottom: 50rem;
}
.projectSummaryRoot.collapsedMargin:nth-child(3){
  margin-bottom: 40rem;
}
.projectSummaryRoot.collapsedMargin{
  margin-bottom: 25rem;
}
</style>