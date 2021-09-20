<template>
    <kinesis-container :duration="2000" :perspective="1000000" :active="true" class="container baseAboutRoot">
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
            <div class="col-sm-5 offset-sm-1">
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
                        :strength="140"
                        :maxY="20">
                    </kinesis-element>
                </div>
            </div>
            <div class="col-sm-4 offset-sm-1">
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

        };
    },
    mounted(){
        document.documentElement.style.setProperty("--nav-background", "transparent")
        document.documentElement.style.setProperty("--nav-color", "white")
        document.documentElement.style.setProperty("--logo-color", "white")
        let aboutBg = getComputedStyle(document.documentElement).getPropertyValue("--about-bg")

        document.documentElement.style.setProperty("--background-color", aboutBg)

    }
}
</script>

<style lang="scss">
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

</style>