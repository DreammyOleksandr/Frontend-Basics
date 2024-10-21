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
            className={`${this.state.isFirstInverted ? 'invert' : ''} first-element-color`}
            onClick={this.firstElementColorChange}
          >
            Бондаренко Олександр Юрійович
          </h2>

          <p
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
      </div>
    )
  }
}

export default Content
