// Import the functions you need from the SDKs you need

$("#div-alert-login").hide()
$("#div-alert-register").hide()

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXdF1MOl4lRnUjlEvVu5R423WRe3S-aMg",
    authDomain: "horizon-movie-paradise-2.firebaseapp.com",
    projectId: "horizon-movie-paradise-2",
    storageBucket: "horizon-movie-paradise-2.appspot.com",
    messagingSenderId: "384661370682",
    appId: "1:384661370682:web:48429aa212532470d38203",
    measurementId: "G-55ZXR6RKRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function create_user_account(_email, _password) {
    if (_email != "" && _password != "") {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, _email, _password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                // ...
                console.log("SUCCESS : Account Creation")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    } else {
        window.alert("Enter all detailz");
    }
}

function signin_user_account(_email, _password) {
    if (_email != "" && _password != "") {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, _email, _password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("Welcome " + user.uid + user.displayName)
                // localStorage.setItem("login_user_name",_name);
                // ...
                // console.log("SUCCESS : Account Creation")
                // window.open("./registration_success.html");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    } else {
        $("#div-alert-login").show();
    }
}

$("#btn_submit").click(function () {
    var _email = $("#ipt_email").val();
    var _password = $("#ipt_password").val();
    signin_user_account(_email, _password)
    window.open("profile_details.html","_self")

})

$("#btn_register").click(function () {
    var _name = $("#ipt_reg_name").val();
    var _email = $("#ipt_reg_email").val();
    var _dob = $("#ipt_reg_dob").val();
    var _password = $("#ipt_reg_password").val();
    var _password_conf = $("#ipt_reg_password_conf").val();
    // let uid = (Math.random() + 1).toString(36).substring(2);
    create_user_account(_email, _password);
    if (_name != "" && _email != "" && _dob != "" && _password != "" && _password_conf != "" && _password === _password_conf) {
        const db = getDatabase();
        set(ref(db, 'users/' + uid), {
            username: _name,
            email: _email,
            dob: _dob
        });
        console.log("SUCCESS : Registration")
        localStorage.setItem("user_name",_name);
        localStorage.setItem("user_email",_email);
        localStorage.setItem("user_dob",_dob);
        window.open("registration_success.html",_name)
    } else {
        $("#div-alert-register").show()
    }
})