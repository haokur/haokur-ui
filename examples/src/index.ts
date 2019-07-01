import Vue from 'vue';

import App from './App.vue';

import HaokurUI from '../../src/index';

import { FlexRem } from '../utils/flex-rem';

// 初始化动态设置根元素(html)字体大小功能
FlexRem.init();

Vue.use(HaokurUI);

import '../themes/reset.scss';

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: h => h(App),
});
