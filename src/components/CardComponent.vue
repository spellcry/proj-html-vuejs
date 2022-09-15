<template>
    <div class="card">
        <font-awesome-icon v-if="isCardsIconTitleText" :icon="card.icon" />
        <h3 v-if="isCardsIconTitleText || isCardsTitle">{{ card.title }}</h3>
        <img v-if="isCardsImgText" :src="getImgSrc(card.img)"/>
        <p v-if="isCardsIconTitleText || isCardsImgText">{{ card.text }}</p>
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
            }
        },
        computed: {
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
        methods: {
            getImgSrc(img) {
                return require(`../assets/${img}`);
            },
        },
    }
</script>

<style lang="scss" scoped>
    
</style>