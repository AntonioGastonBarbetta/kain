import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCArCpZEu-AzPODfAvlN_kGvMP1h2Bpyzg",
    authDomain: "kain-1522253744997.firebaseapp.com",
    databaseURL: "https://kain-1522253744997.firebaseio.com",
    projectId: "kain-1522253744997",
    storageBucket: "kain-1522253744997.appspot.com",
    messagingSenderId: "1033011370592"
  };

firebase.initializeApp(config);

export default firebase