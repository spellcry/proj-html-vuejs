import Vue from 'vue'

const state = Vue.observable({
    mainMenu: [
        { 
            text: 'Home',
            selected: false, 
        },
        { 
            text: 'About',
            selected: false, 
        },
        { 
            text: 'Projects',
            selected: false, 
        },
        { 
            text: 'Process',
            selected: true, 
        },
        { 
            text: 'Testimonials',
            selected: false, 
        },
        { 
            icon: 'fa-regular fa-user' 
        },
    ],
    contentMenu: [
        { text: 'All' },
        { text: 'Environment' },
        { text: 'Events' },
        { text: 'Institutional' },
        { text: 'Social' },
        { text: 'Technology' },
        { text: 'Innovation' },
    ],
    contacts: {
        open: 'Open Hours: Mon - Sat - 9:00 - 18:00',
        tel: '+1 (305) 1234-5678',
        mail: 'hello@example.com',
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        copyright: '© 2022 NEXGEN is Proudly Powered by Codings.',
    },
});

export default state;