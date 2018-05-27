const blur = {}

function setBlur (element, binding) {
  element.style.filter = !binding.value ? 'blur(3px)' : 'none'
  element.style.cursor = !binding.value ? 'not-allowed' : 'inherit'
  element.querySelectorAll('a').forEach(link => {
    if (!binding.value) {
      link.setAtribute('disabled', true)
    } else {
      link.removeAttribute('disabled')
    }
  })
}

blur.install = (Vue) => {
  Vue.directive('blur', {
    bind (element, binding) {
      setBlur(element, binding)
    }
  })
}

export default blur
