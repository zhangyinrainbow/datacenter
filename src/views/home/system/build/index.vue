<template>
  <div>
    <iframe :src="src" frameborder="no" scrolling="auto"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: 'https://mrhj.gitee.io/form-generator',
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
