// Configuration Firebase auto-générée par DEVWEBIA
const firebaseConfig = {
  apiKey: "AIzaSyAmo7pHIas2xuu05px8UvN_9m3J7XY_G4M",
  authDomain: "gen-lang-client-0592969130.firebaseapp.com",
  projectId: "gen-lang-client-0592969130",
  storageBucket: "gen-lang-client-0592969130.firebasestorage.app",
  appId: "1:327917182728:web:ef8d364929afc7bc35d6bd"
};
if (typeof firebase !== 'undefined' && firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
  window.db = firebase.firestore();
  window.auth = firebase.auth();
}
