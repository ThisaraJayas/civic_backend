const admin = require('firebase-admin');
const serviceAccount = require('./service.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://civic-3e95a-default-rtdb.firebaseio.com/'
});

const db = admin.firestore();
module.exports = db;
