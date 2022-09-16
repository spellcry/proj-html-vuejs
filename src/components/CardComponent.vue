<template>
    <div :class="[id === undefined ? 'roles' : 'process',type,'card']">
        <div class="number">
            {{ id !== undefined ? '0' + id : card.numbers }}
        </div>
        <font-awesome-icon v-if="isCardsIconTitleText" :icon="card.icon" class="icon"/>
        <h3 v-if="isCardsIconTitleText || isCardsTitle || isCardsTitleText" class="title">{{ card.title }}</h3>
        <img v-if="isCardsImgText" :src="getImgSrc(card.img)" class="img"/>
        <div v-if="isCardsTitle" class="filter"></div>
        <img v-if="isCardsTitle" :src="getImgSrc(card.img)" class="bg-img"/>
        <p v-if="isCardsIconTitleText || isCardsImgText || isCardsTitleText" class="text">{{ card.text }}</p>        
    </div>
</template>

<script>
    export default {
        props: {
            card: {
                type: Object,
                required: true,
            },
            type: {
                type: String,
                required: true,
            },
            id: Number,
        },
        computed: {
            isCardsIconTitleText() {
                return this.type === "icon-title-text";
            },
            isCardsTitle() {
                return this.type === "title";
            },
            isCardsImgText() {
                return this.type === "img-text";
            },
            isCardsTitleText() {
                return this.type === 'title-text';
            }
        },
        methods: {
            getImgSrc(img) {
                return require(`../assets/${img}`);
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '../styles/variables';

    .card {
        padding: 3rem 2.5rem;        
        &.title {
            position: relative;
            display: flex;
            align-items: flex-end;
            aspect-ratio: 1;
            padding: 2rem;
            text-align: center;
            color: white;
            .filter {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background-color: rgba($color: #000, $alpha: 0.5);
                z-index: 1;
            }
            .bg-img {
                position: absolute;
                top: 0px;                
                left: 0px;
                width: 100%;
                z-index: 0;
            }
            .title {
                z-index: 2;
                color: white;
            }
        }
        &.title-text {
            padding: 0;
            .number {
                font-size: 1.2rem;
                font-weight: bold;
                color: $green;
            }
            &.roles {
                .number {
                    font-size: 2rem;
                }
            }
            &.process {
                display: flex;
                flex-direction: column;
                align-items: center;
                .number {
                    padding: 0.7rem;
                    aspect-ratio: 1;
                    border-radius: 50%;
                    background-color: $midlight-green;
                    z-index: 1;
                }
            }
        }
        .img {
            width: 45%;
            margin-bottom: 1rem;
        }
        .icon {
            aspect-ratio: 1;
            padding: 1rem;
            border-radius: 50%;
            background-color: rgba($color: $green, $alpha: 0.2);
            color: $green;
            font-size: 2rem;
        }
        .title {
            padding-block: 1.5rem;
            font-size: 1.5rem;
            color: $dark-grey;
        }
        .text {
            font-size: 1.1rem;
            line-height: 1.4;
            color: rgba($color: $dark-grey, $alpha: 0.75)
        }
    }
</style>