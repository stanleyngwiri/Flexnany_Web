// Initialize Cloud Firestore through Firebase
var config = {
  apiKey: "AIzaSyAZGqTcall-32g-qZ8KAwNLqowPC9ivmHA",
  authDomain: "flexnany-760f6.firebaseapp.com",
  databaseURL: "https://flexnany-760f6.firebaseio.com",
  projectId: "flexnany-760f6",
  storageBucket: "",
  messagingSenderId: "621902316073"
};
firebase.initializeApp(config);

var db = firebase.firestore();


function storeData() {

  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var phone_no = document.getElementById("phone_no").value;
  var location = document.getElementById("location").value;
  var ratings = document.getElementById("ratings").value;
  var description = document.getElementById("description").value;

  // Add a new document in collection "cities"
  db.collection("Maids").doc().set({
      firstname: firstname,
      lastname: lastname,
      phone_no: phone_no,
      location: location,
      ratings: ratings,
      description: description
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
}
