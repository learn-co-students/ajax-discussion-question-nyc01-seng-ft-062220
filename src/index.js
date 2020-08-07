const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?




document.addEventListener("DOMContentLoaded", () => {

  document.addEventListener("click", e => {
    if (e.target.matches("button.btn.btn-primary")) {
      fetchData()
    }
  });

  const fetchData = () => {
    fetch('https://randomuser.me/api/')
      .then( res => res.json())
      .then( data => {
        const user = data.results[0]
        processData(user)
      })
  };

  const processData = (user) => {

    const picture = user.picture.large

    document.querySelector('#profile_picture').src = picture

    const first = user.name.first
    const last = user.name.last
    const title = user.name.title

    document.querySelector('#fullname').textContent = `${title} ${first} ${last}`

};




});


