<template>
    <div class="hero">
        <HeaderComponent/>
        <div class="hero__info">
            <div class="container">
                <h3 class="pre-title">Human Resources</h3>
                <h1 class="title">Get More Productivity</h1>
                <p class="text">Planning, recruitment and selection process and performance evaluation of employees.</p>
                <div class="ctas">
                    <div class="cta accent">Get in touch</div>
                    <div class="cta">Read More</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderComponent from './HeaderComponent.vue';

    export default {
        components: {
            HeaderComponent,
        },
    }
</script>

<style lang="scss" scoped>
    .hero {
        height: 100vh;
        background-image: url('../assets/bg-4.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>