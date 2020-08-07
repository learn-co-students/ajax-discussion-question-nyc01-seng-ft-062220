const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

function fetchPerson() {
   return fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => 
      const user = data.results[0]
    } 
}


document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  //didn't have a chance to finish

  document.addEventListener("click", function(e){
      if (e.target.matches(".btn btn-primary")){
    
        fetchPerson()
      }


  })


});




/*
1. create and event listener on button or form
2. add get fetch request on the listener
3. do weird fetch stuff to convert to usable data
4. add it in the correct place on dom


*/