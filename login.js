function login(){
    const name = document.querySelector("#name");
    localStorage.setItem("userName",name.value);      //Sets the item (first argument) , to the specified value. 
    window.location.href = "play.html";     //Makes the funcion end with a redirection to a specified link.
}