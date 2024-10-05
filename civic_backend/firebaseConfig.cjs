const admin = require('firebase-admin');
const serviceAccount = require('./civic-3e95a-firebase-adminsdk-u4vwx-0e37996813.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://civic-3e95a-default-rtdb.firebaseio.com/'
});

const db = admin.firestore();
module.exports = db;
