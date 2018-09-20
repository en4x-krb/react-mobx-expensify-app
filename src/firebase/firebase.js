import * as firebase from 'firebase';

  // Initialize Firebase
   const config = {
    apiKey: "AIzaSyD1Jv5_eEbt6x-3RFbj2jG1z29NtY8dXeg",
    authDomain: "expensify-470ad.firebaseapp.com",
    databaseURL: "https://expensify-470ad.firebaseio.com",
    projectId: "expensify-470ad",
    storageBucket: "",
    messagingSenderId: "1087364895047"
  };
  firebase.initializeApp(config);

  firebase.database().ref().set({
      name: 'Enax'
  });