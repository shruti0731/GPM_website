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
var contactformDB = firebase.database().ref('grevform');

document.getElementById('grevienceform').addEventListener('submit',submitform);


function submitform(e)
{
  e.preventDefault();

  var name= getElementVal('name');
  var roll=getElementVal('roll')
  var email=getElementVal('email');
  var complaint=getElementVal('grievance');

   saveMessages(name,roll,email,complaint);

   //reset the form
   document.getElementById('grevienceform').reset();
}


const saveMessages = (name,roll,email,complaint) => {
var newContactform = contactformDB.push();

  newContactform.set({
      name : name,
      roll : roll,
      email : email,
      complaint : complaint
  })
};


const getElementVal = (id) => {
  return document.getElementById(id).value;
};