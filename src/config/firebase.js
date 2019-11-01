import * as firebase from 'firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyAv1y06QbkOnnSMQdtL3rnQVws-1385QTY",
    authDomain: "first-firebase-project-4dd47.firebaseapp.com",
    databaseURL: "https://first-firebase-project-4dd47.firebaseio.com",
    projectId: "first-firebase-project-4dd47",
    storageBucket: "first-firebase-project-4dd47.appspot.com",
    messagingSenderId: "199454732348",
    appId: "1:199454732348:web:24be8193d4b966a6bc1339",
    measurementId: "G-VF37Y0LT7J"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export const database = firebase.database();
