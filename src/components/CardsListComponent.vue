<template>
    <div class="cards-list__wrapper">
        <div class="container">
            <ul :class="[type, content,'cards-list']">
                <li v-for="(card, index) in cards" :key="index" class="list-item">
                    <CardComponent v-if="!isCardsTitleText" :type="type" :card="card"/>
                    <CardComponent v-if="isCardsTitleText && content === 'company'" :type="type" :card="card"/>
                    <CardComponent v-if="isCardsTitleText && content === 'process'" :type="type" :card="card" :id="index + 1"/>
                </li>
            </ul>
        </div>
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
        },
        content: String,
    },
    computed: {
        cards() {
            let cards;
            if ( this.isCardsIconTitleText ) {
                cards = state.cardsIconTitleText;
            }
            if ( this.isCardsTitle ) {
                cards = state.cardsTitle;
            }
            if ( this.isCardsTitleText ) {
                switch (this.content) {
                    case 'company':
                        cards = state.roles;
                        break;
                    case 'process':
                        cards = state.process;
                        break;
                }
            }
            if ( this.isCardsImgText ) {
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
        isCardsTitleText() {
            return this.type === 'title-text';
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
    .cards-list__wrapper {
        position: relative;
        width: 100%;
        .container {
            max-width: 1600px;
            margin-inline: auto;
            padding-inline: $section-padding-inline;
        }
    }
    .cards-list {
        display: flex;
        flex-wrap: wrap;
        gap: $cards-gap;
        &.title {
            .list-item {
                overflow: hidden;
            }
        }
        &.title-text {
            flex-wrap: nowrap;
            margin-bottom: $company-mb;
            &.process {
                margin-bottom: 0;
                padding-inline: 1rem;
                &::before {
                    content: "";
                    position: absolute;
                    top: 22px;
                    left: 0;
                    width: 100%;
                    height: 4px;
                    background-color: $midlight-green;
                }
            }
            .list-item {
                flex-basis: calc(calc(100% - calc($cards-gap * 2)) / 3);
            }
        }
        .list-item {
            flex-basis: calc(calc(100% - calc($cards-gap * 2)) / 3);
            background-color: white;
            border-radius: 10px;        
        }
    }
</style>