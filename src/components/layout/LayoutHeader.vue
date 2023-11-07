<template>
    <header class="navbar navbar-expand-md navbar-dark mb-3 px-3 py-0 fixed-top" role="navigation">
      <router-link class="navbar-brand" to="/home"><img src="/src/assets/images/logo-dark.svg" width="70" height="70" alt="">&nbsp;OpenLayers</router-link>
      <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#olmenu" aria-controls="olmenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> -->

      <!-- menu items that get hidden below 768px width -->
      <nav class="collapse navbar-collapse" id="olmenu">
        <ul class="nav navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="docdropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Docs</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" id="examples-page" to="/example">Examples</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="apidropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fa fa-sitemap me-1"></i>API
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="codedropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Code</a>
          </li>
        </ul>
      </nav>
    </header>
</template>

<script>
export default {
  name: "LayoutHeader",
};
</script>

<style scoped lang="less">

</style>