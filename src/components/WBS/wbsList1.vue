<template>
  <div class="wbsList1">
    <van-overlay :show="show">
      <transition>
        <div class="box" v-if="isShow" ref="box">
          <div class="header">
            <div class="title">
              <img src="../../assets/Group5.png" alt="" srcset="" />
              <p>WBS查询工程</p>
            </div>
            <div class="close" @click="close">X</div>
          </div>
          <div class="list">
            <ul>
              <li
                class="item"
                v-for="index in 4"
                :key="index"
                @click="wbsList2"
              >
                <span>A{{ index }}标</span>
                <span class="arrows"></span>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </van-overlay>
    <wbsList2 ref="wbsList2" />
  </div>
</template>

<script>
import wbsList2 from "./wbsList2.vue";
export default {
  name: "wbsList1",
  components: {
    wbsList2,
  },
  data() {
    return {
      show: false,
      isShow: false,
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

    wbsList2() {
      this.$refs.wbsList2.show = true;
      this.$refs.wbsList2.isShow2 = true;
    },
  },
};
</script>

<style lang="less" scoped>
.wbsList1 {
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
    .list {
      padding: 0 20px;
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        padding: 20px 0;
        font-size: 18px;
        font-weight: bold;
        span:nth-child(2) {
          width: 12px;
          height: 12px;
          border-top: 2px solid rgba(96, 107, 120, 1);
          border-right: 2px solid rgba(96, 107, 120, 1);
          transform: rotate(45deg);
          margin-right: 30px;
        }
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
