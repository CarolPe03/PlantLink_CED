import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyDvX56M6mn9gm4Gn452xYQXYlXqdAmwfgA",
    authDomain: "prueba-39372.firebaseapp.com",
    projectId: "prueba-39372",
    storageBucket: "prueba-39372.appspot.com",
    messagingSenderId: "615199865097",
    appId: "1:615199865097:web:20912e24f3085f989a7bd8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)