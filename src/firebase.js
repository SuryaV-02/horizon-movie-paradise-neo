// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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

$("#btn_submit").click(function () {
    var _email = $("#ipt_email").val();
    var _password = $("#ipt_password").val();

    if (_email != "" && _password != "") {
        // var result = firebase.auth().signInWithEmailAndPassword(_email,_password);
        // result.catch(function(error){
        //     var err_code = error.code;
        //     var errorMessage = error.message;
        //     console.log(err_code + " " + errorMessage);
        //     window.alert("Errow occured")
        // });
        // firebase.auth().signInWithEmailAndPassword(_email, _password)
        //     .then((userCredential) => {
        //         // Signed in
        //         var user = userCredential.user;
        //         // ...
        //     })
        //     .catch((error) => {
        //         var errorCode = error.code;
        //         var errorMessage = error.message;
        //     });

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, _email, _password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    } else {
        window.alert("Enter all detailz");
    }
})