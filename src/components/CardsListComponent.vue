<template>
    <div class="container">
        <ul class="cards-list">
            <li v-for="(card, index) in cards" :key="index" class="list-item">
                <CardComponent :type="type" :card="card"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import state from '../store';
    import CardComponent from './CardComponent.vue';

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
            if (this.isCardsIconTitleText) {
                cards = state.cardsIconTitleText;
            }
            if (this.isCardsTitle) {
                cards = state.cardsTitle;
            }
            if (this.isCardsImgText) {
                cards = state.cardsImgText;
            }
            return cards;
        },
        isCardsIconTitleText() {
            return this.type === "iconTitleText";
        },
        isCardsTitle() {
            return this.type === "title";
        },
        isCardsImgText() {
            return this.type === "imgText";
        },
    },
    components: { 
        CardComponent, 
    },
}
</script>

<style lang="scss" scoped>
    
</style>