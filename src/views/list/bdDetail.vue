<template>
  <div class="detail">
    <van-overlay :show="show">
      <transition>
        <div class="box" v-if="isShow" ref="box">
          <div class="close" @click="close"></div>
          <div class="list">
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
            </div>
            <div class="icon">
              <div class="icon_box">
                <i class="iconfont icon-bingdu"></i>
                <p>排雷</p>
              </div>
              <div class="icon_box">
                <i class="iconfont icon-bingdu"></i>
                <p>导航</p>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="info">
              <span class="title">计划工期：</span>
              <span class="text">2021.11.17 -2023.01.31</span>
            </div>
            <div class="info">
              <span class="title">实际工期：</span>
              <span class="text">2021.11.17 -2023.01.31</span>
            </div>
            <div class="info">
              <div>
                <span class="title">施工员：</span>
                <span class="text"></span>
              </div>
              <div>
                <span class="title">现场监理：</span>
                <span class="text"></span>
              </div>
            </div>
            <div class="info">
              <div>
                <span class="title">形象进度：</span>
                <span class="text"></span>
              </div>
              <div>
                <span class="title">最近施工：</span>
                <span class="text">暂无</span>
              </div>
            </div>
          </div>
          <div class="btn_box">
            <div class="image" @click="toImage">影像</div>
            <div class="file" @click="toFile">施工图文件</div>
          </div>
        </div>
      </transition>
    </van-overlay>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      isShow2: false,
      count: 200,
      timer: null,
    };
  },
  methods: {
    close() {
      this.isShow = false;
      this.show = false;
    },
    toImage() {
      this.$router.push("/image");
    },
    toFile() {
      this.$router.push("/file");
    },
  },
};
</script>

<style lang="less" scoped>
.detail {
  .box {
    width: 100%;
    height: 500px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    z-index: 9999;
    padding: 15px 20px 20px;
    box-sizing: border-box;
    .close {
      width: 40px;
      height: 3px;
      background-color: #000;
      border-radius: 16px;
      margin: 0 auto;
    }
    .list {
      margin: 20px 0 20px 0;
      display: flex;
      justify-content: space-between;
      .project_list {
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
      .icon {
        display: flex;
        .icon_box {
          margin-right: 10px;
          i {
            font-size: 48px;
            color: #3788fd;
          }
          P {
            text-align: center;
          }
        }
      }
    }
    .content {
      width: 100%;
      height: 160px;
      padding: 15px 20px 20px;
      background-color: #e7f5ff;
      border-radius: 9px;
      box-sizing: border-box;
      font-size: 14px;
      .info {
        line-height: 31px;
        .title {
          display: inline-block;
          width: 70px;
        }
        .text {
          color: #606b78;
        }
      }
      .info:nth-child(3),
      .info:nth-child(4) {
        display: flex;
        div:first-child {
          margin-right: 90px;
        }
      }
    }
    .btn_box {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      div {
        width: 162px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        border-radius: 7px;
      }
      .image {
        border: 1px solid #3788fd;
        color: #3788fd;
      }
      .file {
        background-color: #3788fd;
        color: #fff;
      }
    }
  }
  P {
    margin: 0;
  }
}
.v-enter,
.v-leave-to {
  transform: translate(0, 500px);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s linear;
}

.v-enter-to,
.v-leave {
  transform: translate(0, 0);
}
/deep/.van-overlay {
  z-index: 9998;
}
</style>
