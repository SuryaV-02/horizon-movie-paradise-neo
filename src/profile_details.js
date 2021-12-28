import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateCurrentUser } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
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
$(document).ready(function () {
    // var user_name = document.getElementById("user-name")
    // var user_email = document.getElementById("user-email")

    // user_name.innerHTML = localStorage.getItem("user_name")
    // user_email.innerHTML = localStorage.getItem("user_email")


    // const db = getDatabase();
    // var uid = localStorage.uid
    // const Ref = ref(db, 'users/' + uid);
    // onValue(Ref, (snapshot) => {
    //     // const data = snapshot.val();
    //     snapshot.forEach((child) => {
    //         console.log(child.key, child.val()); 
    //         this.intVal.push(child.val());
    //         console.log("intVal",this.intVal);
    //       });
    //     // updateStarCount(postElement, data);
    // });


    var uid = localStorage.uid

    // const db = getDatabase();
    // set(ref(db, 'users/' + uid), {
    //     username: _name,
    //     email: _email,
    //     dob: _dob
    // })

    // var leadsRef = getDatabase().ref('users/' + uid);
    // leadsRef.on('value', function (snapshot) {
    //     snapshot.forEach(function (childSnapshot) {
    //         var childData = childSnapshot.val();
    //         console.log(childData)
    //     });
    // });




    const db = getDatabase();
    const starCountRef = ref(db, 'users/' + postId);
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data)
    });


});