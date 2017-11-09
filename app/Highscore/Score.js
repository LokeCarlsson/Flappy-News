import Store from '../stores/Store'
import config from '../../config'
import * as firebase from "firebase"

export default class Score {
  constructor() {
    init()
  }
  
  init() {
    firebase.initializeApp(config);
  }

}
