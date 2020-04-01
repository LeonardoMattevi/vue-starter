<template>
  <div class="navbar-nav">
    <router-link to="/" class="d-flex p-3 align-items-center">
      <img class="ml-3" width="80%" src="/resources/img/logo.png" title="Company logo" />
    </router-link>

    <hr class="sidebar-divider my-0" />

    <div class="nav-item">
      <router-link class="nav-link" to="/">
        <span>
          <i class="fas fa-fw fa-tachometer-alt"></i>&nbsp;Dashboard
        </span>
      </router-link>
    </div>

    <hr class="sidebar-divider" />

    <div class="sidebar-heading">Services</div>

    <div class="nav-item">
      <router-link class="nav-link" to="/todo">
        <i class="fa fa-list-ul"></i>&nbsp; To Do
      </router-link>
      <router-link class="nav-link" to="/about">
        <i class="fa fa-file-alt"></i>&nbsp; About
      </router-link>
    </div>

    <hr class="sidebar-divider" />

    <div class="text-center border m-3 p-2 d-sm-none rounded" style="opacity:0.8;font-size:0.7rem;">
      Text for
      <br />say something...
    </div>
  </div>
</template>

<script>
export default {
  name: "appMenu"
};
</script>