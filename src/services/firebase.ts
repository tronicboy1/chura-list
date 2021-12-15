import { initializeApp } from "firebase/app";

//wev application config stored in firebase project settings
const firebaseConfig = {
  apiKey: "AIzaSyA739qPqWb7VONGDCMcXuiecxrc403Rgwo",
  authDomain: "chura-list.firebaseapp.com",
  databaseURL: "https://chura-list-default-rtdb.firebaseio.com",
  projectId: "chura-list",
  storageBucket: "chura-list.appspot.com",
  messagingSenderId: "246414541051",
  appId: "1:246414541051:web:f8ec4d75b9fe1efa29b05e"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;