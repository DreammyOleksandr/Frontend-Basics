fetchData = () => {
  const usersList = []
  for (i = 0; i < 5; i++) {
    fetch('https://randomuser.me/api')
      .then((res) => res.json())
      .then((data) => {
        usersList.push(data.results)
      })
  }
  console.log(usersList)
}
