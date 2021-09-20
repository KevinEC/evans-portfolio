<template>
    <div class="baseFooterRoot">
        <div class="footerSlantElement"></div>
        <h2 class="footerTitleText">Let's<span class="util-outline-red"> Get in Touch</span></h2>
        <p class="footerBodyText">Wan't to discuss your next idea, have a chat over a cup of joe or learn more about how I'll fit into your dream team?
            Reach me at <a href="mailto:k.evans.c@gmail.com" class="footerContact">k.evans.c@gmail.com</a> or take a look at any of the links below.
        </p>
        <div class="footerContactInformation">
            <a href="www.linkedin.com/in/k-evans-c" class="footerContact">LinkedIn</a>
            <a href="https://github.com/kevinec" class="footerContact">Github</a>
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
    }
}

</script>

<style lang="scss">
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
        width: 99vw;
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
        flex-flow: row nowrap;
        padding: 20px 0;

        .footerContact{
            margin-right: 90px;
            color: var(--offWhite);
            text-transform: uppercase;
            
            &:hover{
                color: var(--applered);
                text-decoration: none;
            }
        }
    }
}
</style>