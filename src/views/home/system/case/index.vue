<template>
  <div>
    <iframe :src="src" frameborder="no" scrolling="auto"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: 'http://test-agiletc.czb365.com/case/caseList/1',
      //   src: 'http://127.0.0.1:8094',
    }
  },
}
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  height: 100%;

  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
