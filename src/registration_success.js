// // alert(window.name)

var ele = document.getElementById("user-name")
ele.innerHTML = localStorage.getItem("user_name")

// var btn = document.getElementById("sign-in-rs")
// btn.click(function(){
   
// })

$(document).ready(function(){
    // $("#user-name").html = localStorage.getItem("user_name")
    $("#sign-in-rs").click(function(){
        window.open("login.html","_self")
    });
});