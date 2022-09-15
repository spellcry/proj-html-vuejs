<template>
    <ul :class="[type,'cards-list']">
        <li v-for="(card, index) in cards" :key="index" class="list-item">
            <CardComponent :type="type" :card="card"/>
        </li>
    </ul>
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
            return this.type === "icon-title-text";
        },
        isCardsTitle() {
            return this.type === "title";
        },
        isCardsImgText() {
            return this.type === "img-text";
        },
    },
    components: { 
        CardComponent, 
    },
}
</script>

<style lang="scss" scoped>
    @import '../styles/variables';

    .cards-list {
        display: flex;
        flex-wrap: wrap;
        gap: $cards-gap;
        &.title {
            .list-item {
                overflow: hidden;
            }
        }
        .list-item {
            flex-basis: calc(calc(100% - calc($cards-gap * 2)) / 3);
            background-color: white;
            border-radius: 10px;        
        }
    }
</style>