import React, { Component } from 'react'

export class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFirstInverted: false,
      isSecondInverted: false,
    }
  }

  firstElementColorChange = () =>
    this.setState((prevState) => ({ isFirstInverted: !prevState.isFirstInverted }))

  secondElementColorChange = () =>
    this.setState((prevState) => ({ isSecondInverted: !prevState.isSecondInverted }))

  render() {
    return (
      <div>
        <div>
          <h2
            id='first-element'
            className={`${this.state.isFirstInverted ? 'invert' : ''} first-element-color`}
            onClick={this.firstElementColorChange}
          >
            Бондаренко Олександр Юрійович
          </h2>

          <p
            id='second-element'
            className={`${this.state.isSecondInverted ? 'invert' : ''} second-element-color`}
            onClick={this.secondElementColorChange}
          >
            Дата народження: 01.12.2003 <br />
            Місце народження: Білгород-Дністровський, Одеська обл.
          </p>

          <p>
            Освіта: Середня повна: Одеська ЗОШ №80
            <br />
            Вища (у процесі): КПІ
          </p>

          <p>Хобі:</p>
          <ul>
            <li>Спортивна зала</li>
            <li>Електрогітара</li>
            <li>Програмування</li>
          </ul>

          <p>Улюблені фільми:</p>
          <ol>
            <li>Список Шиндлера</li>
            <li>Оппенгеймер</li>
            <li>Зелена миля</li>
          </ol>

          <p>
            Київ — столиця та найбільше місто України. Розташований в середній течії Дніпра, у
            північній Наддніпрянщині. Політичний, соціально-економічний, транспортний,
            освітньо-науковий, історичний, культурний та духовний центр України.
            <br />
            Місто розташоване на півночі України, на межі Полісся і лісостепу по обидва береги
            Дніпра в його середній течії.
            <br />
            Площа міста 836 км^2.
            <br />
            Довжина вздовж берега — понад 20 км.
            <br />
          </p>
        </div>
        <div id='image-container'>
          <a
            id='image-ref'
            href='https://www.rbc.ua/rus/styler/tse-znayut-navit-kiyani-k-davninu-nazivali-1689685139.html'
          >
            <img
              id='image'
              className='image'
              src='./images/Kyiv.jpg'
              alt='Упс, щось пішло не так...'
            />
          </a>
        </div>
        <div>
          <button onclick='addImage()'>Додати</button>
          <button id='zoomIn' onclick='zoom(this)'>
            Збільшити
          </button>
          <button id='zoomOut' onclick='zoom(this)'>
            Зменшити
          </button>
          <button onclick='deleteImage()'>Видалити</button>
        </div>
      </div>
    )
  }
}

export default Content
