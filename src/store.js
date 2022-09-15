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
        { 
            text: 'All', 
            selected: true,
        },
        { 
            text: 'Institutional', 
            selected: false,
        },
        { 
            text: 'Social', 
            selected: false,
        },
        { 
            text: 'Events', 
            selected: false,
        },
        { 
            text: 'Innovation', 
            selected: false,
        },
        { 
            text: 'Environment', 
            selected: false,
        },
        { 
            text: 'Technology', 
            selected: false,
        },
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
            img: 'project-1.jpg',
        },
        {
            title: 'President\'s speech at the annual meeting',
            img: 'project-2.jpg',
        },
        {
            title: 'International business trip in Shanghai',
            img: 'project-3.jpg',
        },
        {
            title: 'Technology workshop with education theme',
            img: 'project-4.jpg',
        },
        {
            title: 'Donation of clothes and food to the partner NGO',
            img: 'project-5.jpg',
        },
        {
            title: 'Confraternization of the procurement team',
            img: 'project-6.jpg',
        },
    ],
    cardsImgText: [
        {
            img: 'logo-1.png',
            text: 'Praesent volutpat justo sit amet elementum malesuada. Praesent sagittis augue justo, in accumsan orci rhoncus at pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            img: 'logo-2.png',
            text: 'Praesent volutpat justo sit amet elementum malesuada. Praesent sagittis augue justo, in accumsan orci rhoncus at pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            img: 'logo-3.png',
            text: 'Praesent volutpat justo sit amet elementum malesuada. Praesent sagittis augue justo, in accumsan orci rhoncus at pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ],
});

export default state;