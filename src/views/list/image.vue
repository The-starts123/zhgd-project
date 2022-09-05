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
        <span class="title">影像</span>
      </div>
    </div>
    <div class="main">
      <div class="project_list">
        <ul>
          <li class="item">
            <div class="arrows"><span></span></div>
            A1标
          </li>
          <li class="item" v-for="index in 5" :key="index">
            <div class="arrows"><span></span></div>
            <p><span></span>樟吉大溪中桥</p>
          </li>
        </ul>
        <div class="box">
          <div class="img_box">
            <img src="../../assets/Rectangle 996.png" />
          </div>
          <div class="img_box">
            <img src="../../assets/Rectangle 996.png" />
          </div>
        </div>
      </div>
      <div
        class="box"
        style="display: flex; flex-wrap: wrap; justify-content: space-between"
      >
        <div class="img_box" v-for="index in 6" :key="index">
          <img src="../../assets/Rectangle 996.png" />
        </div>
      </div>
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
    padding: 15px 25px;
    .project_list {
      display: flex;
      justify-content: space-between;
      ul {
        .item:first-child {
          margin-left: 27px;
          font-size: 18px;
          font-weight: bold;
          .arrows {
            height: 0;
            top: 18px;
            left: -27px;
          }
        }
        .item {
          .arrows {
            position: relative;
            span:first-child {
              display: block;
              width: 1px;
              height: 26px;
              border-left: 1px solid #c4c4c4;
              position: absolute;
              top: -14px;
              left: 3px;
            }
          }
          P {
            list-style: none;
            font-size: 14px;
            color: #606b78;
            display: flex;
            align-items: center;
            margin-top: 8px;
            span:first-child {
              display: block;
              width: 6px;
              height: 6px;
              border-left: 1px solid #606b78;
              border-bottom: 1px solid #606b78;
              transform: rotate(-45deg);
              margin-right: 20px;
            }
          }
        }
      }
    }
    .box {
      .img_box {
        width: 160px;
        height: auto;
        margin-bottom: 20px;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
    }
  }
}
</style>
