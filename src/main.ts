import Vue from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia';
import {
    Button,
    Select,
    Loading,
    MessageBox,
    Message,
    Notification,
    Header,
    Container,
    Main,
    Aside,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Table,
    TableColumn,
    Pagination,
    Input,
    Dialog,
    RadioGroup,
    Radio,
    Option,
    Form,
    FormItem,
    Checkbox,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Empty } from 'vant';

import App from './App.vue';
import router from './router';

import './assets/main.css';
import './assets/common.stylus';

import 'vant/es/toast/style';
import 'vant/es/dialog/style';

/// <reference types="vconsole" />

Vue.use(Empty);

// element-ui 按需注册
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Option);
Vue.use(Button);
Vue.use(Select);
Vue.use(Header);
Vue.use(Container);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Input);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Checkbox);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

Vue.use(PiniaVuePlugin);

new Vue({
    router,
    pinia: createPinia(),
    render: (h) => h(App),
}).$mount('#app');
