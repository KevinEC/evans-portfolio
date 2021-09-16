<template>
    <div class="baseAboutRoot">
        <div class="aboutTitleWrapper">
            <h2 class="aboutTitle aboutTitleFront">Who I Am</h2>
            <h2 class="aboutTitle aboutTitleMid">Who I Am</h2>
            <h2 class="aboutTitle aboutTitleBack">Who I Am</h2>
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
        document.style.setPropertyValue("--nav-background", "transparent")
    }
}
</script>

<style lang="scss">
.baseAboutRoot{
    background-color: var(--about-bg);
    position: relative;

    .aboutTitleWrapper{
        padding-top: 60px;
    }
}

</style>