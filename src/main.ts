import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

// Toast
import { Toast } from 'vant';
import 'vant/es/toast/style';

// Dialog
import { Dialog } from 'vant';
import 'vant/es/dialog/style';

// Notify
import { Notify } from 'vant';
import 'vant/es/notify/style';

// ImagePreview
import { ImagePreview } from 'vant';
import 'vant/es/image-preview/style';

import App from './App.vue'
import router from './router'

import './assets/main.css'

Vue.use(PiniaVuePlugin)
Vue.use(Toast)
Vue.use(Dialog)
Vue.use(Notify)
Vue.use(ImagePreview)

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App)
}).$mount('#app')
