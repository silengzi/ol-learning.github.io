<template>
<!-- 页头 navbar -->
  <div id="layout_header">
    <div class="cube-header_left">
      <div class="logo">logo</div>
      <div class="name">Cube</div>
      <div class="search-wrap">
        <input type="text">
      </div>
    </div>
    <div class="cube-header_right">
      <div class="navbar-item"><router-link to="/article">文章</router-link></div>
      <div class="navbar-item"><router-link to="/about">关于我</router-link></div>
      <div class="navbar-item"><span>开关</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "layout_header",
};
</script>

<style scoped lang="less">
#layout_header {
  height: 70px;
  display: flex;
  
  >div {
    height: 100%;
    flex: 1;
    display: flex;
  }
  .cube-header_left {
    display: flex;
    .logo {
      flex: 2;
      display: flex;
      align-items: center;
      justify-content: right;
      img {
        border-radius: 50%;
        height: 40px;
        width: 40px;
        cursor: pointer;
      }
    }
    .name {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2em;
      cursor: pointer;
    }
    .search-wrap {
      flex: 12;
      display: flex;
      align-items: center;
    }
  }
  .cube-header_right {
    padding-right: 50px;
    display: flex;
    justify-content: right;
    gap: 20px;
    .navbar-item {
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        cursor: pointer;
      }
    }
  }
}
</style>