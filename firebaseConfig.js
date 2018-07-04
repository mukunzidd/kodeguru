// Initialize Firebase
  import firebase from 'firebase'
  import 'firebase/firestore'
  
  // firebase init goes here
  const config = {
    apiKey: 'AIzaSyA7rptAfoZ-6j7r35nXHEa8RbSxOskrzF0',
    authDomain: 'kodeguru-5b1a0.firebaseapp.com',
    databaseURL: 'https://kodeguru-5b1a0.firebaseio.com',
    projectId: 'kodeguru-5b1a0',
    storageBucket: 'kodeguru-5b1a0.appspot.com',
    messagingSenderId: '488491808627'
  }
  firebase.initializeApp(config)
  
  // firebase utils
  const db = firebase.firestore()
  const auth = firebase.auth()
  const currentUser = auth.currentUser
  
  // date issue fix according to firebase
  const settings = {
      timestampsInSnapshots: true
  }
  db.settings(settings)
  
  // firebase collections
  const usersCollection = db.collection('users')
  const postsCollection = db.collection('posts')
  const commentsCollection = db.collection('comments')
  const likesCollection = db.collection('likes')
  
  export {
      db,
      auth,
      currentUser,
      usersCollection,
      postsCollection,
      commentsCollection,
      likesCollection
  }