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
    cardsIconTitleText: [
        {
            icon: 'fa-solid fa-user-group',
            title: 'Human Capital',
            text: 'Humanizing business: Harness the power of technology to improve the way people work.',
        },
        {
            icon: 'fa-solid fa-chart-pie',
            title: 'Core Business',
            text: 'It takes innovative approaches to transform, modernize, and run existing platforms.',
        },
        {
            icon: 'fa-solid fa-gauge-high',
            title: 'Performance',
            text: 'Achieving maximum impact and value from investments in finance and supply chain.',
        },
    ],
    cardsTitle: [
        {
            title: 'Academic professional program in social media',
        },
        {
            title: 'President\'s speech at the annual meeting',
        },
        {
            title: 'International business trip in Shanghai',
        },
        {
            title: 'Technology workshop with education theme',
        },
        {
            title: 'Donation of clothes and food to the partner NGO',
        },
        {
            title: 'Confraternization of the procurement team',
        },
    ],
    cardsImgText: [
        {
            img: 'logo-1.png',
            text: 'Praesent volutpat justo sit amet elementum malesuada. Praesent sagittis augue justo, in accumsan orci rhoncus at pellentesque.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            img: 'logo-2.png',
            text: 'Praesent volutpat justo sit amet elementum malesuada. Praesent sagittis augue justo, in accumsan orci rhoncus at pellentesque.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            img: 'logo-3.png',
            text: 'Praesent volutpat justo sit amet elementum malesuada. Praesent sagittis augue justo, in accumsan orci rhoncus at pellentesque.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ],
});

export default state;