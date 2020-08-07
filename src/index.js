// const fullname = document.getElementById("fullname");
// console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {


const addUserHandler = () => {
  const addBttn = document.querySelector('button')
  addBttn.addEventListener('click', getUser)
};

const renderUserData = (userData) => {
  let user = userData.results[0]
  let userName = user.name.title + " " +user.name.first + " " + user.name.last
  let userEmail = user.email
  let userPhone = user.phone
  let userCell = user.cell
  let date = new Date(user.dob.date)
  let userDob = date.toDateString().slice(4) + " Age:" + user.dob.age
  let userStreet = user.location.street.number + " " + user.location.street.name
  let userCity = user.location.city
  let userState = user.location.state
  let userPostcode = user.location.postcode
  let userProfilePic = user.picture.large
  
  document.querySelector("#fullname").innerHTML = userName
  document.querySelector("#email").innerHTML = userEmail
  document.querySelector("#phone").innerHTML = userPhone
  document.querySelector("#cell").innerHTML = userCell
  document.querySelector("#date_of_birth").innerHTML = userDob
  document.querySelector("#street").innerHTML = userStreet
  document.querySelector("#city").innerHTML = userCity
  document.querySelector("#state").innerHTML = userState
  document.querySelector("#postcode").innerHTML = userPostcode
  document.querySelector("#profile_picture").src = userProfilePic
};


const getUser = () => {
  fetch('https://randomuser.me/api/')
  .then(resp => resp.json())
  .then(userData => renderUserData(userData));
};


addUserHandler()
});
