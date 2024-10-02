firstElementColorChange = () =>
  document
    .getElementById('first-element')
    .classList.toggle('first-element-color')

secondElementColorChange = () => {
  element = document.querySelector('#second-element')
  element.classList.toggle('second-element-color')
}
