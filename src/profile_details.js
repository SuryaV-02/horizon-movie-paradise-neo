$(document).ready(function(){
    var user_name = document.getElementById("user-name")
    var user_email = document.getElementById("user-email")

    user_name.innerHTML = localStorage.getItem("user_name")
    user_email.innerHTML = localStorage.getItem("user_email")
});