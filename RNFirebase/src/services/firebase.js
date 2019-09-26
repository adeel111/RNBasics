import * as firebase from "firebase";
import config from "./firebase-config";

let instance = null;
class FirebaseService {
  constructor() {
    if (!instance) {
      this.app = firebase.initializeApp(config);
      instance = this;
    }
    return instance;
  }
}
const firebaseService = new FirebaseService().app;
export default firebaseService;
