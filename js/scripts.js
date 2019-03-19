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


function storeData() {
  // Add a new document in collection "cities"
  db.collection("cities").doc("LA").set({
      name: "Los Angeles",
      state: "CA",
      country: "USA"
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
}
