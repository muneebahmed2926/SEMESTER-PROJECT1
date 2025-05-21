import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDSCt-26eR9PABAO1ViXUsBaIVgBjTCyAQ",
  authDomain: "odo-store.firebaseapp.com",
  databaseURL: "https://odo-store-default-rtdb.firebaseio.com/",
  projectId: "odo-store",
  storageBucket: "odo-store.appspot.com", // Fixed storageBucket format
  messagingSenderId: "41631223459",
  appId: "1:41631223459:web:42d7b74eed653c51f33916"
};

const app = initializeApp(firebaseConfig);