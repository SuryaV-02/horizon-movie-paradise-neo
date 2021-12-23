// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDzDw41g4SAnlezbqmHv10UCZ5WCNvCSko",
//   authDomain: "horizon-movie-paradise.firebaseapp.com",
//   projectId: "horizon-movie-paradise",
//   storageBucket: "horizon-movie-paradise.appspot.com",
//   messagingSenderId: "616871031243",
//   appId: "1:616871031243:web:dd6381ed7c9fc0aa8c464e",
//   measurementId: "G-QLWX35VPF1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const auth = getAuth(app);

// onAuthStateChanged(auth,user=>{
//     if(user != null){
//         console.log("Logged in from FB");
//     }else{
//         console.log("No user from FB");
//     }
// })

alert("Loading firebase")

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzDw41g4SAnlezbqmHv10UCZ5WCNvCSko",
  authDomain: "horizon-movie-paradise.firebaseapp.com",
  databaseURL: "https://horizon-movie-paradise-default-rtdb.firebaseio.com",
  projectId: "horizon-movie-paradise",
  storageBucket: "horizon-movie-paradise.appspot.com",
  messagingSenderId: "616871031243",
  appId: "1:616871031243:web:dd6381ed7c9fc0aa8c464e",
  measurementId: "G-QLWX35VPF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);