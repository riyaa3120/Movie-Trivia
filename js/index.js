document.querySelector('a').onclick = function () {
    window.location.href = 'signup.html';
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

// Listen for form submit
document.querySelector('button').addEventListener('click', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();
    var email = document.getElementById('email').value.toString().trim();
    var password = document.getElementById('password').value.toString().trim();

    if (email == 'admin@admin.com') {
        if (password == 'admin1234') {
            window.location.href = 'admin.html';
        } else {
            alert('wrong password');
        }
        return;
    }
    // create user
    loginUser(email, password);
}


// Save message to firebase
function loginUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;

            // Clear form
            document.getElementById('contactForm').reset();

            window.location.href = 'start.html';
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode, errorMessage);
        });
}