<template>
    <footer class="main-footer">
        <div class="container">
            <div class="col-60">
                <h4 class="pre-title">Send a message</h4>
                <h2 class="title">Get in <span class="accent">Touch</span></h2>
                <p class="text">We will respond to your message as soon as possibile.</p>
                <div class="form">
                    <input type="text" class="name" placeholder="Name">
                    <input type="text" class="email" placeholder="Email">
                    <input type="number" class="phone" placeholder="Phone">
                    <select class="info">
                        <option value="">More Info</option>
                    </select>
                    <textarea class="message" cols="30" rows="10" placeholder="Message"></textarea>
                    <input type="button" class="btn" value="Send">
                </div>
            </div>
            <div class="col-40">
                <h3 class="sub-title">Example Inc.</h3>
                <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p class="text">Preaesent diam lacus, dapibus sed imperdiet consectetur.</p>
                <ul class="contacts">
                    <li class="list-item contact text"><font-awesome-icon class="icon" icon="fa-solid fa-phone" />+1 (305) 1234-5678</li>
                    <li class="list-item contact text"><font-awesome-icon class="icon" icon="fa-solid fa-envelope" />hello@example.com</li>
                    <li class="list-item contact text"><font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />Main Avenue, 987</li>
                </ul>
                <input type="button" value="View Map" class="btn light">
            </div>
        </div>
        <ContactsComponent type="footer"/>
    </footer>
</template>

<script>
    import ContactsComponent from './ContactsComponent.vue';
    export default {
        components: { 
            ContactsComponent,
        }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/variables';

    .main-footer {
        padding-top: $section-padding-block;
        padding-inline: $section-padding-inline;
        background-color: $dark;
        color: $light-grey;
        .container {
            display: flex;
            .col-60 {
                flex-basis: 60%;
            }
            .col-40 {
                flex-basis: 40%;
                padding-left: 4rem;
                .sub-title {
                    margin-bottom: 2rem;
                    font-size: 1.8rem;
                }
                .text {
                    margin-bottom: 2rem;
                    &.contact {
                        display: flex;
                        align-items: center;
                        color: $green;
                        cursor: pointer;
                        transition: all 200ms ease-in-out;
                        &:hover {
                            color: $green-brilliant;
                            .icon {
                                background-color: rgba($color: $green, $alpha: 1);
                                color: white;
                            }
                        }
                        .icon {
                            margin-right: 1rem;
                            padding: 0.8rem;
                            aspect-ratio: 1;
                            border-radius: 50%;
                            font-size: 1.2rem;
                            background-color: rgba($color: $green, $alpha: 0.2);
                            transition: all 200ms ease-in-out;
                        }
                    }
                }                
            }
        }
        .form {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            gap: $form-gap;
            margin-bottom: $section-padding-block;
            .name,
            .email,
            .phone,
            .info,
            .message {
                padding: 1rem;
                background-color: $grey;
                border: none;
                font-size: 1.1rem;
                color: #8b8a9c;
            }
            .name::placeholder,
            .email::placeholder,
            .phone::placeholder,
            .message::placeholder {
                color: #8b8a9c;
            }
            .message::placeholder {
                font-family: 'Inter', sans-serif;
                font-size: 1.1rem;
                
            }
            .name,
            .email,
            .phone,
            .info {
                flex-basis: calc(calc(100% - $form-gap) / 2);
            }
            .message {
                flex-basis: 100%;
                margin-bottom: 1rem;
            }
        }
        .pre-title {
            text-transform: uppercase;
            color: $green;
            margin-bottom: 1.5rem;
        }
        .title {
            margin-bottom: 2rem;
            font-size: 3rem;      
            color: white;          
        }
        .text {
            margin-bottom: 4rem;
            font-size: 1.1rem;
        }
    }
</style>