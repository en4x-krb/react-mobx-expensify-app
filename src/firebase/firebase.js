import * as firebase from 'firebase';
// import firebase from 'firebase/app';


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

const database = firebase.database;
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// firebase.database().ref('expenses').push({
//   note: 'Bough Pen',
//   description: 'Bought the best pen ever',
//   amount: 1000,
//   createdAt: Date.now()
// }).then(() => {
//   console.log('Data1 Saved');
// }).catch(() => {
//   console.log('Data1 failed to save');
// });

// firebase.database().ref('expenses').push({
//   note: 'Bough Water Bottle',
//   description: 'Bought the best water bottle ever',
//   amount: 1000,
//   createdAt: Date.now()
// }).then(() => {
//   console.log('Data2 Saved');
// }).catch(() => {
//   console.log('Data2 failed to save');
// });

// firebase.database().ref('expenses').push({
//   note: 'Bough Stuffs',
//   description: 'Bought the best stuffs ever',
//   amount: 1000,
//   createdAt: Date.now()
// }).then(() => {
//   console.log('Data3 Saved');
// }).catch(() => {
//   console.log('Data3 failed to save');
// });

// firebase.database().ref('expenses').push({
//   note: 'Bought Aaloo',
//   description: 'Bought the best aaloo ever',
//   amount: 1000,
//   createdAt: Date.now()
// }).then(() => {
//   console.log('Data4 Saved');
// }).catch(() => {
//   console.log('Data4 failed to save');
// });
//.remove()
//.update({
// "location/city"
// })
//.once() - fetch all of the data at once, snapshot.val();
// .on('value', cb(snapshot), errorCb) - returns the cb, can be passed to the off
// .off() - unsubscribe
//.push({})

// firebase.database().ref('expenses').once('value').then((snapshot) => {
// 	let expenses = [];
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});
// 	console.log(expenses);
// });

// firebase.database().ref('expenses').on('value', (snapshot) => {
// 	let expenses = [];
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});
// 	console.log(expenses);
// });

//on child_removed, child_changed, child_added