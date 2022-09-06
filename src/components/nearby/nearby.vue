<template>
  <div class="detail">
    <van-overlay :show="show">
      <transition>
        <div class="box" v-if="isShow" ref="box">
          <div class="header">
            <div class="title">
              <img src="../../assets/Group1.png" alt="" srcset="" />
              <p>附近工程</p>
            </div>
            <div class="close" @click="close">X</div>
          </div>
          <div class="main">
            <div class="change">
              <p class="title">范围</p>
              <div class="btn">
                <span
                  :class="activeClass == index ? 'active' : ''"
                  v-for="index in 4"
                  :key="index"
                  @click="isActive(index)"
                >
                  200M
                </span>
              </div>
            </div>
            <div class="change">
              <p class="title">类型</p>
              <div class="btn">
                <span
                  :class="activeClass2 == index ? 'active' : ''"
                  v-for="index in 5"
                  :key="index"
                  @click="isActive2(index)"
                >
                  全部
                </span>
              </div>
            </div>
            <div class="time">
              <span class="title">施工时间</span>
              <van-switch v-model="checked" size="20px" />
            </div>
            <div class="time_box">
              <div class="startTime">
                <span>开始时间</span>
                <div @click="changeStartTime">{{ startTime }}</div>
              </div>
              <span class="text">至</span>
              <div class="endTime">
                <span>结束时间</span>
                <div @click="changeEndTime">{{ endTime }}</div>
              </div>
            </div>
            <div class="btn_box">
              <div class="reset">重新筛选</div>
              <div class="confirm" @click="close">确定</div>
            </div>
            <van-popup v-model="isNone" position="bottom" :overlay="true">
              <van-datetime-picker
                v-model="currentDate"
                type="date"
                :min-date="minDate"
                @cancel="cancel"
                @confirm="confirm"
              />
            </van-popup>
          </div>
        </div>
      </transition>
    </van-overlay>
  </div>
</template>

<script>
export default {
  name: "wbsList1",
  data() {
    return {
      show: false,
      isShow: false,
      isNone: false,
      activeClass: -1,
      activeClass2: -1,
      checked: true,
      currentDate: new Date(),
      minDate: new Date(),
      startTime: "",
      endTime: "",
      type: "",
    };
  },
  methods: {
    close() {
      this.isShow = false;
      this.show = false;
    },
    isActive(i) {
      this.activeClass = i;
    },
    isActive2(i) {
      this.activeClass2 = i;
    },
    changeStartTime() {
      this.isNone = true;
      this.type = "start";
    },
    changeEndTime() {
      this.isNone = true;
      this.type = "end";
    },
    cancel() {
      this.isNone = false;
    },
    confirm(val) {
      if (this.type == "start") {
        this.startTime = this.formatDate(val);
        this.isNone = false;
      } else {
        this.endTime = this.formatDate(val);
        this.isNone = false;
      }
    },

    formatDate(time) {
      var date = new Date(time);
      var year = date.getFullYear(),
        month = date.getMonth() + 1, //月份是从0开始的
        day = date.getDate();
      var newTime = year + "-" + month + "-" + day;
      return newTime;
    },
  },
};
</script>

<style lang="less" scoped>
.detail {
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
          font-weight: bold;
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
    .main {
      margin-top: 40px;
      padding: 0 20px;
      .title {
        font-size: 18px;
        margin-bottom: 5px;
        font-weight: bold;
      }
      .change {
        margin-bottom: 20px;
        .btn {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          span {
            display: block;
            width: 80px;
            height: 40px;
            border-radius: 5px;
            line-height: 40px;
            text-align: center;
            font-size: 14px;
            border: 1px solid rgba(196, 196, 196, 1);
            margin-bottom: 8px;
          }
          span:last-child {
            margin-bottom: 0;
          }
        }
        .active {
          border: 1px solid rgba(55, 136, 253, 1) !important;
          color: rgba(55, 136, 253, 1);
          background-color: rgba(232, 245, 255, 1);
        }
      }
      .time {
        display: flex;
        align-content: center;
        justify-content: space-between;
      }
      .time_box {
        display: flex;
        justify-content: space-between;
        .startTime,
        .endTime {
          span {
            font-size: 12px;
            color: rgba(96, 107, 120, 1);
          }
          div {
            width: 147px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            border-radius: 5px;
            border: 1px solid #ccc;
            margin-top: 5px;
          }
        }
        .text {
          display: block;
          font-size: 14px;
          line-height: 79px;
        }
      }
      .btn_box {
        padding: 15px 0 0 0;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid rgba(229, 229, 229, 1);
        div {
          width: 162px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          border-radius: 7px;
        }
        .reset {
          border: 1px solid rgba(55, 136, 253, 1);
          color: rgba(55, 136, 253, 1);
        }
        .confirm {
          background-color: rgba(55, 136, 253, 1);
          color: #fff;
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
