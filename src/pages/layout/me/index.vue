<template>
  <view>
    <view class="me-container">
      <!-- 所有内容的容器 -->
      <div class="header-bg">
        <u-image
          width="100%"
          height="388rpx"
          :src="'https://cdn.uviewui.com/uview/example/fade.jpg'"
          :fade="true"
          duration="450"
        ></u-image>
      </div>

      <div class="content-wrapper">
        <div class="header-wrapper">
          <div class="avatar">
            <u-image
              width="160rpx"
              height="160rpx"
              :src="'https://cdn.uviewui.com/uview/example/fade.jpg'"
              :fade="true"
              duration="450"
              shape="circle"
            ></u-image>
            <div class="edit-icon">
              <u-icon name="camera" size="36" color="#FFF"></u-icon>
            </div>
          </div>
          <div class="user-info">
            <div class="base">
              <span class="name">小华安</span>
              <div class="tag-wrap">
                <u-icon name="camera" size="26" color="#FFF"></u-icon>
                <span class="text">荣耀砖石</span>
              </div>
            </div>
            <p class="intro">我是一个小小小蜜蜂，从来也不去</p>
            <div class="data">
              <div class="item" v-for="(item, i) in userUseData" :key="i">
                <div class="num">{{ item.num }}</div>
                <div class="text">{{ item.text }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="function-wrapper">
          <div class="title">常用操作</div>
          <u-grid :col="2" :border="false">
            <u-grid-item v-for="(item, i) in funcBtnList" :key="i">
              <div class="info-wrap">
                <div class="info">
                  <view class="grid-text">{{ item.title }}</view>
                  <view class="grid-text tip">{{ item.info }}</view>
                </div>
                <u-icon :name="item.icon" :size="52"></u-icon>
              </div>
            </u-grid-item>
          </u-grid>
        </div>

        <!-- active -->
        <div class="active-banner">
          <u-swiper :list="list" :effect3d="true" height="200"></u-swiper>
        </div>
      </div>
    </view>

    <!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
    <u-tabbar
      :list="tabbar.list"
      :mid-button="true"
      :active-color="tabbar.list[0].activeColor"
      :inactive-color="tabbar.list[0].inactiveColor"
    ></u-tabbar>
  </view>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      userUseData: [
        {
          num: '0',
          text: '关注',
        },
        {
          num: '0',
          text: '粉丝',
        },
        {
          num: '0',
          text: '活力',
        },
      ],

      funcBtnList: [
        {
          title: '我报名的活动',
          info: '查看历史参与活动记录',
          icon: 'order',
        },
        {
          title: '我发布的活动',
          info: '查看历史发布活动记录',
          icon: 'fingerprint',
        },
        {
          title: '我的圈子',
          info: '查看历史发圈记录',
          icon: 'moments',
        },
        {
          title: '我的消息',
          info: '快速查看消息',
          icon: 'chat',
        },
      ],

      list: [
        {
          image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
          title: '昨夜星辰昨夜风，画楼西畔桂堂东',
        },
        {
          image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
          title: '身无彩凤双飞翼，心有灵犀一点通',
        },
        {
          image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
          title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳',
        },
      ],
    };
  },
  onLoad() {},
  computed: {
    ...mapGetters(['tabbar']),
  },
  methods: {},
};
</script>

<style lang="scss">
page {
  background: #fff;
}
.header-bg {
  height: 388rpx;
  border-bottom-left-radius: 40rpx;
  border-bottom-right-radius: 40rpx;
  overflow: hidden;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}

.content-wrapper {
  padding: 238rpx 30rpx 0;

  .header-wrapper {
    box-shadow: 0px 8px 6px -10px rgba(16, 16, 16, 10);
    border-radius: 8px;
    padding: 30rpx 50rpx;
    background-color: #fff;
    position: relative;

    .avatar {
      padding: 10rpx;
      position: absolute;
      right: 60rpx;
      top: -90rpx;
      border-radius: 50%;
      background-color: #fff;

      .edit-icon {
        position: absolute;
        right: 20rpx;
        bottom: -6rpx;
        z-index: 1;
        padding: 6rpx;
        border-radius: 50%;
        background-color: #554d84;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .user-info {
      > .base {
        display: flex;
        align-items: center;
        padding: 20rpx 0 0;

        .name {
          font-weight: bold;
          font-size: 18px;
        }

        .tag-wrap {
          margin-left: 20rpx;
          color: #fff;
          padding: 0 10rpx;
          border-radius: 30rpx;
          background-color: #af52de;
        }
      }
      > .intro {
        font-size: 14px;
        color: #999;
        padding: 20rpx 0 48rpx;
      }

      > .data {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .text,
        .num {
          text-align: center;
        }
        .text {
          color: #8e8e8e;
        }
      }
    }
  }

  .function-wrapper {
    .title {
      margin: 42rpx 0;
      text-indent: 24rpx;
      font-weight: bold;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        height: 30rpx;
        width: 7rpx;
        background-color: $business-color-primary;
        left: 5rpx;
        top: 5rpx;

        border-radius: 2rpx;
      }
    }
    .info-wrap {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20rpx;

      .info {
        // font-weight: bold;
        .tip {
          font-weight: normal;
          color: #999;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
