// import { createApp } from 'vue';
// import App from './App.vue';
// import router from "./routers";

// createApp(App).use(router).mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import store  from "./store";
import router from "./routers";

createApp(App)
   .use(store)
   .use(router)
   .mount('#app');
