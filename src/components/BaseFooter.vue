<template>
    <div class="baseFooterRoot">
        <div class="footerSlantElement"></div>
        <h2 class="footerTitleText">Let's<span class="util-outline-red"> Get in Touch</span></h2>
        <p class="footerBodyText">Wan't to discuss your next idea, have a chat over a cup of joe or learn more about how I'll fit into your dream team?
            Reach me at <a href="mailto:k.evans.c@gmail.com" class="footerContact">k.evans.c@gmail.com</a> or at any of the links below.
        </p>
        <div class="footerContactInformation">
            <!-- <span class="arrow">></span> -->
            <!-- <a id="phoneNumber" class="footerContact">0762328355</a> -->
            <a target="_blank" href="//www.linkedin.com/in/k-evans-c" class="footerContact">LinkedIn</a>
            <a target="_blank" href="//www.github.com/kevinec" class="footerContact">Github</a>
            <!-- <a href="#" class="footerContact">Instagram</a> -->
        </div>
        <p v-if="!aboutPageComputed" class="footerBodyText">Still curious? Take a look at my <router-link class="router-link" to="/about">about page</router-link>.</p>
    </div>
</template>

<script>
export default {
    name: "BaseFooter",
    data () {
        return {

        }
    },
    computed: {
        aboutPageComputed(){
            if(this.$route.name == "about") return true;
            else return false;
        }
    },
}

</script>

<style lang="scss">
@import "../custom-variables.scss";

.baseFooterRoot{
    background-color: var(--offBlack);
    padding: 50px 6%;
    padding-top: 70px;
    position: relative;
    z-index: 1;

    .footerSlantElement{
        background-color: var(--offBlack);
        height: 300px;
        position: absolute;
        z-index: -1;
        width: 115vw;
        margin-left: -83px;
        top: -40px;
        transform: rotate(3deg);
    }

    .footerTitleText{
        font-size: 80px;
        text-transform: uppercase;
        color: var(--applered)
    }

    .footerBodyText{
        color: var(--offWhite);
        padding-top: 20px;
        width: 45%;
        line-height: 29px;

        a{
            color: var(--offWhite);
            text-decoration: underline;
            font-family: 'Montserrat';

            &:hover{
                color: var(--applered)
            }
        }

        .router-link{
            color: var(--applered);
            font-weight: 600;
        }
    }

    .footerContactInformation{
        display: flex;
        flex-flow: row wrap;
        padding: 20px 0;

        .arrow{
            color: white;
            padding-right: 10px;
            margin-left: -10px;
            font-weight: bold;
        }

        .footerContact{
            margin-right: 90px;
            color: var(--offWhite);
            text-transform: uppercase;

            &#phoneNumber:hover{
                color: white;
            }
            
            &:hover{
                color: var(--applered);
                text-decoration: none;
            }
        }
    }
}

@media screen and (max-width: map-get($map: $grid-breakpoints, $key: "lg")){

    .baseFooterRoot{
        padding-top: 30px;

        .footerTitleText{
            font-size: 7vw;
        }

        .footerBodyText{
            width: 70%;
        }

        
    }
}

@media screen and (max-width: map-get($map: $grid-breakpoints, $key: "md")){
    .baseFooterRoot{
        .footerTitleText{
            font-size: 14vw;
        }
        .footerBodyText{
            width: 100%;
        }
        .footerContactInformation{
            .footerContact{
                margin-right: 5vw;
            }
        }

    }
}
</style>