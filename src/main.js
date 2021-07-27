import { createApp } from 'vue';
import App from './App.vue';


import '../src/config/main.css';
import '../src/config/normalize.css';


import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas, fab);




createApp(App)
.component('FA', FontAwesomeIcon)
.mount('#app');
