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
  display: grid;
  grid-template-columns: 210px calc(100vw - 210px);
  height: 100%;
  .main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .header {
      background: cyan;
      .navbar {
        //height: 50px;
        background: #1890ff;
      }
      .tags-view {
        background: #eee;
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
      background: #FFF;
      overflow: scroll;
      position: relative;
      height: calc(100vh - 133px);
    }
  }
}
</style>
