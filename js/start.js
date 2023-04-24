document.getElementById("play-btn").onclick = function () {
    location.href = "FirstClue.html";
};

setInterval((checkCurrentLoggedInUser = () => {
    const user = firebase.auth().currentUser;
    console.log(user);
}), 10000);