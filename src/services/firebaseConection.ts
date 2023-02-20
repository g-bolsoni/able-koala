import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBWINcA_fcAM7Tn1eMkqFxPB3Z-RJfL4OM",
  authDomain: "ablekoala.firebaseapp.com",
  projectId: "ablekoala",
  storageBucket: "ablekoala.appspot.com",
  messagingSenderId: "349815331317",
  appId: "1:349815331317:web:fe206ecf1e7b026b91a8bc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);