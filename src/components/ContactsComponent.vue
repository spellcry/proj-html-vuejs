<template>
    <nav :class="[type, 'contacts']">
        <div class="container">
            <div v-if="isHeader" class="open">
                {{ getOpen }}
            </div>
            <div v-if="isFooter" class="copy">
                {{ getCopy }}
            </div>
            <ul class="contacts__info">
                <li v-if="isHeader" class="tel"><font-awesome-icon class="icon" icon="fa-solid fa-phone"/>{{ getTel }}</li>
                <li v-if="isHeader" class="mail"><font-awesome-icon class="icon" icon="fa-solid fa-envelope"/>{{ getMail }}</li>
                <li class="linkedin"><font-awesome-icon icon="fa-brands fa-facebook-f" /></li>
                <li class="twitter"><font-awesome-icon icon="fa-brands fa-twitter" /></li>
                <li class="facebook"><font-awesome-icon icon="fa-brands fa-linkedin-in" /></li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import state from '../store'

    export default {
        props: {
            type: {
                type: String,
                required: true,
            }
        },
        computed: {
            isHeader() {
                return this.type === 'header';
            },
            isFooter() {
                return this.type === 'footer';
            },
            getOpen() {
                return state.contacts.open;
            },
            getTel() {
                return state.contacts.tel;
            },
            getMail() {
                return state.contacts.mail;
            },
            getFacebook() {
                return state.contacts.Facebook;
            },
            getTwitter() {
                return state.contacts.twitter;
            },
            getLinkedin() {
                return state.contacts.linkedin;
            },
            getCopy() {
                return state.contacts.copyright;
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/variables';

    .contacts {
        background-color: $dark-grey;
        color: $light-grey;
        padding-block: 1rem;
        padding-inline: $section-padding-inline;
        .container {
            display: flex;
        }
        .open,
        .copy {
            margin-right: auto;
        }
        .open,
        .copy,
        li {
            cursor: pointer;
            &:hover {
                color: $green;
            }
        }
        .contacts__info {
            display: flex;
            gap: 2rem;
            .icon {
                margin-right: 0.5rem;
            }
        }
        &.footer {
            background-color: $black;
        }
    }
</style>