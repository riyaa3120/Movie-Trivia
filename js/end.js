let btn = document.getElementById('claimBtn');
btn.onclick = function () {
    document.querySelector('img').src = 'https://webstockreview.net/images/clipart-png-trophy-3.png';

    setTimeout(function () {
        firebase.auth().signOut().then(() => {
            alert('Arigato, See you until next time');
        }).catch((error) => {

        });
    }, 5000);
}