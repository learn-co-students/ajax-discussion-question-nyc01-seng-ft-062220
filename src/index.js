const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?










document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  const url = "https://randomuser.me/api/"

  function renderPerson(obj) {
    //Image
    let image = obj.picture.large
    document.querySelector("img").src = image
    console.log(obj)

    //Name
    let first = obj.name.first
    let last = obj.name.last
    let title = obj.name.title
    document.getElementById("fullname").innerText = `${title} ${first} ${last}`

    //Email
    let email = obj.email
    document.getElementById("email").innerText = email

    //Street
    let streetName = obj.location.street.name
    let streetNumber = obj.location.street.number

    document.getElementById("street").innerText = `${streetNumber} ${streetName}`
    
  }



function clickSubmit() {
  let button = document.querySelector(".btn")
  button.addEventListener("click", function(event) {
  
    fetch(url)
    .then(res => res.json())
    .then(res => renderPerson(res.results[0]))
  
  })
}
 



clickSubmit()

});
