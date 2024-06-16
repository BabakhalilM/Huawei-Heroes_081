// // import { initializeApp } from "firebase/app";
// // import { getAuth } from "firebase/auth";


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";

// // import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification } from "firebase/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDdiwJZ-jK2Ju1YjeWKxDIoofO8BHhVllY",
//   authDomain: "huawei-heroes081.firebaseapp.com",
//   databaseURL: "https://huawei-heroes081-default-rtdb.firebaseio.com",
//   projectId: "huawei-heroes081",
//   storageBucket: "huawei-heroes081.appspot.com",
//   messagingSenderId: "457276554402",
//   appId: "1:457276554402:web:84df22529b2efe96702bfb"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database=getDatabase(app);
// const auth=getAuth();



// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDdiwJZ-jK2Ju1YjeWKxDIoofO8BHhVllY",
  authDomain: "huawei-heroes081.firebaseapp.com",
  databaseURL: "https://huawei-heroes081-default-rtdb.firebaseio.com",
  projectId: "huawei-heroes081",
  storageBucket: "huawei-heroes081.appspot.com",
  messagingSenderId: "457276554402",
  appId: "1:457276554402:web:84df22529b2efe96702bfb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
