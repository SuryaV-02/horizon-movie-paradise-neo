// alert(window.name)

var ele = document.getElementById("user-name")
ele.innerHTML = window.name

var btn = document.getElementById("sign-in-rs")
btn.click(function(){
    window.open("login.html","_self")
})