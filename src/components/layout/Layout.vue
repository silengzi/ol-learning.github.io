<template>
  <!-- 整体布局容器 -->
  <div id="layout">
    <!-- 页头导航栏 -->
    <nav><LayoutHeader></LayoutHeader></nav>

    <!-- 展示页面主题内容 -->
    <main><router-view></router-view></main>

    <!-- 页尾 footer -->
    <!-- <footer><LayoutFooter></LayoutFooter></footer> -->

    <!-- 回到顶部 -->
    <BackToTop />
  </div>
</template>

<script>
import LayoutHeader from "@/components/layout/LayoutHeader.vue"; // 页头
// import LayoutFooter from "@/components/layout/LayoutFooter.vue"; // 页尾
import BackToTop from "@/components/tools/BackToTop.vue"; // 回到顶部

export default {
  name: "layout",
  components: {
    LayoutHeader,
    // LayoutFooter,
    BackToTop,
  },
};
</script>

<style scoped lang="less">
#layout {
  main {
    min-height: calc(100vh - var(--header_height) - var(--footer_height));
  }
}
</style>