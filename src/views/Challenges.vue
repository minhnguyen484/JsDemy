<template>
  <CRow>
    <CCol :sm="7" :xs="12">
      <el-tabs class="demo-tabs">
        <el-tab-pane label="Instruction">
          <Codemirror
            v-model:value="code"
            :options="cmOptions"
            border
            :height="255"
            class="mb-3"
          />
          <CButton
            class="align-right"
            color="success"
            @click.prevent="this.exeFunction()"
            >Check</CButton
          >
        </el-tab-pane>
        <el-tab-pane label="Solutions">
          <CFormTextarea v-model="this.code" rows="10" disabled></CFormTextarea>
        </el-tab-pane>
      </el-tabs>
    </CCol>
    <CCol :sm="5" :xs="12">
      <el-tabs class="demo-tabs">
        <el-tab-pane label="Console"
          ><CFormTextarea v-model="this.result" rows="10"></CFormTextarea
        ></el-tab-pane>
        <el-tab-pane label="Test">
          <CFormTextarea v-model="this.test" rows="10"></CFormTextarea>
        </el-tab-pane>
      </el-tabs>
    </CCol>
  </CRow>
</template>

<script>
import Codemirror from 'codemirror-editor-vue3'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/dracula.css'

export default {
  components: { Codemirror },
  name: 'Dashboard',
  data() {
    return {
      code: '',
      test: '',
      result: '',
      cmOptions: {},
    }
  },
  mounted() {
    this.cmOptions = {
      mode: 'text/javascript', // Language mode
      theme: 'dracula', // Theme
      lineNumbers: true, // Show line number
      smartIndent: true, // Smart indent
      indentUnit: 2, // The smart indent unit is 2 spaces in length
      foldGutter: true, // Code folding
      styleActiveLine: true, // Display the style of the selected row
    }
  },
  methods: {
    exeFunction() {
      var func = eval(this.code)
      func()
    },
  },
}
</script>
