// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAcfaBfmuxiGrbleUrFIuxaP2arIIa655c",
  authDomain: "login-page-2c932.firebaseapp.com",
  projectId: "login-page-2c932",
  storageBucket: "login-page-2c932.appspot.com",
  messagingSenderId: "542676803616",
  appId: "1:542676803616:web:b0dba4213a065d3fe9dc45",
  measurementId: "G-73M8Q0ZJH5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const singup_email = document.getElementById("singup_email");
const singup_pwd = document.getElementById("singup_pwd");
const singup_btn = document.getElementById("singup_btn");

const singin_email = document.getElementById("singin_email");
const singin_pwd = document.getElementById("singin_pwd");
const singin_btn = document.getElementById("singin_btn");

const auth_container = document.getElementById("auth_container");
const user_container = document.getElementById("user_container");
const logout = document.getElementById("logout");

singup_btn.addEventListener("click", createUserAccount);
singin_btn.addEventListener("click", Singin);
logout.addEventListener("click", SingOut_out);
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    auth_container.style.display = "none";
    user_container.style.display = "block";
  } else {
    auth_container.style.display = "block";
    user_container.style.display = "none";
  }
});

function createUserAccount() {
  //    console.log("email>", singup_email.value);
  //    console.log("email>", singup_pwd.value);
  createUserWithEmailAndPassword(auth, singup_email.value, singup_pwd.value)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("user", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

function Singin() {
  signInWithEmailAndPassword(auth, singin_email.value, singin_pwd.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      console.log("user", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

function SingOut_out() {
  signOut(auth)
    .then(() => {})
    .catch((error) => {});
}
