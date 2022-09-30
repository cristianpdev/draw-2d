import { createApp } from 'vue';
import App from './App.vue';
import mitt from 'mitt';

const emiter = mitt();

export default emiter;

import './index.css';

createApp(App).mount('#app');
