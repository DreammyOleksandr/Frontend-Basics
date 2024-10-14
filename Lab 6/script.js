isActivatedFetch = false

fetchData = async (context) => {
  context.disabled = true
  if (isActivatedFetch) {
    let warning = document.createElement('div')
    warning.textContent = "You've already fetched the data. Refresh the page and try again"
    warning.classList.add('flex-container-center', 'danger-strip')
    document.body.appendChild(warning)
  } else {
    for (let i = 0; i < 5; i++) {
      await fetch('https://randomuser.me/api')
        .then((res) => res.json())
        .then((data) => {
          let elements = []

          document
            .getElementById('cards')
            .insertAdjacentHTML('beforeend', `<div id="card${i}" class="card"></div>`)

          const image = `<img class="margin" src="${data.results[0].picture.large}" alt="Ooops..."></img>`
          const city = `<div class="margin">City: ${data.results[0].location.city}</div>`
          const country = `<div class="margin">Country: ${data.results[0].location.country}</div>`
          const name = `<div class="margin">Full Name: ${data.results[0].name.first} ${data.results[0].name.last}</div>`
          const postcode = `<div class="margin">Postcode: ${data.results[0].location.postcode}</div>`

          console.log(data.results[0])

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
