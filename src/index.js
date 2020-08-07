

document.addEventListener("DOMContentLoaded", () => {
     console.log("CONTENT LOADED!");
   });

   document.addEventListener("click", () => {
    fetch("https://randomuser.me/api/")
    .then(resp=>resp.json())
    .then(obj=> {const user=obj.results[0]
      console.log(user, "hey");
 
let pic = user.picture.large
const name = `${user.name.first}, ${user.name.last}` 
const city = user.location.city
const phone = user.phone
const cell = user.cell
const state = user.location.state
const postCode = user.location.postcode
const birth = user.dob.date

document.querySelector("#profile_picture").src = pic
document.querySelector("#fullname").innerHTML = name
document.querySelector("#city").innerHTML = city

document.querySelector("#phone").innerHTML = phone
document.querySelector("#cell").innerHTML = cell
document.querySelector("#state").innerHTML = state
document.querySelector("#postcode").innerHTML = postCode
document.querySelector("#date_of_birth").innerHTML = birth

})
});