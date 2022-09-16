<template>
    <div :class="[type,'jumbotron']">
        <div v-if="isTwoCols" class="col-50">
            <h4 class="pre-title">About the network</h4>
            <h2 class="title"><span class="accent">The</span> Company</h2>
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.</p>
            <CardsListComponent type="title-text" content="company"/>
            <div class="ctas">
                <div class="cta"><input type="button" class="btn" value="Get in touch"></div>
                <div class="cta"><input type="button" class="btn light" value="Read more"></div>
            </div>
        </div>
        <div v-if="isTwoCols" class="col-50">
            <img class="image-big" src="../assets/about-5.jpg">
        </div>
        <div v-if="isFullWidth" class="col">
            <h4 class="pre-title">How it works in practice</h4>
            <h2 class="title"><span class="accent">Process</span> Management</h2>
            <p class="text">We work with innovative methodologies to ensure that the entire reformatting process is done from start to finish as planned.</p>
            <CardsListComponent type="title-text" content="process"/>
        </div>
    </div>
</template>

<script>
    import state from '../store';
    import CardsListComponent from './CardsListComponent.vue';

    export default {
    props: {
        type: {
            type: String,
            required: true,
        }
    },
    computed: {
        cards() {
            let cards;
            if (this.isTwoCols)
                cards = state.roles;
            if (this.isFullWidth) {
                cards = state.process;
            }
            return cards;
        },
        isTwoCols() {
            return this.type === "two-cols";
        },
        isFullWidth() {
            return this.type === "full-width";
        }
    },
    components: {
        CardsListComponent
    }
}
</script>

<style lang="scss" scoped>
    @import '../styles/variables';

    .jumbotron {
        .pre-title {
            text-transform: uppercase;
            color: $green;
            margin-bottom: 1.5rem;
        }
        .title {
            margin-bottom: 2rem;
            font-size: 3rem;     
            .accent {
                color: $green;
            }           
        }
        .text {
            margin-bottom: $company-mb;
            font-size: 1.1rem;
            color: rgba($color: $dark-grey, $alpha: 0.75);
        }
        &.two-cols {
            display: flex;
            .col-50 {
                flex-basis: 50%;
                padding-right: 5rem;
                .image-big {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 50%;
                    height: 100%;
                    aspect-ratio: 1;
                    object-fit: cover;
                }
            }
            .ctas {
                display: flex;
                gap: 1.5rem;
                .btn {
                    color: white;
                    &.light {
                        background-color: transparent;
                        color: $green;
                        &:hover {
                            background-color: rgba($color: #000000, $alpha: 0.2);
                        }
                    }
                }
            }
        }
        &.full-width {
            .col {
                display: flex;
                flex-direction: column;
                align-items: center;
                .text {
                    max-width: 800px;
                    text-align: center;
                }
            }
        }
    }
</style>