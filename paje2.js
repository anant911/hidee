var firebaseConfig = {
    apiKey: "AIzaSyBaaSwIbM6Aw97ZVG5bHTAMBUWYdD7V1UI",
    authDomain: "kwitter-project-3a2b1.firebaseapp.com",
    databaseURL: "https://kwitter-project-3a2b1-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-3a2b1",
    storageBucket: "kwitter-project-3a2b1.appspot.com",
    messagingSenderId: "596107119488",
    appId: "1:596107119488:web:a573bf6c9936d539394f65"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function logout()
  {
    window.location="index.html";
  }