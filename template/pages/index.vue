<template>
  <div>
    <h1>
      Welcome to your Nuxt.js + ElementUI App
    </h1>
    <p>Checkout these links to get you started:</p>
    <div>
      <el-button
        type="primary"
        icon="el-icon-view"
        @click="$router.push('/playground')">
        Playground
      </el-button>
      <el-button
        @click="openUrl('https://nuxtjs.org/')">
        Nuxt Documentation
      </el-button>
      <el-button
        @click="openUrl('http://element.eleme.io/')">
        Element UI Documentation
      </el-button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      openUrl (url) {
        window.open(url)
      }
    }
  }
</script>

<style>
</style>
