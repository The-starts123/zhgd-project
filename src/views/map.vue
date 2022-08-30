<template>
  <div id="map">
    <div class="header">
      <div class="header_top">
        <span class="time">9:41</span>
        <div class="icon">
          <i class="iconfont icon-phone-signal-full"></i>
          <i class="iconfont icon-WIFI"></i>
          <i class="iconfont icon-80dianliang"></i>
        </div>
      </div>
      <div class="header_buttom">
        <span class="title">地图</span>
        <div>
          <i class="iconfont icon-rili"></i>
          <i class="iconfont icon-liebiao" @click="toList"></i>
        </div>
      </div>
    </div>
    <van-tabs
      v-model="active"
      title-active-color="#3788FD"
      title-inactive-color="#919BA5"
      color="#3788FD"
    >
      <van-tab>
        <template #title><i class="iconfont icon-shigong"></i>施工</template>
      </van-tab>
      <van-tab>
        <template #title><i class="iconfont icon-bingdu"></i>排雷</template>
      </van-tab>
      <van-tab>
        <template #title>
          <i class="iconfont icon-dalou2-mianxing"></i>BIM
        </template>
      </van-tab>
      <van-tab>
        <template #title>
          <i class="iconfont icon-gfshipinjiankong"></i>监控
        </template>
      </van-tab>
    </van-tabs>
    <van-cell
      is-link
      title="项目: 吉康改扩建"
      @click="show = true"
      class="cell"
    />
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />

    <!-- 地图 -->
    <!-- <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div> -->
    <MapContainer/>
  </div>
</template>

<script>
// @ is an alias to /src
import MapContainer from "../components/MapContainer.vue"
export default {
  name: "a-map",
  components: {
    MapContainer
  },
  data() {
    return {
      active: 0,
      value1: 0,
      show: false,
      actions: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }],
    };
  },
  mounted() {
    
  },
  methods: {
    onSelect() {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
    },

    toList() {
      this.$router.push("/list");
    },
  },
};
</script>
<style lang="less" scoped>
#a-map {
  position: relative;
}
.header {
  width: auto;
  height: 98px;
  background: #3788fd;
  padding: 15px 25px;
  box-sizing: border-box;
  .header_top {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    .time {
      font-size: 14px;
      color: #fff;
    }
    .icon {
      color: #fff;
      i {
        margin-right: 8px;
      }
      i:last-child {
        margin: 0;
      }
    }
  }
  .header_buttom {
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 20px;
      color: #fff;
    }
    .iconfont {
      font-size: 22px;
      color: #fff;
      margin-right: 8px;
    }
    .iconfont:last-child {
      margin: 0;
    }
  }
}
.cell {
  position: absolute;
  top: 142px;
  left: 0;
  z-index: 999;
  opacity: 0.9;
}
.amap-wrapper {
  width: 100%;
  height: calc(100vh - 234px);
}
.iconfont {
  margin-right: 3px;
}
</style>
