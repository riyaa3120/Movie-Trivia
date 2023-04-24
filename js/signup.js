document.querySelector('a').onclick = function () {
    window.location.href = 'index.html';
}

const firebaseConfig = {
    apiKey: "AIzaSyAoB4INfTwN5g7gfx8653Y2x7H5_bFRxlI",
    authDomain: "ela-17-4-23.firebaseapp.com",
    databaseURL: "https://ela-17-4-23-default-rtdb.firebaseio.com",
    projectId: "ela-17-4-23",
    storageBucket: "ela-17-4-23.appspot.com",
    messagingSenderId: "1085188779486",
    appId: "1:1085188779486:web:1e94acd8f29ffa5ab7814f",
    measurementId: "G-CMZK01WMD1"
};
firebase.initializeApp(firebaseConfig);

// Reference credentials collection
var credRef = firebase.database().ref('credentials');

console.log('ref created');
// Listen for form submit
document.querySelector('button').addEventListener('click', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var name = document.getElementById('name').value;
    console.log('data fetched...save message called');

    // create user
    createUser(email, password, name);
}


// Save message to firebase
function createUser(email, password, name) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;

            // Show alert
            document.querySelector('.alert').style.display = 'block';

            // Hide alert after 3 seconds
            setTimeout(function () {
                document.querySelector('.alert').style.display = 'none';
            }, 5000);

            // Clear form
            document.getElementById('contactForm').reset();

            //upload credentials
            var newMessageRef = credRef.push();
            newMessageRef.set({
                email: email,
                password: password
            });

            //upload name and email
            uploadData(email, name);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode, errorMessage);
        });
}


function uploadData(email, name) {
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
            var uid = user.uid;
            await firebase.database().ref('data/' + uid).set({
                name: name,
                email: email
            })

        } else {
            alert('data not uploaded');
        }
    });
}