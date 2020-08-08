const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", function(){
  console.log("CONTENT LOADED!");
  
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(res => {     

       let data = res.results[0]
       let picture = data.picture.large
       let cell = data.cell
       let dob = data.dob.date 
       let name = data.name.title+" "+data.name.first+" "+data.name.last
       let email = data.email
       let city = data.location.city
       let street = data.location.street
       console.log(data)

       let button = document.getElementsByTagName('button')[0]
       button.id = "button"
       button.addEventListener("click", function(){

        let imgDiv = document.querySelector("#profile_picture")
        imgDiv.src = picture
        fullname.innerText = name
        let emailDiv = document.getElementById("email")
        emailDiv.innerText = email
        let phoneDiv = document.getElementById("phone")
        phoneDiv.innerText = cell
       })
      
       }
      )
    });
