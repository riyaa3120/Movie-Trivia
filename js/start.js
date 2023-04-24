document.getElementById("play-btn").onclick = function () {
    location.href = "firstClue.html";
};

setInterval((checkCurrentLoggedInUser = () => {
    const user = firebase.auth().currentUser;
    console.log(user);
}), 10000);
