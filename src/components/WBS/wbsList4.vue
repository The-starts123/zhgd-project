<template>
  <div class="wbsList4">
    <van-overlay :show="show">
      <transition>
        <div class="box" v-if="isShow4" ref="box">
          <div class="header">
            <div class="title">
              <img src="../../assets/Group5.png" alt="" srcset="" />
              <p>WBS查询工程</p>
            </div>
            <div class="close" @click="close">X</div>
          </div>
          <div class="changeList">
            <ul>
              <li class="item">
                <div class="item_box">
                  <span class="line"></span>
                  <div class="icon">
                    <span></span>
                    <p>A1标</p>
                  </div>
                </div>
                <div>
                  <img src="../../assets/Group6.png" />
                </div>
              </li>
            </ul>
          </div>
          <div class="list">
            <ul>
              <li class="item">
                <!-- <span>101路基工程K2872+500~K2892+100</span>
                <span class="arrows"></span> -->
                <van-radio-group v-model="radio">
                  <van-cell-group>
                    <van-cell
                      title="101填方(土、石) MRZK2872+500-MRZK2874+988.028"
                      v-for="index in 4"
                      :key="index"
                      clickable
                      @click="radio = index"
                    >
                      <van-radio :name="index" />
                    </van-cell>
                  </van-cell-group>
                </van-radio-group>
              </li>
            </ul>
            <div class="btn">确认</div>
          </div>
        </div>
      </transition>
    </van-overlay>
  </div>
</template>

<script>
export default {
  name: "wbsList4",
  data() {
    return {
      show: false,
      isShow4: false,
      count: 200,
      timer: null,
      radio: "-1",
    };
  },
  methods: {
    close() {
      this.isShow4 = false;
      this.show = false;
    },
  },
};
</script>

<style lang="less" scoped>
.wbsList4 {
  .box {
    width: 100%;
    height: 540px;
    background-color: #fff;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    position: fixed;
    bottom: 0;
    z-index: 9999;
    box-sizing: border-box;
    .header {
      width: 100%;
      height: 60px;
      background-color: #3788fd;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      position: relative;
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        img {
          width: 22px;
          height: 22px;
          margin-right: 8px;
        }
        p {
          font-size: 18px;
          color: #fff;
        }
      }
      .close {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background-color: #e5e5e5;
        line-height: 28px;
        text-align: center;
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .changeList {
      background-color: #eaf2ff;
      .item {
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .item_box {
          position: relative;
          span {
            display: block;
          }
          .line {
            width: 0;
            height: 30px;
            border: 1px solid rgba(196, 196, 196, 1);
            position: absolute;
            top: -17px;
            left: 4px;
          }
          .icon {
            display: flex;
            align-items: center;
            span {
              width: 8px;
              height: 8px;
              border-top: 2px solid rgba(196, 196, 196, 1);
              border-right: 2px solid rgba(196, 196, 196, 1);
              transform: rotate(135deg);
            }
            P {
              color: rgba(51, 51, 51, 1);
              font-size: 18px;
              margin-left: 15px;
            }
          }
        }
        img {
          width: 24px;
          height: 24px;
        }
      }
    }
    .list {
      padding: 0 20px;
      overflow: hidden;
      .item {
        // padding: 25px 0;
        font-size: 12px;
        font-weight: bold;
        color: rgba(96, 107, 120, 1);
        span:nth-child(2) {
          width: 10px;
          height: 10px;
          border-top: 2px solid rgba(96, 107, 120, 1);
          border-right: 2px solid rgba(96, 107, 120, 1);
          transform: rotate(45deg);
        }
        /deep/.van-cell {
          padding: 15px 0;
          color: rgba(96, 107, 120, 1);
          font-size: 12px;
          .van-cell__value {
            max-width: 20px;
          }
        }
        /deep/.van-cell::after,
        /deep/[class*="van-hairline"]::after {
          border: none;
        }
      }
    }
    .btn {
      width: calc(100% - 40px);
      height: 50px;
      background-color: #3788fd;
      color: #fff;
      text-align: center;
      line-height: 50px;
      border-radius: 7px;
      position: fixed;
      left: 50%;
      bottom: 40px;
      transform: translateX(-50%);
    }
  }
  P {
    margin: 0;
  }
}
/deep/.van-overlay {
  background-color: rgba(0,0,0,.1);
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
