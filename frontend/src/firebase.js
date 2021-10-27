import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCQcfiCVqa3xqHO_r8lPbBndtIpxFfG3-8",
    authDomain: "netflix-clone-263bf.firebaseapp.com",
    projectId: "netflix-clone-263bf",
    storageBucket: "netflix-clone-263bf.appspot.com",
    messagingSenderId: "629811325496",
    appId: "1:629811325496:web:4a654cc3c90711122c54cd",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
