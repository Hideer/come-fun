<template>
  <view>
    <view class="u-page">
      <!-- 所有内容的容器 -->
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
    return {};
  },
  onLoad() {},
  computed: {
    ...mapGetters(['tabbar']),
  },
  methods: {},
};
</script>

<style></style>
