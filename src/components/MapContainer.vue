<template>
  <div class="MapContainer">
    <div id="container"></div>
    <div id="panel"></div>
  </div>
</template>

<script>
// 高德地图 安全密钥
window._AMapSecurityConfig = {
  securityJsCode: "e4d90f3ec296c424d53c09c42fd024de",
};
import AMapLoader from "@amap/amap-jsapi-loader";
export default {
  name: "MapContainer",
  // props: {
  //   msg: String,
  // },
  data() {
    return {
      //此处不声明 map 对象，可以直接使用 this.map赋值或者采用非响应式的普通对象来存储。
      // map: null,
      params: {
        start: {
          latitude: 29.50674,
          longitude: 121.82831,
        },
        end: {
          latitude: 29.974115,
          longitude: 121.311381,
        },
      },
      path: [
        // 起点
        [121.8153, 29.49],
        [121.825, 29.506, 121.825, 29.50674],
        [121.8315, 29.52],
        [121.835, 29.539],
      ],
    };
  },
  methods: {
    destroy() {
      this.map && this.map.destroy(); // 销毁地图
    },
    initMap() {
      this.destroy();
      AMapLoader.load({
        key: "9e04584fc330e40ca6731cebf493be62", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [""], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          this.map = new AMap.Map("container", {
            viewMode: "3D", // 是否为3D地图模式
            zoom: 12, // 初始化地图级别
            center: [this.params.start.longitude, this.params.start.latitude], // 初始化地图中心点位置
          });
          AMap.plugin(["AMap.ToolBar", "AMap.Scale"], () => {
            this.map.addControl(new AMap.ToolBar());
            this.map.addControl(new AMap.Scale());
          });
          this.getDriving(this.params); // 驾车线路规划
          // 绘制点
          this.marker();
          // 绘制线
          this.bezierCurve();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getDriving(params) {
      //构造路线导航类
      AMap.plugin("AMap.Driving", function () {
        var driving = new AMap.Driving({
          // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
          policy: AMap.DrivingPolicy.LEAST_TIME,
          map: map, // 工具挂载到那个对象
          panel: "panel",
        });
        let polyline1 = new AMap.LngLat(
          params.start.longitude,
          params.start.latitude
        );
        let polyline2 = new AMap.LngLat(
          params.end.longitude,
          params.end.latitude
        );
        console.log(polyline1, polyline2);
        // 根据起终点经纬度规划驾车导航路线
        driving.search(polyline1, polyline2, function (status, result) {
          console.log(status);
          // result 即是对应的驾车导航信息
          if (status === "complete") {
            console.log("绘制驾车路线完成");
          } else {
            console.log("获取驾车数据失败：" + result);
          }
        });
      });
    },

    marker() {
      let _th = this;
      AMap.plugin("AMap.Marker", () => {
        var marker1 = new AMap.Marker({
          position: new AMap.LngLat(121.8345, 29.539),
        });
        var marker2 = new AMap.Marker({
          position: new AMap.LngLat(121.8315, 29.52),
        });
        var marker3 = new AMap.Marker({
          position: new AMap.LngLat(121.8245, 29.50674),
        });
        var marker4 = new AMap.Marker({
          position: new AMap.LngLat(121.8153, 29.49),
        });
        var markerList = [marker1, marker2, marker3, marker4];
        _th.map.add(markerList);
      });
    },

    bezierCurve() {
      let _th = this;
      AMap.plugin("AMap.BezierCurve", () => {
        var bezierCurve = new AMap.BezierCurve({
          path: this.path,
          isOutline: true,
          outlineColor: "#ffeeff",
          borderWeight: 3,
          strokeColor: "#3366FF",
          strokeOpacity: 1,
          strokeWeight: 6,
          // 线样式还支持 'dashed'
          strokeStyle: "solid",
          // strokeStyle是dashed时有效
          strokeDasharray: [10, 10],
          lineJoin: "round",
          lineCap: "round",
          zIndex: 50,
        });
        _th.map.add(bezierCurve);
        // 缩放地图到合适的视野级别
        // _th.map.setFitView([bezierCurve]);
      });
      AMap.plugin("AMap.BezierCurveEditor", () => {
        var bezierCurveEditor = new AMap.BezierCurveEditor(
          _th.map,
          _th.bezierCurve
        );
        bezierCurveEditor.on("addnode", function (event) {
          log.info("触发事件：addnode");
        });
        bezierCurveEditor.on("adjust", function (event) {
          log.info("触发事件：adjust");
        });
        bezierCurveEditor.on("removenode", function (event) {
          log.info("触发事件：removenode");
        });
        bezierCurveEditor.on("end", function (event) {
          log.info("触发事件： end");
        });
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
