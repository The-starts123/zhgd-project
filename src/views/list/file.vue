<template>
  <div id="image">
    <div class="header">
      <div class="header_top">
        <span class="time">9:41</span>
        <div class="icon">
          <i class="iconfont icon-phone-signal-full"></i>
          <i class="iconfont icon-WIFI"></i>
          <i class="iconfont icon-80dianliang"></i>
        </div>
      </div>
      <div class="header_buttom" @click="goBack">
        <span class="arrows"></span>
        <span class="title">施工图文件</span>
      </div>
    </div>
    <div class="main">
      <ul>
        <li class="item" v-for="index in 5" :key="index">
          <div>
            <img src="../../assets/Frame.png" alt="" srcset="" />
            <div class="info">
              <p>第5册第一分册.cad</p>
              <span>p75</span>
            </div>
          </div>
          <img src="../../assets/download.png" alt="" srcset="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "image",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less" scoped>
#image {
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
      align-items: center;
      .arrows {
        width: 10px;
        height: 10px;
        border-top: 2px solid #fff;
        border-left: 2px solid #fff;
        transform: rotate(-45deg);
        margin-right: 20px;
      }
      .title {
        font-size: 20px;
        color: #fff;
      }
    }
  }
  .main {
    padding: 20px 15px;
    background-color: #f2f2f2;
    height: calc(100vh - 98px);
    box-sizing: border-box;
    ul {
      .item {
        padding: 18px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #fff;
        margin-bottom: 20px;
        div:first-child {
          display: flex;
          align-items: center;
          img:nth-child(1) {
            width: 35px;
            height: auto;
          }
          .info {
            margin-left: 10px;
            p {
              font-size: 16px;
              margin: 0;
            }
            span {
              font-size: 12px;
              color: #606b78;
            }
          }
        }
        img:nth-child(2) {
          width: 24px;
          height: auto;
        }
      }
    }
  }
}
</style>
