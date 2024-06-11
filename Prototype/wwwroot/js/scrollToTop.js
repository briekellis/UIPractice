// Get the button
//let mybutton = document.getElementById("myBtn");
//let postContainer = document.getElementById('postContainer');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction(control) {
    var scroller = document.getElementById(control);
    var myBtns = document.getElementsByClassName("myBtn");

    if (scroller.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        for (var i = 0; i < myBtns.length; i++) {
            myBtns[i].style.display = "block";
        }
    } else {
        for (var i = 0; i < myBtns.length; i++) {
            myBtns[i].style.display = "none";
        }
    }

    var feedFilters = document.getElementById('feedFilters');
    var groupFilters = document.getElementById('groupsFilters');
    feedFilters.classList.remove('show');
    groupFilters.classList.remove('show');
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    var scrollers = document.getElementsByClassName('scroll-container');
    for (var i = 0; i < scrollers.length; i++) {
        scrollers[i].scrollTop = 0;
    }
}

function scrollThroughChat(control) {
    var scroller = document.getElementById(control);
    var myBtns = document.getElementsByClassName("scrollBottom");
    var bottom = scroller.scrollHeight / 2;

    if (scroller.scrollTop < bottom) {
        for (var i = 0; i < myBtns.length; i++) {
            myBtns[i].style.display = "block";
        }
    } else {
        for (var i = 0; i < myBtns.length; i++) {
            myBtns[i].style.display = "none";
        }
    }
}

function animateScroll(duration) {
    var scrollableDiv = document.
        getElementById('chatMessages');

    var start = scrollableDiv.scrollTop;
    var end = scrollableDiv.scrollHeight;
    var change = end - start;
    var increment = 20;

    function easeInOut(currentTime, start, change, duration) {
        // by Robert Penner
        currentTime /= duration / 2;
        if (currentTime < 1) {
            return change / 2 * currentTime * currentTime + start;
        }
        currentTime -= 1;
        return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
    }

    function animate(elapsedTime) {
        elapsedTime += increment;
        var position = easeInOut(elapsedTime, start, change, duration);
        scrollableDiv.scrollTop = position;
        if (elapsedTime < duration) {
            setTimeout(function () {
                animate(elapsedTime);
            }, increment)
        }
    }
    animate(0);
}

function scrollToBottom() {
    var duration = 300 // Or however many milliseconds you want to scroll to last
    animateScroll(duration);
}