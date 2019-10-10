import firebase from 'react-native-firebase';


var firebaseConfig = {
    apiKey: "AIzaSyAVWfES01X_8476HhoIW3BUpnVjDufvG5w",
    authDomain: "devsapp-a86dd.firebaseapp.com",
    databaseURL: "https://devsapp-a86dd.firebaseio.com",
    projectId: "devsapp-a86dd",
    storageBucket: "",
    messagingSenderId: "211471650459",
    appId: "1:211471650459:web:1060b05701dd23ccd1c03e"
};

firebase.initializeApp(firebaseConfig);

export default firebase