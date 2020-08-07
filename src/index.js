
document.addEventListener("DOMContentLoaded", e => {
  const button = document.querySelector("button")

  const clickHandler = () => {
    button.addEventListener("click", e => {
      fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data => {
        const user = data.results[0]
        renderUser(user)
      })
    })
  }

  const renderUser = user => {
    console.log(user)

    const picture = user.picture.large
    document.querySelector('#profile_picture').src = picture
    
    const first = user.name.first
    const last = user.name.last
    const title = user.name.title
    document.querySelector('#fullname').textContent = `${title} ${first} ${last}`
    
    const email = user.email
    document.querySelector('#email').textContent = email
  }

  clickHandler()
})