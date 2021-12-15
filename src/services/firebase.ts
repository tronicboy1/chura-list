import { initializeApp } from "firebase/app";

//wev application config stored in firebase project settings
const firebaseConfig = {
  apiKey: "AIzaSyDVjTIij66ymVwznxveDF_PmzfSf4Bz35g",
  authDomain: "list-app-practice.firebaseapp.com",
  projectId: "list-app-practice",
  storageBucket: "list-app-practice.appspot.com",
  messagingSenderId: "171407132733",
  appId: "1:171407132733:web:737da3c77e997add09c254"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;