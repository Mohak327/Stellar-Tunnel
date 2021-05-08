var counter = 5;
setInterval(function( {
    counter--;

    if (counter >= 0 ) {
        id = document.getElementById('count');
        id.innerHTML = counter;
    }

    if (counter === 0) {
        // Load the next page with a fade transition.
    }

}, 1000);