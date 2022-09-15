<template>
    <main class="main-content">
        <HeroComponent/>
        <section class="strengths">
            <CardsListComponent type="iconTitleText"/>
        </section>
        <section class="actions-projects">
            <h4 class="pre-title">We do more for everyone</h4>
            <h2 class="title">Actions & Projects</h2>
            <MenuComponent type="content-menu"/>
            <CardsListComponent type="title"/>
        </section>
        <section class="feedback">
            <h4 class="pre-title">Customer Testimonials</h4>
            <h2 class="title">Trusted Feedback</h2>
            <p class="text">We work intensively in search of ideals that can add up in the lives of our customers. This is what moves us and we are grateful for the recognition.</p>
            <CardsListComponent type="imgText"/>
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
    
</style>