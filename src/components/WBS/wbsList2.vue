<template>
  <div class="wbsList2">
    <van-overlay :show="show">
      <transition>
        <div class="box" v-if="isShow2" ref="box">
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
              <li
                class="item"
                v-for="index in 4"
                :key="index"
                @click="wbsList3"
              >
                <span>101路基工程K2872+500~K2892+100</span>
                <span class="arrows"></span>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </van-overlay>
    <wbsList3 ref="wbsList3" />
  </div>
</template>

<script>
import wbsList3 from "./wbsList3.vue";
export default {
  name: "wbsList2",
  components: {
    wbsList3,
  },
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
      this.isShow2 = false;
      this.show = false;
    },
    wbsList3() {
      this.$refs.wbsList3.show = true;
      this.$refs.wbsList3.isShow3 = true;
      // this.show = false;
    },
  },
};
</script>

<style lang="less" scoped>
.wbsList2 {
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
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 25px 0;
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
      }
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
