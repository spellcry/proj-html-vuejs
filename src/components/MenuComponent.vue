<template>
    <menu :class="[type, 'menu']">
        <li v-for="(element, index) in menu" :key="index" :class="[element.selected ? 'selected' : '', 'item']">
            <template v-if="isText(element)">{{ element.text }}</template>
            <template v-if="isIcon(element)"><font-awesome-icon :icon="element.icon" /></template>
            <template v-if="isTextAccent(element)"><span class="btn">{{ element.textAccent }}</span></template>
        </li>
    </menu>
</template>

<script>
    import state from '../store';

    export default {
        props: {
            type: {
                type: String,
                required: true,
            },
        },
        computed: {
            isMainMenu() {
                return this.type === 'main-menu';
            },
            isContentMenu () {
                return this.type === 'content-menu';
            },
            menu() {
                let menu;
                if ( this.isMainMenu )
                    menu = state.mainMenu;
                if ( this.isContentMenu )
                    menu = state.contentMenu;
                return menu;
            },
        },
        methods: {
            isText(element) {
                return Object.keys(element)[0] === 'text';
            },
            isIcon(element) {
                return Object.keys(element)[0] === 'icon';
            },
            isTextAccent(element) {
                return Object.keys(element)[0] === 'textAccent';
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/variables';

    .menu {
        display: flex;
        gap: $menu-gap;
        .item {
            cursor: pointer;
            &.selected,
            &:hover {
                color: $green;
            }
        }
        &.content-menu {
            .item {
                position: relative;
                &.selected {
                    color: white;
                }
                &.selected::before {
                    content: '';
                    position: absolute;
                    top: -10px;                    
                    right: -10px;                    
                    bottom: -10px;                    
                    left: -10px;
                    background-color: rgba($color: $green, $alpha: 0.15);
                    border-radius: 3px;
                    z-index: 1;
                }
            }
        }
    }
</style>