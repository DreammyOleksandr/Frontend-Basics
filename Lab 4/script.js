firstElementColorChange = () =>
  document.getElementById('first-element').classList.toggle('invert')

secondElementColorChange = () =>
  document.querySelector('#second-element').classList.toggle('invert')

addImage = () => {
  if (document.querySelectorAll('#image').length === 0) {
    const image = document.createElement('img')
    image.src = './images/Kyiv.jpg'
    image.alt = 'Київ'
    image.id = 'image'
    image.className = 'image'
    document.getElementById('image-ref').appendChild(image)
  }
}

zoom = (button) => {
  const action = {
    zoomIn: +200,
    zoomOut: -200,
  }
  const img = document.querySelector('#image')

  if (img && action[button.id]) {
    const currentWidth = parseInt(window.getComputedStyle(img).width)
    img.style.width = currentWidth + action[button.id] + 'px'
  }
}

deleteImage = () => {
  const img = document.getElementById('image')
  if (img) img.remove()
}
