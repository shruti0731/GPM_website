const firebaseConfig = {
    apiKey: "AIzaSyAPzlO1EMrBX5DhqYWJPTKuP7aK71T9Isg",
    authDomain: "contactform-307e0.firebaseapp.com",
    databaseURL: "https://contactform-307e0-default-rtdb.firebaseio.com",
    projectId: "contactform-307e0",
    storageBucket: "contactform-307e0.appspot.com",
    messagingSenderId: "220820791896",
    appId: "1:220820791896:web:d06dca8ed0c64d6feda02d"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference for database
  var contactformDB = firebase.database().ref('contactform');

  document.getElementById('contactform').addEventListener('submit',submitform);
  
  
  function submitform(e)
  {
    e.preventDefault();

    var name= getElementVal('name');
    var email=getElementVal('email');
    var msg=getElementVal('message');

     saveMessages(name,email,msg);

     //reset the form
     document.getElementById('contactform').reset();
  }


  const saveMessages = (name,email,msg) => {
  var newContactform = contactformDB.push();

    newContactform.set({
        name : name,
        email : email,
        msg : msg
    })
  };

  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };