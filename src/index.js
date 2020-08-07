const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {

  document.addEventListener("click", function(e){


    if (e.target.matches("button.btn.btn-primary")) {
      fetchData()
    }
  })

  function fetchData(){
    let data = fetch('https://randomuser.me/api/')
      .then( res => res.json() )
      .then( res => processData(res) )

  }

function processData(res) {
    let object = {
      "name" : res.name,

    }

}


});


