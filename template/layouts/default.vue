<template>
  <div class="app-wrapper">
    <el-container>
      <el-header class="app-header">
        <div class="app-logo" @click="$router.push('/')">
          {{ name }}
        </div>
        <el-menu
          class="app-menu"
          mode="horizontal"
          :router="true"
          :default-active="$route.path">
          <el-menu-item index="/" :route="{ path: '/' }">
            Start
          </el-menu-item>
          <el-menu-item index="/playground" :route="{ path: '/playground' }">
            Playground
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <nuxt/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// Import components on demand
import { Container, Header, Main, Menu, MenuItem } from 'element-ui'

export default {
  components: {
    ElContainer: Container,
    ElHeader: Header,
    ElMain: Main,
    ElMenu: Menu,
    ElMenuItem: MenuItem
  },
  data() {
    return {
      dialogVisible: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/variables.scss";

  .app-wrapper {
    margin: 0 auto;
  }

  .app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $--background-color-base;
  }

  .app-logo {
    cursor: pointer;
    font-weight: bold;
    color: $--color-primary;
  }

  .app-menu {
    background-color: $--background-color-base;
    border-bottom: none;

    .el-menu-item {
      &:hover, &.is-active {
        background-color: $--background-color-base;
      }
    }
  }
</style>
