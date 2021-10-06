<template>
    <kinesis-container 
        :duration="200" 
        :perspective="1000000" 
        :active="!onMobile" 
        class="container baseAboutRoot" 
        :class="onMobileComputed"
    >
        <div class="row">
            <div class="col-sm-10 offset-sm-1">
                <h2 class="aboutTitleWrapper">
                    <kinesis-element class="aboutTitle aboutTitleBack"
                        type="depth_inv"
                        :strength="-5"
                        :originX="60"
                        :originY="10"
                        :minX="-3"
                        :maxY="5"
                        transformOrigin="100% 100% -6cm"
                    >
                        Who I Am.
                    </kinesis-element>
                    <kinesis-element class="aboutTitle aboutTitleMid"
                        type="depth_inv"
                        :strength="-10"
                        :originX="60"
                        :originY="10"
                        :minX="-3"
                        :maxY="10"
                        transformOrigin="100% 100% 2cm"
                    >
                        Who I Am.
                    </kinesis-element>
                    <kinesis-element class="aboutTitle aboutTitleFront util-outline-red"
                        type="depth_inv"
                        :strength="-10"
                        :originX="60"
                        :originY="10"
                        :minX="-3"
                        :maxY="10"
                        transformOrigin="100% 100% 9cm"
                    >
                        Who I Am.
                    </kinesis-element>
                </h2>
            </div>
        </div>
        <kinesis-container :duration="300" event="scroll" class="row">
            <div class="col-xs-5 offset-xs-1 col-sm-5 offset-sm-1 col-md-8 col-lg-5 offset-lg-1">
                <div class="aboutLeft">
                    <kinesis-element 
                        tag="p" 
                        class="aboutText"
                        :strength="-80">
                        I am a frontend developer with passion for interface design and 
                        unique user experiences on the web. I got an engineering 
                        background in media technology where I’ve been working with 
                        everything from sound processing to computer graphics to interaction design.
                    </kinesis-element>
                    <kinesis-element 
                        class="aboutTextRect"
                        type="translate"
                        :strength="onMobileKineticUpperRectStrength"
                        :maxY="20">
                    </kinesis-element>
                </div>
            </div>
            <div class="col-xs-7 offset-xs-4 col-sm-7 offset-sm-4 col-md-6 offset-md-4 col-lg-4 offset-lg-1">
                <div class="aboutRight">
                    <kinesis-element tag="img" :strength="80" class="aboutPortrait behind" src="./porttrait-fill.png" alt="portrait image of Kevin Evans" />
                    <kinesis-element tag="img" :strength="-80" class="aboutPortrait" src="./porttrait.png" alt="portrait image of Kevin Evans" />
                    <kinesis-element 
                        tag="p" 
                        class="aboutText"
                        :strength="-280"
                        :maxY="-90">
                        I love being creative with photography, music, graphic design, 
                        clothing and painting but most of all digital experiences. 
                        Looking at good content and using great products inspires me 
                        everytime I stumble upon them. With this drive I aim to 
                        create experiences people remember and sincerly enjoy.
                    </kinesis-element>
                    <kinesis-element 
                        class="aboutTextRect"
                        :strength="20"></kinesis-element>
                </div>
            </div>
        </kinesis-container>
    </kinesis-container>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";


export default {
    name: "BaseAbout",
    components: {
        KinesisElement,
        KinesisContainer
    },
    data () {
        return {
            onMobile: false
        };
    },
    mounted(){
        document.documentElement.style.setProperty("--nav-background", "transparent")
        document.documentElement.style.setProperty("--nav-color", "white")
        document.documentElement.style.setProperty("--logo-color", "white")
        
        let aboutBg = getComputedStyle(document.documentElement).getPropertyValue("--about-bg")
        document.documentElement.style.setProperty("--background-color", aboutBg)

        let mmQuery = window.matchMedia("(max-width: 560px)");
        mmQuery.addEventListener("change", this.onQuery);
        this.toggleMobile(mmQuery.matches);
    },
    computed: {
        onMobileComputed(){
            if(this.onMobile) return "mobile";
            return "";
        },
        onMobileKineticUpperRectStrength(){
            if(this.onMobile) return 80;
            return 140;
        }
    },
    methods: {
        onQuery(e){
            if(e.matches) this.toggleMobile(true);
            else this.toggleMobile(false);
        },
        toggleMobile(state){
            if(state) this.onMobile = true;
            else this.onMobile = false;
        }
    }
}
</script>

<style lang="scss">
@import "../custom-variables.scss";

.baseAboutRoot{
    background-color: var(--about-bg);
    padding-top: 30px;
    padding-bottom: 90px;

    .aboutTitleWrapper{
        margin-top: 80px;
        margin-bottom: 280px;
        position: relative;
        z-index: 1;

        .aboutTitle{
            color: white;
            text-transform: uppercase;
            font-size: 70px;
        }

        .aboutTitleBack{
            position: absolute;
            color: #2e2e2e;
            z-index: -1;
        }
        .aboutTitleMid{
            position: absolute;
        }
        .aboutTitleFront{
            position: absolute;
            color: transparent; 
            z-index: 1;
        }
    }

    .aboutLeft, .aboutRight{
        padding-top: 50px;
        position: relative;
        z-index: 1;

        .aboutText{
            color: white;
            font-size: 16px;
            line-height: 30px;
            margin-top: -30px;
        }

        .aboutTextRect{
            display: block;
            position: absolute;
            top: 30px;
            left: -20px;
            z-index: -1;
            width: 40%;
            height: 70%;
            background-color: var(--applered);
        }
    }

    .aboutLeft{

        .aboutTextRect{
            width: 60%;
            height: 70%;
        }
    }
    .aboutRight{
        margin-top: 40px;
        z-index: 10;

        .aboutPortrait{
            position: absolute;
            z-index: -1;
            left: 30px;
            width: 55%;
            top: -280px;
            height: auto;
            object-fit: fill;
        }
        .aboutPortrait.behind{
            left: 0px;
            top: -300px;
        }

    }

    .aboutMusic{
        padding-top: 80px;
        padding-bottom: 80px;
        color: white;

        .aboutMusicTitle{
            text-transform: uppercase;
            color: white;
            font-size: 50px;
            //font-family: 'Montserrat';
            font-weight: 700;
        }

        > a{
            text-transform: uppercase;
            color: white;

            &:hover{
                color: var(--applered);
                text-decoration: none;
            }
        }
        
    }
}

@media screen and (max-width: map-get($map: $grid-breakpoints, $key: "lg")){
    .baseAboutRoot{
        
        .aboutRight{
            z-index: -1;

            .aboutPortrait, .aboutPortrait.behind{
                width: 70%;
                top: -350px;
                left: 100px;
            }
        }
    }
}

@media screen and (max-width: map-get($map: $grid-breakpoints, $key: "md")){
    .baseAboutRoot{
        
        .aboutRight{
            z-index: -1;

            .aboutPortrait, .aboutPortrait.behind{
                width: 50%;
                top: -350px;
                left: 100px;
            }
        }
    }
}
.baseAboutRoot.mobile{
    .aboutTitleWrapper{
        margin-left: 1vw;
        margin-top: 15rem;
        margin-bottom: 0;

        padding-top: 11rem;
        padding-bottom: 0rem;
        width: 100%;

        .aboutTitle{
            font-size: 14vw;
            word-break: keep-all;
            width: 100%;
        }

        .aboutTitleBack{
            left: -40px;
            top: -35px;
        }
        .aboutTitleMid{
            top: 0;
            left: 0;
        }

        .aboutTitleFront{
            left: 40px;
            top: 35px;
        }
    }
    .aboutLeft{
        padding-top: 0;
        width: 80%;
        margin-left: 10%;
    }

    .aboutRight{
        width: 70%;
        margin-left: 15%;

        .aboutPortrait, .aboutPortrait.behind{
            top: -42rem;
            left: 20vw;
            width: 80%;
        }

        .aboutTextRect{
            width: 90%;
        }
    }
}

</style>