import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  getDatabase,
  ref,
  // push,
  set,
  onValue,
  query,
  remove,
  update,
  child,
  get,
} from "firebase/database";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { successNote, toastLogout } from "../utils/Toast";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSENGER_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const db = getFirestore(app);

console.log(auth);

export const userStateChecker = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      // User is signed out
      setCurrentUser(false);
    }
  });
};

//! sign up with google from documentation
export const signUpWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

//! logout
export const logOut = () => {
  signOut(auth);
  toastLogout("Logout completed.");
};

//! Creating New User (Register)
export const createUser = async (email, password, displayName) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: displayName });
  } catch (error) {
    console.log(error);
  }
};

//!Sign in with email and password
export const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};

//! WRITE
export const writeUserData = (userId, addCard) => {
  const db = getDatabase(app);

  set(ref(db, "blog/" + userId), addCard);
};

//! ******* READ DATA *******
export const useFetch = () => {
  const [cards, setCards] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);

    const db = getDatabase();
    const userRef = ref(db, "blog");

    onValue(query(userRef), (snapshot) => {
      const cards = snapshot.val();

      // send an array of the values in database
      // const cardsArray = Object.values(cards);
      const cardsArray = [];
      for (let id in cards) {
        cardsArray.push({ id, ...cards[id] });
      }

      setCards(cardsArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, cards };
};

//! ******* DELETE DATA *******

export const deleteCard = (id) => {
  const db = getDatabase();
  // const userRef = ref(db, 'contact');
  remove(ref(db, "blog/" + id));
  successNote("Deleted");
};

//************************************ */
//! ******* UPDATE DATA *******

export const getDataForUpdate = (id, setUpdate) => {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `blog/${id}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        setUpdate(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export const updateCard = (id, title, image, text, email, date) => {
  const db = getDatabase();
  // A post entry.
  const postData = {
    id: id,
    title: title,
    image: image,
    text: text,
    email: email,
    date: date,
  };
  // const newPostKey = push(child(ref(db), "blogs")).key;
  const updates = {};
  updates["blog/" + id] = postData;
  // updates["/user-blogs/" + id + "/" + newPostKey] = postData;

  return update(ref(db), updates);
};

// export const updateCard = (card) => {
//   const db = getDatabase();
//   const newUserKey = push(child(ref(db), "cards/")).key;
//   const updates = {};
//   updates["cards/" + newUserKey] = card;
//   return update(ref(db), updates);
// };
