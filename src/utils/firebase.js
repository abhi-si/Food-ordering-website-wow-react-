// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAByr1uKEe2sBa_4jpFWmZTVsUhFpI_iEU",
  authDomain: "get-food-6c1a5.firebaseapp.com",
  projectId: "get-food-6c1a5",
  storageBucket: "get-food-6c1a5.appspot.com",
  messagingSenderId: "600718409288",
  appId: "1:600718409288:web:81e7fd029728e17fcaa27d",
  measurementId: "G-6569847YEM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
