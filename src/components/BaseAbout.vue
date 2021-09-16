<template>
    <div class="container baseAboutRoot">
        <div class="row">
            <div class="col-sm-12">
                <div class="">
                    <div class="aboutTitleWrapper">
                        <h2 class="aboutTitle aboutTitleBack">Who I Am.</h2>
                        <h2 class="aboutTitle aboutTitleMid">Who I Am.</h2>
                        <h2 class="aboutTitle aboutTitleFront util-outline-red">Who I Am.</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <div class="aboutLeft">
                    <p class="aboutText">
                        I am a frontend developer with passion for interface design and 
                        unique user experiences on the web. I got an engineering 
                        background in media technology where I’ve been working with 
                        everything from sound processing to computer graphics to interaction design.
                    </p>
                    <div class="aboutTextRect"></div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="aboutRight">
                    <p class="aboutText">
                        I love being creative with photography, music, graphic design, 
                        clothing and painting but most of all digital experiences. 
                        Looking at good content and using great products inspires me 
                        everytime I stumble upon them. With this drive I aim to 
                        create experiences people remember and sincerly enjoy.
                    </p>
                    <div class="aboutTextRect"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "BaseAbout",
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
    padding-bottom: 190px;

    .aboutTitleWrapper{
        padding-top: 60px;
        padding-left: 40px;
        padding-bottom: 50px;
        position: relative;
        z-index: 1;

        .aboutTitle{
            color: white;
            text-transform: uppercase;
            font-size: 70px;
        }

        .aboutTitleBack{
            position: absolute;
            left: 0px;
            top: 40px;
            color: #2e2e2e;
            z-index: -1;
        }
        .aboutTitleMiddle{
            
        }
        .aboutTitleFront{
            position: absolute;
            left: 100px;
            bottom: 10px;  
            color: transparent; 
            z-index: 1;
        }
    }

    .aboutLeft, .aboutRight{
        padding-top: 50px;

        .aboutText{
            color: white;
        }

    }

    .aboutLeft{
        
    }
}

</style>