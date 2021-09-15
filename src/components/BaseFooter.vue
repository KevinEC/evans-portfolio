<template>
    <div class="baseFooterRoot">
        <div class="footerSlantElement"></div>
        <h2 class="footerTitleText">Let's Get in Touch</h2>
        <p class="footerBodyText">Curious about my work, see if I'm a fit for your project or just talk over a cup of coffe? 
            Send me an text or give me a call at 0762328355 or reach me on any other platform.
            Still curious? Take a look at my <router-link to="/about">about page</router-link>.
        </p>
        <div class="footerContactInformation">
            <a href="#" class="footerContact">LinkedIn</a>
            <a href="mailto:k.evans.c@gmail.com" class="footerContact">Mail</a>
            <a href="#" class="footerContact">Instagram</a>
            <a href="#" class="footerContact">CV</a>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss">
.baseFooterRoot{
    background-color: black;
    padding: 50px 6%;
    padding-bottom: 80px;
    position: relative;

    .footerSlantElement{
        background-color: black;
        height: 300px;
        position: absolute;
        z-index: -1;
        width: 115vw;
        margin-left: -10vw;
        top: -40px;
        transform: rotate(3deg);
    }

    .footerTitleText{
        font-size: 70px;
        text-transform: uppercase;
        color: var(--applered)
    }

    .footerBodyText{
        color: var(--offWhite);
        width: 60%;

        a{
            color: var(--offWhite);
            text-decoration: underline;
            font-family: 'Montserrat';

            &:hover{
                color: var(--applered)
            }
        }
    }

    .footerContactInformation{
        display: flex;
        flex-flow: row nowrap;

        .footerContact{
            margin-right: 90px;
            color: var(--offWhite);
            text-transform: uppercase;
            
            &:hover{
                color: var(--applered)
            }
        }
    }
}
</style>