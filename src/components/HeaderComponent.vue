<template>
    <header class="main-header">
        <ContactsComponent type="header"/>
        <nav class="main-nav">
            <div class="container">
                <div class="logo">
                    <span class="accent">Nex</span>Gen
                </div>
                <MenuComponent type="main-menu"/>
                <input type="button" class="btn" value="Get in touch">
            </div>
        </nav>
    </header>
</template>

<script>
    import MenuComponent from './MenuComponent.vue';
    import ContactsComponent from './ContactsComponent.vue';

    export default {
        components: {
            MenuComponent,
            ContactsComponent,
        },
    }
</script>

<style lang="scss" scoped>
    @import '../styles/variables';

    .main-header {
        position: relative;
        .main-nav {
            position: absolute;
            width: 100%;
            padding-block: 1.5rem;
            color: $light-grey;
            text-transform: uppercase;
            font-weight: 600;
            .container {
                display: flex;
                align-items: center;
                .logo {
                    position: relative;
                    margin-right: auto;
                    padding: 0.5rem 1.5rem;
                    font-size: 1.5rem;
                    letter-spacing: 5px;
                    font-weight: 900;
                    z-index: 1;
                    .accent {
                        color: $green;
                    }
                    &::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;                    
                        width: calc(50% - 2.5px);
                        border-top-left-radius: 20px;
                        border-bottom-left-radius: 20px;
                        background-color: rgba($color: $dark-green, $alpha: 0.5);
                        z-index: -1;
                    }
                }
                .btn {
                    margin-left: $menu-gap;
                }
            }
        }
    }
</style>