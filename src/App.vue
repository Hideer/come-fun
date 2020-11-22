<script lang="ts">
export default {
  mpType: 'app',
  onLaunch() {
    console.log('App Launch');
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
  },
};
</script>

<style lang="scss">
@import 'uview-ui/index.scss';
/*每个页面公共css */
page {
  font-size: 14px;
  color: #333;
  background-color: #f8f8f8;
}
</style>
