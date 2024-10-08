validate = () => {
  const inputs = document.getElementsByTagName('input')
  let inputsRegex = new Map()

  for (let element of inputs) {
    if (element.getAttribute('regex')) {
      inputsRegex.set(element.id, { data: element.value, regex: element.getAttribute('regex') })
    }
  }
  console.log(inputsRegex)
  inputsRegex.forEach((value, key) => {
    const element = document.getElementById(key)
    if (!value.data.match(value.regex) && !element.classList.contains('input-danger'))
      element.classList.toggle('input-danger')
    
    if (value.data.match(value.regex) && !element.classList.contains('input-success'))
      element.classList.toggle('input-success')
  })
}

numberInput = (context) => (context.value = context.value.replace(/[^0-9]/g, ''))
