import Store from '../stores/Store'
import config from '../../config'
import * as firebase from "firebase"

export default class Score {

  constructor() {
    this.firebase = firebase.initializeApp(config, 'flappy-news')
    this.db = this.firebase.database()
    this.read()
  }
  

  save() {
    this.db.ref('users/' + (Math.floor(Math.random() * 6) + 1)).set({
      username: 'Loke',
      score: 2500
    })
  }

  read() {
    this.db.ref('users/12').once('value').then(payload => {
      console.log(payload)
    })
  }

}
