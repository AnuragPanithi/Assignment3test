import firebase from "firebase/app"; 
import "firebase/firestore"; 

 
 

const firebaseConfig = { 

  apiKey: 'AIzaSyC7DcVh_fNYWPQ4M7yQMR5T0dZLQOYlbSM', 

  authDomain: 'smy-subscriptions-858f6.firebaseapp.com', 

  projectId: 'my-subscriptions-858f6', 

  storageBucket: 'my-subscriptions-858f6.appspot.com', 

  messagingSenderId: '862007994329', 

  appId: '1:862007994329:web:37aeb66186d794f57c1bc8' 

} 
 

const db = firebase.initializeApp(firebaseConfig); 
export default db.firestore(); 