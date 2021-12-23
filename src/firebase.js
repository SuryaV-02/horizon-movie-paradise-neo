
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
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

const auth = getAuth(app)

// connectAuthEmulator(auth, "http://localhost:1234")


async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

function login_emailAndPassword() {
  var email = document.getElementById("login_email").value
  var password = document.getElementById("login_password").value
  alert(email + password)

  const userCred = signInWithEmailAndPassword(auth,email,password);
  console.log(userCred.user);
}

alert("Firebase Loaded")