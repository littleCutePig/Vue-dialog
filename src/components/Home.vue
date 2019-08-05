<template>
    <div>
        <button @click="showCom">点击出现一个弹框</button>
    </div>
</template>
<script>
export default {
  props: {

  },
  components: {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
    showCom () {
      this.$showCom()
    }
  },
  created () {

  },
  mounted () {

  }
}
</script>
<style scoped lang="">

</style>
