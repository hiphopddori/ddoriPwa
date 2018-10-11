import Firebase from 'firebase'

var config = {
    apiKey:'testKey'
    ,authDomain:'ddoripwa.firebaseapp.com'
    ,databaseURL:'https://ddoripwa.firebaseio.com'
    ,storageBucket:'ddoripwa.appspot.com'
    ,messagingSdederId:'             '  //초기화 코드

}

let app = Firebase.initializeApp(config)

export const fb = app.database();