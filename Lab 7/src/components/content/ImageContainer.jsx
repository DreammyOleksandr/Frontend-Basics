import React, { useState } from 'react'
import picture from '../../images/Kyiv.jpg'

const ImageContainer = () => {
  const [imageSize, setImageSize] = useState(1500)
  const [hiddenState, setHidden] = useState(false)

  const addImage = () => setHidden(false)
  const deleteImage = () => setHidden(true)
  const zoomIn = () => {
    if (imageSize <= 1500) setImageSize((x) => x + 200)
  }

  const zoomOut = () => {
    if (imageSize >= 500) setImageSize((x) => x - 200)
  }

  return (
    <div>
      <div>
        <a href='https://www.rbc.ua/rus/styler/tse-znayut-navit-kiyani-k-davninu-nazivali-1689685139.html'>
          <img style={{ width: `${imageSize}px` }} src={picture} alt='Упс, щось пішло не так...' hidden={hiddenState}/>
        </a>
      </div>
      <div>
        <button onClick={addImage}>Додати</button>
        <button onClick={zoomIn}>Збільшити</button>
        <button onClick={zoomOut}>Зменшити</button>
        <button onClick={deleteImage}>Видалити</button>
      </div>
    </div>
  )
}

export default ImageContainer
