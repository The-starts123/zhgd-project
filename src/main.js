import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueAMap from 'vue-amap';
import "@/assets/iconfont/iconfont.css";

Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(VueAMap);

// 初始化地图和插件
VueAMap.initAMapApiLoader({
  key: '9e04584fc330e40ca6731cebf493be62',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
