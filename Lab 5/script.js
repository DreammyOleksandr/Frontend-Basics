validate = () => {
  const inputs = document.getElementsByTagName('input')
  let inputsRegex = new Map()

  for (let element of inputs) {
    inputsRegex.set(element.id, {
      data: element.value,
      regex: element.getAttribute('regex'),
      example: element.getAttribute('example'),
    })
  }

  inputsRegex.forEach((value, key) => {
    const element = document.getElementById(key)
    if (!value.data.match(value.regex) && !element.classList.contains('input-danger')) {
      element.classList.toggle('input-danger')
      element.classList.remove('input-success')

      const newElement = document.createElement('div')
      newElement.textContent = `Приклад правильних даних: ${value.example}`
      newElement.classList.toggle('text-danger')
      element.parentNode.insertBefore(newElement, element.nextSibling)
    }

    if (value.data.match(value.regex) && !element.classList.contains('input-success')) {
      element.classList.toggle('input-success')
      element.classList.remove('input-danger')
      element.parentNode.removeChild(element.nextSibling)
    }
    let result = document.getElementById(`${element.id}-result`)
    if (value.data.match(value.regex) && value.data) result.textContent = value.data
  })
}

numberInput = (context) => (context.value = context.value.replace(/[^0-9]/g, ''))
