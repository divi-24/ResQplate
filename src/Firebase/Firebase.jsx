import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";




const firebaseConfig = {
  apiKey: "AIzaSyCJzrd4RcbAM9mNMtqyuDoaMVwKK_ZA5PY",
  authDomain: "buckettalk-ff0b3.firebaseapp.com",
  projectId: "buckettalk-ff0b3",
  storageBucket: "buckettalk-ff0b3.appspot.com",
  messagingSenderId: "811070514736",
  appId: "1:811070514736:web:dd95897d6990af19efeff5",
  measurementId: "G-QEP0T4CFEF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { db, auth, storage, app };