<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <NavMenuSideBar />
    </div>
    <div class="main-container">
      <div class="header">
        <div class="navbar">
          <NavMenuTopBar />
        </div>
        <div class="tags-view">
          <NavBreadcrumb />
        </div>
      </div>
      <div class="app-main">
        <h2>app main</h2>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavMenuSideBar from '@/components/NavMenuSideBar/index.vue';
import NavMenuTopBar from '@/components/NavMenuTopBar/index.vue';
import NavBreadcrumb from '@/components/NavBreadcrumb/index.vue';
</script>

<style lang="scss" scoped>
.app-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  .main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    .header {
      background: cyan;
      .navbar {
        //height: 50px;
        background: #1890ff;
      }
      .tags-view {
        //height: 34px;
        background: #FFF;
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-content: center;

        .el-breadcrumb{
          padding: 20px;
        }
      }
    }
    .app-main {
      /* 50= navbar  50  如果有tagsview + 34  */
      padding: 20px;
      min-height: calc(100vh - 84px);
      background: red;
    }
  }
}
</style>
