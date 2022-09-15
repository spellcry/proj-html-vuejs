<template>
    <main class="main-content">
        <HeroComponent/>
        <section class="strengths">
            <div class="container">
                <CardsListComponent type="icon-title-text"/>
            </div>
        </section>
        <section class="actions-projects">
            <div class="container">
                <h4 class="pre-title">We do more for everyone</h4>
                <h2 class="title">Actions & <span class="accent">Projects</span></h2>
                <MenuComponent type="content-menu"/>
                <CardsListComponent type="title"/>
            </div>
        </section>
        <section class="feedback">
            <div class="container">
                <h4 class="pre-title">Customer Testimonials</h4>
                <h2 class="title">Trusted <span class="accent">Feedback</span></h2>
                <p class="text">We work intensively in search of ideals that can add up in the lives of our customers. This is what moves us and we are grateful for the recognition.</p>
                <CardsListComponent type="img-text"/>
            </div>
        </section>
    </main>
</template>

<script>
    import HeroComponent from './HeroComponent.vue';
    import CardsListComponent from './CardsListComponent.vue';
    import MenuComponent from './MenuComponent.vue';

    export default {
        components: {
            HeroComponent,
            CardsListComponent,
            MenuComponent,
        }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/variables';
    .pre-title {
        text-transform: uppercase;
        color: $green;
        margin-bottom: 1.5rem;
    }
    .title {
        margin-bottom: 4rem;
        font-size: 3rem;                
    }
    .strengths {
        background-color: $light-green;
    }
    .actions-projects {
        background-color: $dark;
        .container {
            color: white;
            .menu {
                text-transform: uppercase;
                margin-bottom: 3rem;
                color: $light-grey;
                font-size: 1.1rem;
            }
        }
    }
    .feedback {
        background-color: $light-green;
        .title {
            margin-bottom: 2rem;
            .accent {
                color: $green;
            }
        }
        .text {
            margin-bottom: 3rem;
            max-width: 65%;
            text-align: center;            
        }
    }
    .strengths,
    .actions-projects,
    .feedback {
        padding-block: $section-padding-block;
    }

    .actions-projects,
    .feedback {
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
</style>