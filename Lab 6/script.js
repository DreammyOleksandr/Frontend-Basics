isActivatedFetch = false

fetchData = async (context) => {
  context.disabled = true
  if (isActivatedFetch) {
    const warning = document.createElement('div')
    warning.textContent = "You've already fetched the data. Refresh the page and try again"
    warning.classList.add('flex-container-center', 'danger-strip')
    document.body.appendChild(warning)
  } else {
    for (let i = 0; i < 5; i++) {
      await fetch('https://randomuser.me/api')
        .then((res) => res.json())
        .then((data) => {
          const elements = []

          document
            .getElementById('cards')
            .insertAdjacentHTML(
              'beforeend',
              `<div id="card${i}" class="card flex-container-center-card-content"></div>`
            )

          const image = `<img class="padding" src="${data.results[0].picture.large}" alt="Ooops..."></img>`
          const city = `<div class="padding">City: ${data.results[0].location.city}</div>`
          const country = `<div class="padding">Country: ${data.results[0].location.country}</div>`
          const name = `<div class="padding">Full Name: ${data.results[0].name.first} ${data.results[0].name.last}</div>`
          const postcode = `<div class="padding">Postcode: ${data.results[0].location.postcode}</div>`

          elements.push(image, city, country, name, postcode)

          for (const element of elements) {
            document.getElementById(`card${i}`).insertAdjacentHTML('beforeend', element)
          }
        })
    }
    context.disabled = false
    isActivatedFetch = true
  }
}
