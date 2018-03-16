<template>
  <div>
    <h1 class="title">
      Playground
    </h1>
    <div>
      <el-button
        type="primary"
        @click="dialogVisible = true">Open Dialog</el-button>
    </div>
    <el-dialog
      title="Sweet Dialog"
      :visible.sync="dialogVisible"
      width="30%">
      <span>This dialog is a juicy one!</span>
      <span slot="footer" class="dialog-footer">
        <el-button
          @click="dialogVisible = false">Cancel</el-button>
        <el-button
          type="primary"
          @click="dialogVisible = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// Import components on demand
import { Dialog } from 'element-ui'

export default {
  components: {
    'el-dialog': Dialog
  },
  data() {
    return {
      dialogVisible: false
    }
  }
}
</script>

<style>
</style>
