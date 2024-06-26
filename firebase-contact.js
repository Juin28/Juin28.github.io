// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, addDoc } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  authDomain: "personal-portfolio-a562d.firebaseapp.com",
  projectId: "personal-portfolio-a562d",
  storageBucket: "personal-portfolio-a562d.appspot.com",
  messagingSenderId: "1068927416639",
  appId: "1:1068927416639:web:484c63030e634b93ecbb8a",
  measurementId: "G-QJLFK4EPF6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

// Get the "contact" collection reference
const contactCollection = collection(db, "contact");

// Function to add the contact information to Firebase
async function addContactInfo(name, email, message) {
    try {
        const newContact = {
            name: name,
            email: email,
            message: message,
            createdAt: new Date()
        }
        await addDoc(contactCollection, newContact);
        console.log("Contact information added successfully!");
    } catch (error) {
        console.error("Error adding contact information: ", error);
  }
}

// Export the addContactInfo function for use in other modules
export { addContactInfo };