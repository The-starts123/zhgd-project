<template>
  <div id="list">
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
        <span class="title">列表</span>
        <div>
          <i class="iconfont icon-rili"></i>
          <i class="iconfont icon-ditu1" @click="toAmap"></i>
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
    <div class="list">
      <ul>
        <li class="list_item" v-for="index in 3" :key="index">
          <div>
            <p class="title">A{{index}}标</p>
            <p class="text"><span></span>株坑中桥K3002+487.5</p>
            <p class="text"><span></span>第二跨上部构造预制和安装</p>
            <p class="text"><span></span>梁(板)预制</p>
            <p class="text"><span></span>左幅右侧2-1预应力混凝土空心板(边板)</p>
          </div>
          <div class="btn">路基</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "list",
  components: {},
  data() {
    return {
      active: 0,
      value1: 0,
      show: false,
      actions: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }],
    };
  },
  mounted() {},
  methods: {
    onSelect() {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
    },

    toAmap() {
      this.$router.push("/");
    },
  },
};
</script>
<style lang="less" scoped>
#list {
  position: relative;
  background-color: #f2f2f2;
  // height: calc(100vh - 92px);
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
      align-items: center;
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
  }
  .amap-wrapper {
    width: 100%;
    height: calc(100vh - 234px);
  }
  .iconfont {
    margin-right: 3px;
  }
  .list {
    background-color: #f2f2f2;
    margin-top: 59px;
    .list_item {
      background-color: #fff;
      margin-bottom: 15px;
      padding: 15px;
      display: flex;
      justify-content: space-between;
      .title {
        font-weight: bold;
        margin-bottom: 5px;
      }
      .text {
        font-size: 12px;
        color: #606b78;
        line-height: 25px;
      }
      .btn {
        width: 44px;
        height: 30px;
        border: 1px solid rgba(65, 114, 168, 0.5);
        border-radius: 5px;
        color: #196CC6;
        font-size: 12px;
        text-align: center;
        line-height: 30px;
      }
    }
    p {
      margin: 0;
      display: flex;
      align-items: center;
      span {
        display: block;
        width: 5px;
        height: 5px;
        border-right: 1px solid #606b78;
        border-bottom: 1px solid #606b78;
        transform: rotate(-45deg);
        margin-right: 15px;
      }
    }
  }
}
</style>
