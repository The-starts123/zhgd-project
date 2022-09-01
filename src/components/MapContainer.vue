<template>
  <div class="MapContainer">
    <div id="container"></div>
    <div id="panel"></div>
    <div id="operation">
      <div>
        <span class="color_blocks" @click="clear(3)"></span>
        <span>底基层</span>
      </div>
      <div>
        <span class="color_blocks" @click="clear(2)"></span>
        <span>路床</span>
      </div>
      <div>
        <span class="color_blocks" @click="clear(1)"></span>
        <span>路堤</span>
      </div>
    </div>
  </div>
</template>

<script>
// 高德地图 安全密钥
window._AMapSecurityConfig = {
  securityJsCode: "e4d90f3ec296c424d53c09c42fd024de",
};
import Vue from "vue";
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

      bezierCurve1: {
        path: [
          // 起点
          [121.8153, 29.49],
          [121.821, 29.497, 121.8245, 29.50674],
          // [121.825, 29.51, 121.8306, 29.52],
          // [121.838, 29.5346, 121.8351, 29.539],
        ],
        isOutline: true,
        outlineColor: "none",
        borderWeight: 3,
        strokeColor: "#01E888",
        strokeOpacity: 1,
        strokeWeight: 8,
        // 线样式还支持 'dashed'
        strokeStyle: "solid",
        // strokeStyle是dashed时有效
        strokeDasharray: [10, 10],
        lineJoin: "round",
        lineCap: "round",
        zIndex: 50,
      },
      curve1: "",
      bezierCurve2: {
        path: [
          // 起点
          [121.8245, 29.50674],
          [121.825, 29.51, 121.8306, 29.52],
        ],
        isOutline: true,
        outlineColor: "none",
        borderWeight: 3,
        strokeColor: "#079AE5",
        strokeOpacity: 1,
        strokeWeight: 8,
        // 线样式还支持 'dashed'
        strokeStyle: "solid",
        // strokeStyle是dashed时有效
        strokeDasharray: [10, 10],
        lineJoin: "round",
        lineCap: "round",
        zIndex: 50,
      },
      curve2: "",
      bezierCurve3: {
        path: [
          // 起点
          [121.8306, 29.52],
          [121.838, 29.5346, 121.8351, 29.539],
        ],
        isOutline: true,
        outlineColor: "none",
        borderWeight: 3,
        strokeColor: "#FEEE04",
        strokeOpacity: 1,
        strokeWeight: 8,
        // 线样式还支持 'dashed'
        strokeStyle: "solid",
        // strokeStyle是dashed时有效
        strokeDasharray: [10, 10],
        lineJoin: "round",
        lineCap: "round",
        zIndex: 50,
      },
      curve3: "",
      count: 0,
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
            zoom: 13, // 初始化地图级别
            center: [this.params.start.longitude, this.params.start.latitude], // 初始化地图中心点位置
          });
          AMap.plugin(["AMap.ToolBar", "AMap.Scale"], () => {
            this.map.addControl(new AMap.ToolBar());
            this.map.addControl(new AMap.Scale());
          });
          // this.getDriving(this.params); // 驾车线路规划
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
      // 构造路线导航类
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
          position: new AMap.LngLat(121.8351, 29.539),
        });
        var marker2 = new AMap.Marker({
          position: new AMap.LngLat(121.8306, 29.52),
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
        _th.curve1 = new AMap.BezierCurve(_th.bezierCurve1);
        _th.curve2 = new AMap.BezierCurve(_th.bezierCurve2);
        _th.curve3 = new AMap.BezierCurve(_th.bezierCurve3);
        _th.map.add(_th.curve1);
        _th.map.add(_th.curve2);
        _th.map.add(_th.curve3);
        // 缩放地图到合适的视野级别
        // _th.map.setFitView([bezierCurve]);
      });
    },

    clear(num) {
      let _th = this;
      _th.count++;
      AMap.plugin("AMap.BezierCurve", () => {
        if (_th.count % 2 != 0) {
          if (num == 1) {
            _th.map.remove(_th.curve1);
          } else if (num == 2) {
            _th.map.remove(_th.curve2);
          } else {
            _th.map.remove(_th.curve3);
          }
        } else {
          if (num == 1) {
            _th.map.add(_th.curve1);
          } else if (num == 2) {
            _th.map.add(_th.curve2);
          } else {
            _th.map.add(_th.curve3);
          }
        }
      });
    },
  },
  mounted() {
    this.initMap();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: calc(100vh - 234px);
}
#operation {
  position: fixed;
  background-color: white;
  opacity: 0.8;
  bottom: 175px;
  left: 10px;
  width: 84px;
  height: 150px;
  border-radius: 10px;
  padding: 10px;
  line-height: 35px;
  div {
    display: flex;
    align-items: center;
    font-size: 14px;
    .color_blocks {
      display: block;
      width: 20px;
      height: 8px;
      border-radius: 4px;
      margin-right: 6px;
    }
  }
  div:first-child {
    .color_blocks {
      background-color: #feee04;
    }
  }
  div:nth-child(2) {
    .color_blocks {
      background-color: #079ae5;
    }
  }
  div:nth-child(3) {
    .color_blocks {
      background-color: #01e888;
    }
  }
}
/* #panel {
  position: fixed;
  background-color: white;
  max-height: 90%;
  overflow-y: auto;
  top: 10px;
  right: 10px;
  width: 100px;
  height: 300px;
}
#panel .amap-call {
  background-color: #009cf9;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
#panel .amap-lib-driving {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
} */
</style>
