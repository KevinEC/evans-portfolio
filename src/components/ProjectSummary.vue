<template>
  <div class="projectSummaryRoot" :class="collapseMarginComputed" v-scroll="handleScroll">
    <div class="row" :style="wrapperYOffsetStyleComputed">
      <div class="col-sm-6 d-none d-lg-block projectContentCol">
        <div class="projectDot" :class="projectDotExpandedComputed"></div>
        <kinesis-container  :perspective="500">
          <kinesis-element 
              type="depth_inv" 
              :strength="10" 
              axis="x"
              transformOrigin="50% 0%"
            >
            <div class="projectTitleWrapper">
              <h1
                class="projectTitle"
                @click="toggle"
                @mouseover="titleHover"
                @mouseleave="titleHover"
                data-toggle="collapse"
                :href="'#'+toggleId"
                role="button"
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

        <div class="projectContent collapse" :class="initExpanded" :id="toggleId">
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
      <!-- LEFT COL MOBILE LAYOUT -->
      <div class="col-sm-6 d-lg-none projectContentCol">
        <div class="projectDot"
            :class="projectResponsive + projectDotExpandedComputed"
            @click="toggle"
            data-toggle="collapse"
            :href="'#'+toggleId"
            role="button"
            :aria-controls="toggleId"
        ></div>
        <kinesis-container  :perspective="500">
          <kinesis-element 
              type="scroll" 
              :strength="10" 
              axis="x"
              transformOrigin="50% 0%"
            >
            <div class="projectTitleWrapper">
              <h1
                class="projectTitle"
                :class="projectResponsive"
                @click="toggle"
                @mouseover="titleHover"
                @mouseleave="titleHover"
                data-toggle="collapse"
                :href="'#'+toggleId"
                role="button"
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
      </div>
      <!-- PREVIEW IMAGE MOBILE LAYOUT -->
      <div class="col-sm-6 d-lg-none">
        <div class="projectImgPreviewWrapper" :class="projectResponsive">
          <div class="projectImgWrapper" :id="imageId">
            <div class="previewImageLayer" id="projectImagePinkLayer"></div>
            <div class="previewImageLayer" id="previewImageWhiteLayer"></div>
            <img :src="'./projectPreviews/'+previewImgComputed" class="projectPreviewImage" :alt="'preview image for'+ titleComputed" />
            <div class="previewImageLayer" id="previewImageBg"></div>
          </div>
        </div>
      </div>
      <!-- PROJECT INFO MOBILE LAYOUT -->
      <div class="d-lg-none">
        <div class="col-xs-12  projectContent collapse" :class="initExpanded" :id="toggleId">
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
          <p class="projectSummary">
            {{ descriptionComputed }}
            
          </p>
        </div>
        <div class="demoLinkWrapper d-lg-none" :class="showComputed">
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
      
      <div class="col-sm-6 d-none d-lg-block">
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
      <div class="col-sm-12 collapse" :id="galleryToggleId">
        <Flicking
          class="projectGalleryWrapper"
          :style="{overflow: 'visible'}"
          :options="{
            align: 'prev',
            circular: true,
            autoResize: true
          }"
          :plugins="plugins"
          ref="flicking"
        >
          <div v-for="(image, i) in galleryImagesComputed"
               :key="i"
               class="projectGalleryImageWrapper panel"
          >
            <div class="previewImageLayer" id="projectImagePinkLayer"></div>
            <div class="previewImageLayer" id="previewImageWhiteLayer"></div>
            <img class="projectGalleryImage" :src="'./projectPreviews/'+galleryPathComputed+'/'+image"/>
            <div class="previewImageLayer" id="previewImageBg"></div>
          </div>
          <span slot="viewport" class="flicking-arrow-prev"></span>
          <span slot="viewport" class="flicking-arrow-next"></span>
        </Flicking>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import $ from 'jquery'
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import { Flicking } from "@egjs/vue-flicking";
import { Arrow } from "@egjs/flicking-plugins";

export default {
  name: "ProjectSummary",
  components: {
    KinesisElement,
    KinesisContainer,
    Flicking
  },
  props: {
    project: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      plugins: [new Arrow()],
      expanded: false,
      galleryExpanded: false,
      expandGalleryToo: false,
      entranceAnimation: null,
      projectSummariesY: null,
      previewImageYBase: null,
      previewImageYCurrent: null,
      projectOnScreen: true,
      wrapperYOffsetStyle: {},
      xOffsetStyle: {},
      previewImagePerspectiveStyle: null,
      titleHovered: false,
      holdFillState: false,
    };
  },
  mounted(){
    //this.initEntranceAnimation();
    this.expandOnInit();
    window.onresize = this.onResize;

    let mmQuery = window.matchMedia("(max-width: 900px)");
    mmQuery.addEventListener("change", this.updateEntranceAnimation);
    if(mmQuery.matches) this.entranceAnimation = this.initEntranceAnimation("mobile");
    else this.entranceAnimation = this.initEntranceAnimation();
    
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
    initExpanded(){
      if(this.project && this.project.initExpanded) return "show";
    },
    projectDotExpandedComputed(){
      if(!this.holdFillState && this.expanded && this.titleHovered) {
        return "" // if project expanded and u hover preview closed state e.g not fill
      }
      else if(!this.holdFillState && !this.expanded && this.titleHovered) {
        return "fill"
      }
      else if (this.expanded) {
        return "fill";
      }
      else if(!this.expanded){
        return "";
      } 
    },
    projectResponsive(){
      if(this.projectOnScreen) return "mobile ";
      else return "";
    },
    previewImgComputed(){
      if (this.project) return this.project.previewImg;
    },
    galleryPathComputed(){
      if (this.project) return this.project.galleryPath;
    },
    galleryImagesComputed(){
      if (this.project) return this.project.gallery;
    },
    galleryScrollStrength(){
      if(this.galleryImagesComputed.length > 5) return 2000
      else return 1000;
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
    galleryDisplayStyle(){
      if(this.galleryExpanded) return {display: "flex"}
      return {display: "unset"}
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
      this.holdFillState = true;
    },
    titleHover(e){
      if(e.type == "mouseleave") {
        this.titleHovered = false;
        this.holdFillState = false;
      }
      else if (e.type == "mouseover") this.titleHovered = true;
    },
    galleryToggle() {
      this.galleryExpanded = !this.galleryExpanded;

      setTimeout(() => {this.$refs.flicking.resize()}, 1000);
    },
    expandOnInit(){
      if(this.project.initExpanded){
        this.expanded = true;
      }
    },
    getEl: function (selector) {
  		return this.$vnode.elm.querySelector(selector);
  	},
    onResize(e){
      console.log("RESIZE")
      this.$refs.flicking.resize();
    },
    handleScroll(event, element){

      let imageY = element.getBoundingClientRect().top + window.scrollY - 800;
      let pageScroll = document.documentElement.scrollTop || document.body.scrollTop;
      
      if(this.entranceAnimation != null && !this.entranceAnimation.began && (pageScroll > imageY)) {
        this.entranceAnimation.play();
      }

      if((pageScroll > imageY + 250) && (pageScroll < imageY + 600)){
        this.projectOnScreen = true;
      } else {
        this.projectOnScreen = false;
      }
    },
    computeImageEntrance(){
      this.previewImagePerspectiveStyle = {
        transform: `perspective(1500px) rotateX(50deg) rotateZ(-16deg) rotateY(13deg) scale(1.5) translateY(250px)`,
        opacity: "1"
      }
    },
    updateEntranceAnimation(e){
      if(e.matches) this.entranceAnimation = this.initEntranceAnimation("mobile");
      else this.entranceAnimation = this.initEntranceAnimation();
    },
    initEntranceAnimation(format){
      let cssClass = "d-lg-block";
      if(format == "mobile") cssClass = "d-lg-none";
      return new anime({
        targets: this.getEl(`.${cssClass} #${this.imageId}`),
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
  }
}
</script>

<style lang="scss">
@import "../custom-variables.scss";
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
    box-shadow: 0 0 10px var(--lightpink);

    transition: border ease-out 0.15s;

    &.fill {
      border: 1px solid white;
    }
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
      color: var(--dullerpink);
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
      $info-spacing: 0.2rem;
      padding: $info-spacing 0;
      text-transform: uppercase;
      font-family: "Montserrat";
      font-weight: 700;
      color: var(--applered);
      text-shadow: 2px 2px 0px var(--dullpaper);

      .projectInfoLabel {
        color: black;
        text-shadow: none;
        padding-right: $info-spacing;
      }
    }

    .projectSummary{
      padding-top: 0.4rem;
    }
  }

  .projectImgPreviewWrapper{
    margin-top: -250px;
    margin-left: -20px;
    width: 100%;
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
      font-family: "Archivo Black"
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



  .projectGalleryWrapper{
    margin-top: 120px;
    display: flex;
    flex-flow: row nowrap;

    .flicking-arrow-next, .flicking-arrow-prev{
      border-radius: 100%;
      background-color: rgba(white, 0.8);
      &:before,&:after{
        background-color: var(--dullerpink);
      }
      &:hover{
        &:before,&:after{
          background-color: var(--applered);
        }
      }
    }

    .projectGalleryImageWrapper{
      position: relative;
      margin-right: 10%;
      height: 100%;
      transition: transform cubic-bezier(0.35, 0.76, 0.36, 1) 0.15s;

      &:hover{

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

@media screen and (max-width: map-get($map: $grid-breakpoints, $key: "lg")){
  .projectSummaryRoot{

    .projectDot{
      left: -25px;
    }

    .projectTitleWrapper{

      .projectTitle{
        font-size: 2.3rem;
      }
    }

    .projectContent{
      padding-left: 2rem;
      position: relative;
    }

    .projectImgPreviewWrapper{
      width: 120%;
      z-index: 0;
    }

    .demoLinkWrapper{
      margin-left: 2rem;
    }
  }
}

@media screen and (max-width: map-get($map: $grid-breakpoints, $key: "sm")){
  .projectSummaryRoot{
    
    .projectContentCol{
      display: flex;
      align-items: center;
    }

    .projectDot{
      left: unset;
      right: 0vw;
      margin-top: -10px;

      width: 8vw;
      height: 8vw;
      background-color: var(--applered);
      border: 2.3vw solid var(--dullpaper);

      &.mobile{
        border: 2.3vw solid var(--lightpink);
        box-shadow: 0px 0px 1px var(--dullerpink);
      }
      &.mobile.fill{
        border: 1vw solid var(--lightpink);
      }
    }
    .projectTitleWrapper{
      width: 80%;

      .projectTitle{
        width: 40%;
        font-size: 2rem;

        &:hover{
          -webkit-text-stroke: 2px black;
          color: transparent;
        }
        &:active{
          -webkit-text-stroke: 0px;
          color: var(--dullerpink);
        }
      }
    }

    .projectInfo{
      font-size: 1.3rem;
      margin: 0;
    }

    .projectContent{
      padding-left: 1rem;

      .projectSummary{
        position: relative;
        .projectSummaryBg{
          position: absolute;
          top: 0;
          left: -20px;
          width: 100%;
          height: 100%;
          background-color: var(--applered);
          z-index: -1;
        }
      }

    }

    .demoLinkWrapper{
      margin-left: 1rem;
    }

    .projectImgPreviewWrapper{
      width: 120%;
      margin-top: -500px;
      z-index: -1;

      &.mobile{
        #projectImagePinkLayer{
          background-color: rgba(#ebd8d8, 0);
        }

        #previewImageWhiteLayer{
          background-color: rgba(white, 0);
        }
        
        .projectPreviewImage{
          filter: saturate(1) blur(0px);
        }
      }
    }

    .projectGalleryWrapper{
      .flicking-arrow-next, .flicking-arrow-prev{
        display: none;
      }
      
      .projectGalleryImage{
        width: 90vw;
      }
      .projectGalleryImageWrapper{
      
        &:hover{
          transform: translateY(0);
        }

        .projectGalleryImage{
          filter: saturate(1) blur(0px);
        }

        #projectImagePinkLayer{
          background-color: rgba(#ebd8d8, 0);
        }

        #previewImageWhiteLayer{
          background-color: rgba(white, 0);
        }
      }

    }
    
  }
}
</style>