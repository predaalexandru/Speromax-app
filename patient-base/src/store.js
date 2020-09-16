import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/index";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // <- needed if using firestore

import { createFirestoreInstance } from "redux-firestore"; // <- needed if using firestore

const fbConfig = {
  apiKey: "AIzaSyCH4HtUi5l_53ex7AUD2s8and6Z4PzcCT0",
  authDomain: "patient-4b2e4.firebaseapp.com",
  databaseURL: "https://patient-4b2e4.firebaseio.com",
  projectId: "patient-4b2e4",
  storageBucket: "patient-4b2e4.appspot.com",
  messagingSenderId: "846977321925",
  appId: "1:846977321925:web:8e27c3e827ecb3b47cd9ac",
  measurementId: "G-HDJ8GY21HG"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(fbConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore

const store = createStore(rootReducer, composeWithDevTools());

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default store;