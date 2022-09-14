<template>
    <header>
        <ContactsComponent type="header"/>
        <nav>
            <div class="container">
                <div class="logo">
                    NexGen
                </div>
                <MenuComponent type="main-menu"/>
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
    
</style>