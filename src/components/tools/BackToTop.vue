<template>
  <div v-show="isShow" id="back_to_top" @click="backToTop">
    👆
  </div>
</template>

<script>
export default {
  name: 'Back_to_top',
  data() {
    return {
      isShow: false,  // 回到顶部按钮是否显示，默认不显示
    }
  },
  methods: {
    // 回到顶部
    backToTop() {
      window.scrollTo({ top:0, behavior:"smooth"});
    },

    // 根据滚动条的位置控制按钮的显示与隐藏
    scrollToTop() {
      // 获取滚动条到顶部的距离
      let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      if(scrollTop >= 500) {
        this.isShow = true
      } else {
        this.isShow = false
      }

    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destory() {
    window.removeEventListener('scroll', this.scrollToTop)
  }
}
</script>

<style scoped lang="less">
#back_to_top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgb(216, 72, 72);
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
}
</style>