
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA5qB3FRvOgxDPddGld5hd_eRTjn2-K9_8",
  authDomain: "career-hub-8fb7d.firebaseapp.com",
  projectId: "career-hub-8fb7d",
  storageBucket: "career-hub-8fb7d.appspot.com",
  messagingSenderId: "735282349448",
  appId: "1:735282349448:web:1376b3760a42fedf70663d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth