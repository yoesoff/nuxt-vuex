import * as firebase from 'firebase';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCPjJp73f_nXovdTI3jtlZuDpREoWq4o60",
    authDomain: "nuxttodoapp-49a0f.firebaseapp.com",
    databaseURL: "https://nuxttodoapp-49a0f.firebaseio.com",
    projectId: "nuxttodoapp-49a0f",
    storageBucket: "nuxttodoapp-49a0f.appspot.com",
    messagingSenderId: "991788960104",
    appId: "1:991788960104:web:b8847809c5a519f1d2aedd",
    measurementId: "G-RH7GD67EQS"
};

if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
}

//firebase.analytics();
