import Component from './func-thost'
import Vue from 'vue'

const ThostConstructor = Vue.extend(Component)

const instances = []
let seed = 1

const newthost = (options) => {
  const {
    autoClose,
    ...rest
  } = options
  const instance = new ThostConstructor({
    propsData: {
      ...rest
    },
    data: {
      autoClose: autoClose === undefined ? 3000 : autoClose
    }
  })
  const id = `notification_${seed++}`
  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  let verticalOffset = 0
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instances.push(instance)
  instance.vm.$on('close', () => {
    instance.vm.visible = false
  })
  return instance.vm
}

export default newthost
