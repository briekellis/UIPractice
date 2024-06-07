// Get the button
let mybutton = document.getElementById("myBtn");
let postContainer = document.getElementById('postContainer');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction(control) {
    var scroller = document.getElementById(control);

    if (scroller.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    postContainer.scrollTop = 0;
}