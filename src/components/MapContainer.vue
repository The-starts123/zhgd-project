<template>
  <div class="MapContainer">
    <div id="container"></div>
    <div id="panel"></div>
    <div id="btn_box">
      <div class="btn" @click="wbsList1">
        <img src="../assets/Group4.png" />
        <span>WBS</span>
      </div>
      <div class="btn" @click="nearby">
        <img src="../assets/Group1.png" />
        <span>附 近</span>
      </div>
      <div class="btn">
        <img src="../assets/Group2.png" />
      </div>
    </div>
    <div id="operation">
      <div>
        <span class="color_blocks" @click="clear(1)"></span>
        <span>面基</span>
      </div>
      <div>
        <span class="color_blocks" @click="clear(2)"></span>
        <span>基层</span>
      </div>
      <div>
        <span class="color_blocks" @click="clear(3)"></span>
        <span>底基层</span>
      </div>
      <div>
        <span class="color_blocks" @click="clear(4)"></span>
        <span>路床</span>
      </div>
      <div>
        <span class="color_blocks" @click="clear(5)"></span>
        <span>路堤</span>
      </div>
      <div>
        <span class="color_blocks" @click="clear(6)"></span>
        <span>未施工</span>
      </div>
    </div>
    <wbsList1 ref="wbsList1" />
    <nearby ref="nearby" />
  </div>
</template>

<script>
// 高德地图 安全密钥
window._AMapSecurityConfig = {
  securityJsCode: "e4d90f3ec296c424d53c09c42fd024de",
};
import AMapLoader from "@amap/amap-jsapi-loader";
import wbsList1 from "./WBS/wbsList1.vue";
import nearby from "./nearby/nearby.vue";
export default {
  name: "MapContainer",
  components: {
    wbsList1,
    nearby,
  },
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
      curve1: "",
      curve2: "",
      curve3: "",
      curve4: "",
      curve5: "",
      curve6: "",
      bezierCurve1: {
        path: [
          // 起点
          [121.8306, 29.52],
          [121.838, 29.5346, 121.8351, 29.539],
        ],
        isOutline: true,
        outlineColor: "none",
        borderWeight: 3,
        strokeColor: "#079ae5",
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
      bezierCurve2: {
        path: [
          // 起点
          [121.8245, 29.50674],
          [121.825, 29.51, 121.8306, 29.52],
        ],
        isOutline: true,
        outlineColor: "none",
        borderWeight: 3,
        strokeColor: "#028566",
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
      bezierCurve3: {
        path: [
          // 起点
          [121.8153, 29.49],
          [121.821, 29.497, 121.8245, 29.50674],
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
      bezierCurve4: {
        path: [
          // 起点
          [121.8107, 29.4786],
          [121.8123, 29.4875, 121.8153, 29.49],
        ],
        isOutline: true,
        outlineColor: "none",
        borderWeight: 3,
        strokeColor: "#ed8506",
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
      bezierCurve5: {
        path: [
          // 起点
          [121.81, 29.4689],
          [121.81, 29.4752, 121.8107, 29.4786],
        ],
        isOutline: true,
        outlineColor: "none",
        borderWeight: 3,
        strokeColor: "#01e888",
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
      bezierCurve6: {
        path: [
          // 起点
          [121.8145, 29.46],
          [121.8102, 29.4668, 121.81, 29.4689],
        ],
        isOutline: true,
        outlineColor: "none",
        borderWeight: 3,
        strokeColor: "#a1accb",
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
        var startIcon = new AMap.Icon({
          // 图标尺寸
          size: new AMap.Size(100, 100),
          // 图标的取图地址
          image: "https://img1.imgtp.com/2022/09/01/cEI5mRcu.png",
          // 图标所用图片大小
          imageSize: new AMap.Size(44, 48),
          // 图标取图偏移量
          imageOffset: new AMap.Pixel(-22, -48),
        });

        var marker1 = new AMap.Marker({
          position: new AMap.LngLat(121.8351, 29.539),
          icon: startIcon,
        });
        var marker2 = new AMap.Marker({
          position: new AMap.LngLat(121.8306, 29.52),
          icon: startIcon,
        });
        var marker3 = new AMap.Marker({
          position: new AMap.LngLat(121.8245, 29.50674),
          icon: startIcon,
        });
        var marker4 = new AMap.Marker({
          position: new AMap.LngLat(121.8153, 29.49),
          icon: startIcon,
        });
        var marker5 = new AMap.Marker({
          position: new AMap.LngLat(121.8107, 29.4786),
          icon: startIcon,
        });
        var marker6 = new AMap.Marker({
          position: new AMap.LngLat(121.81, 29.4689),
          icon: startIcon,
        });
        var marker7 = new AMap.Marker({
          position: new AMap.LngLat(121.8145, 29.46),
          icon: startIcon,
        });
        var markerList = [
          marker1,
          marker2,
          marker3,
          marker4,
          marker5,
          marker6,
          marker7,
        ];
        _th.map.add(markerList);
      });
    },

    bezierCurve() {
      let _th = this;
      AMap.plugin("AMap.BezierCurve", () => {
        _th.curve1 = new AMap.BezierCurve(_th.bezierCurve1);
        _th.curve2 = new AMap.BezierCurve(_th.bezierCurve2);
        _th.curve3 = new AMap.BezierCurve(_th.bezierCurve3);
        _th.curve4 = new AMap.BezierCurve(_th.bezierCurve4);
        _th.curve5 = new AMap.BezierCurve(_th.bezierCurve5);
        _th.curve6 = new AMap.BezierCurve(_th.bezierCurve6);
        _th.map.add(_th.curve1);
        _th.map.add(_th.curve2);
        _th.map.add(_th.curve3);
        _th.map.add(_th.curve4);
        _th.map.add(_th.curve5);
        _th.map.add(_th.curve6);
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
          } else if (num == 3) {
            _th.map.remove(_th.curve3);
          } else if (num == 4) {
            _th.map.remove(_th.curve4);
          } else if (num == 5) {
            _th.map.remove(_th.curve5);
          } else if (num == 6) {
            _th.map.remove(_th.curve6);
          }
        } else {
          if (num == 1) {
            _th.map.add(_th.curve1);
          } else if (num == 2) {
            _th.map.add(_th.curve2);
          } else if (num == 3) {
            _th.map.add(_th.curve3);
          } else if (num == 4) {
            _th.map.add(_th.curve4);
          } else if (num == 5) {
            _th.map.add(_th.curve5);
          } else if (num == 6) {
            _th.map.add(_th.curve6);
          }
        }
      });
    },

    wbsList1() {
      this.$refs.wbsList1.show = true;
      this.$refs.wbsList1.isShow = true;
    },

    nearby() {
      this.$refs.nearby.show = true;
      this.$refs.nearby.isShow = true;
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
  line-height: 25px;
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
      background-color: #079ae5;
    }
  }
  div:nth-child(2) {
    .color_blocks {
      background-color: #028566;
    }
  }
  div:nth-child(3) {
    .color_blocks {
      background-color: #feee04;
    }
  }
  div:nth-child(4) {
    .color_blocks {
      background-color: #ed8506;
    }
  }
  div:nth-child(5) {
    .color_blocks {
      background-color: #01e888;
    }
  }
  div:nth-child(6) {
    .color_blocks {
      background-color: #a1accb;
    }
  }
}
#btn_box {
  position: fixed;
  top: 228px;
  right: 20px;
  .btn {
    width: 48px;
    height: 48px;
    background-color: #fff;
    border-radius: 9px;
    margin-bottom: 10px;
    color: #919ba5;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    box-shadow: 0 4px 8px 0 rgba(74, 116, 177, 0.3);
    img {
      width: 23px;
      height: auto;
      display: block;
      margin-bottom: 2px;
    }
  }
}
/deep/.amap-icon {
  overflow: visible !important;
}
</style>
