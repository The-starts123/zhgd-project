<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view />
    <van-tabbar v-model="active" placeholder class="tabbar" v-if="this.$route.meta.show">
      <van-tabbar-item icon="home-o">
        <span>待办</span>
        <template #icon>
          <i class="iconfont icon-daiban"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item style="margin-right: 32px">
        <span>应用</span>
        <template #icon>
          <i class="iconfont icon-52"></i>
        </template>
      </van-tabbar-item>
      <div class="plus">+</div>
      <van-tabbar-item replace to="/">
        <span>地图</span>
        <template #icon>
          <i class="iconfont icon-ditu"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>我的</span>
        <template #icon>
          <i class="iconfont icon-wode"></i>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2,
      icon: {
        active: "active-color",
        inactive: "inactive-color",
      },
    };
  },
};
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
body {
  margin: 0;
}
.tabbar {
  position: relative;
  /deep/ .van-tabbar {
    z-index: 999;
    border-radius: 20px 20px 0px 0px;
    box-shadow: 0px -4px 8px rgba(86, 125, 182, 0.2);
    height: 92px;
    .plus {
      position: absolute;
      top: -32px;
      left: 50%;
      z-index: 999;
      margin-left: -32px;
      width: 64px;
      height: 64px;
      background: #007afc;
      box-shadow: 0px 4px 10px rgba(67, 152, 255, 0.2);
      text-align: center;
      line-height: 64px;
      border-radius: 50%;
      font-size: 50px;
      color: #fff;
    }
    .van-tabbar-item--active {
      border-radius: 20px 20px 0 0;
    }
  }
}
</style>
