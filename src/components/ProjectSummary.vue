<template>
  <div class="projectSummaryRoot" v-scroll="handleScroll">
    <div class="row" :style="wrapperYOffsetStyleComputed">
      <div class="col-sm-6">
        <div class="projectDot"></div>
        <kinesis-container :perspective="500">
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
                <kinesis-element class="kinesisWrapper" type="translate" :strength="-50">
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
          <a href="#">DEMO</a>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="projectImgPreviewWrapper">
          <div class="projectImgWrapper" :id="imageId" :style="previewImagePerspectiveStyleComputed">
            <div class="previewImageLayer" id="projectImagePinkLayer"></div>
            <div class="previewImageLayer" id="previewImageWhiteLayer"></div>
            <img :src="'./projectPreviews/'+previewImgComputed" class="projectPreviewImage" :alt="'preview image for'+ titleComputed" />
            <div class="previewImageLayer" id="previewImageBg"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
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
      projectSummariesY: null,
      previewImageYBase: null,
      previewImageYCurrent: null,
      wrapperYOffsetStyle: {},
      xOffsetStyle: {},
      previewImagePerspectiveStyle: null
    };
  },
  mounted(){
    console.log("window viewbox: ", window.innerHeight);
    //console.log("projectSummariesY: ", this.$vnode.elm.parentNode.getBoundingClientRect().y);
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
    toggleId() {
      return "dropdown" + this._uid;
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
    },
    getEl: function (selector) {
  		return this.$vnode.elm.querySelector(selector);
  	},
    handleScroll(event, element){
      if(this.previewImageYBase === 0) this.previewImageYBase = element.getBoundingClientRect().y;

      let imageY = element.getBoundingClientRect().y;
      let centralizedImageY = imageY + 400;
      let bottomImageY = imageY - 500;

      if(bottomImageY < this.previewImageYBase) {
        // trigger animation
        console.log(this.titleComputed + " time to trigger preview imgage animation");
        this.computeImageEntrance();
      }

      // goes from -1 to 1 when the preview image is centered
      let normalizedScroll = ((centralizedImageY - window.scrollY) / centralizedImageY) + 1;

      if(normalizedScroll > 1) normalizedScroll = 1;
      if(normalizedScroll < 0) normalizedScroll = 0;
    },
    computeImageEntrance(){
      this.previewImagePerspectiveStyle = {
        transform: `perspective(1500px) rotateX(50deg) rotateZ(-16deg) rotateY(13deg) scale(1.5) translateY(250px)`,
        opacity: "1"
      }
    },
    entranceAnimation(){
      let timeline = new anime.timeline({

      });

      /** TODO
       * animate an entrance for the preview images at a fixed pixel position.
       * Animate using anime to ease the effect of sliding up from below
       * in a perspective.
       */
      let imageAnime = new anime({
        targets: this.getEl("#"+this.imageId),
        translateX: []
      })
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
  margin: 50rem 0;

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
    display: flex;
    justify-content: flex-end;
    position: relative;
    z-index: -1;

    .projectImgWrapper{
      width: 80%;
      position: relative;
      opacity: 0;
      //transform: perspective(1500px) rotateX(72deg) rotateZ(-16deg) rotateY(4deg) scale(1.5) translateY(80vh) translateX(-100px);
      // perspective(1500px) rotateX(50deg) rotateZ(-16deg) rotateY(13deg) scale(1.5) translateY(100vh);
      //transition: transform 0.8s cubic-bezier(0.07, 0.99, 0.4, 0.99);

      @keyframes entrance {
        0%{
          transform: perspective(1500px) rotateX(72deg) rotateZ(-16deg) rotateY(4deg) scale(1.5) translateY(100vh) translateX(-100px);
        }

        75%{
          transform: perspective(1500px) rotateX(60deg) rotateZ(-16deg) rotateY(8deg) scale(1.5) translateY(300px) translateX(-20px);
        }

        100%{
          transfrom: perspective(1500px) rotateX(50deg) rotateZ(-16deg) rotateY(13deg) scale(1.5) translateY(250px);
        }
      }

      .previewImageLayer{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
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
    
      .projectPreviewImage{
        z-index: -5;
        filter: saturate(0);
        position: relative;
        width: 100%;
        height: auto;
        object-fit: contain;
      }

      #previewImageBg{
        z-index: -6;
        top: 5px;
        left: -5px;
        background-color: var(--applered);
      }
    }
  }

  .demoLinkWrapper {
    position: relative;
    width: 110px;

    a {
      display: none;
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      bottom: -10px;
      height: 6px;
      width: 100%;
      background-color: var(--applered);
    }
  }

  .demoLinkWrapper.show {
    width: fit-content;

    a {
      display: inline;
      color: black;
      font-size: 1.2rem;
    }
  }
}

// ugly hard coding for first projectsummary 
.projectSummaryRoot:nth-child(3){
  margin: 0;
  margin-top: 5rem;
  margin-bottom: 50rem;
}
</style>