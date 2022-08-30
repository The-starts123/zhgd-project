<template>
  <div class="hello">
    <div id="container"></div>
  </div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
export default {
  name: "MapContainer",
  // props: {
  //   msg: String,
  // },
  data() {
    return {
      //此处不声明 map 对象，可以直接使用 this.map赋值或者采用非响应式的普通对象来存储。
      //map:null,
    };
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: "9e04584fc330e40ca6731cebf493be62", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ["AMap.Scale"], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          this.map = new AMap.Map("container", {
            //设置地图容器id
            viewMode: "3D", //是否为3D地图模式
            zoom: 10, //初始化地图级别
            // center: [105.602725, 37.076636], //初始化地图中心点位置
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.initMap();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: calc(100vh - 234px);
}
</style>
