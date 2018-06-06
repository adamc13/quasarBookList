import firebase from 'firebase'
import Vue from 'vue'
import VueFire from 'vuefire'

const config = {
    apiKey: "AIzaSyAR_ZFK9Ck0OZcL404Lyonu-2zVPLb9QdE",
    authDomain: "vuejs-firebase-booklist.firebaseapp.com",
    databaseURL: "https://vuejs-firebase-booklist.firebaseio.com",
    projectId: "vuejs-firebase-booklist",
    storageBucket: "vuejs-firebase-booklist.appspot.com",
    messagingSenderId: "222937484301"
}

const fireapp = firebase.initializeApp(config)
const db = fireapp.database();
const bookref = db.ref('books');

export default ({ app, router, store, Vue }) => {
  Vue.use(VueFire)
  Vue.prototype.$firebase = firebase
}

export { bookref }
