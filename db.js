const admin = require('firebase-admin');
const config = require('./config');

/** 
 * example from console.firebase.google.com
 * 
 * var admin = require("firebase-admin");
 * var serviceAccount = require("path/to/serviceAccountKey.json");
 * admin.initializeApp({
 *   credential: admin.credential.cert(serviceAccount),
 *   databaseURL: "https://my-database-url.firebaseio.com",
 * });
*/

const firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(config.serviceAccountKey),
    databaseURL: config.database_url
});

module.exports = firebaseApp;