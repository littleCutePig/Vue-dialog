export default{
  install (Vue) {
    Vue.prototype.$showCom = showCom
    function showCom () {
      let ShowCom = Vue.extend({
        template: `<div class='newcom'>动态弹框</div>`
      })
      let newCom = new ShowCom()
      let newComEl = newCom.$mount()
      document.body.appendChild(newComEl.$el)
      console.log('showCom', newComEl)
    }
  }
}
