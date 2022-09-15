<template>
    <div class="hero">
        <div class="hero__info">
            <div class="container">
                <h3 class="pre-title">Human Resources</h3>
                <h1 class="title">Get More Productivity</h1>
                <p class="text">Planning, recruitment and selection process and performance evaluation of employees.</p>
                <div class="ctas">
                    <div class="cta"><input type="button" class="btn" value="Get in touch"></div>
                    <div class="cta"><input type="button" class="btn light" value="Read more"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        components: {
        },
    }
</script>

<style lang="scss" scoped>
    @import '../styles/variables';

    .hero {
        height: calc(100vh - 52px);
        background-image: url('../assets/bg-4.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        .hero__info {
            display: flex;
            align-items: center;
            height: 100%;
            background-color: rgba($color: #000, $alpha: 0.5);
            .pre-title {
                text-transform: uppercase;
                color: $green;
                font-size: 1rem;
                font-weight: 600;
                margin-bottom: 1rem;
            }
            .title {
                position: relative;
                width: 37%;
                margin-bottom: 1.5rem;
                color: white;
                font-size: 4.5rem;
                font-weight: 900;
                z-index: 1;
                &::after {
                    content: '';
                    position: absolute;
                    bottom: 8px;
                    left: 2px;
                    height: 33px;
                    width: 100%;
                    background-color: rgba($color: $green, $alpha: 0.7);
                    z-index: -1;
                }
            }
            .text {
                width: 55%;
                margin-bottom: 3rem;
                font-size: 1.5rem;
                color: $light-grey;
            }
            .ctas {
                display: flex;
                gap: 1.5rem;
                .light {
                    background-color: transparent;
                }
            }
        }
    }
</style>