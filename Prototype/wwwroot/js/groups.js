$(document).ready(function () {
    //console.log('ready!');
    var subNav = document.getElementById('groupsNav');
    var navLinks = subNav.getElementsByClassName('nav-link');
    var tabs = document.getElementsByClassName('tabcontent');

    //console.log(tabs);
    //console.log(tabs[0]);
    //console.log(navLinks);
    //console.log(navLinks[0]);

    navLinks[0].classList.toggle('active');
    tabs[0].classList.toggle('hide');
    navLinks[0].click();
});

function showMoreContent(control) {
    var content = control.parentNode.parentNode.getElementsByClassName("content");
    var linkText = control.text.toUpperCase();

    var toggleMe = content[0];

    if (linkText === "SHOW MORE") {
        linkText = "Show less";

        toggleMe.classList.remove("hideContent");
        toggleMe.classList.add('showContent');

        console.log("Show content");
    } else {
        linkText = "Show more";
        toggleMe.classList.remove("showContent");
        toggleMe.classList.add("hideContent");
    };

    control.text = linkText;
    control.classList.add('post-ghost');
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleDropdown(control) {
    //console.log('toggling dropdown');
    document.getElementById(control).classList.toggle("show");
}

function toggleActiveTab(toggleMe, tabName) {
    var navLinks = document.getElementsByClassName('nav-link');
    var tabs = document.getElementsByClassName('tabcontent');
    var openMe = document.getElementById(tabName);

    //console.log(tabs);
    //console.log(openMe);

    for (i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('active');
    }
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('show');
        tabs[i].classList.add('hide');
    }

    toggleMe.classList.add('active');
    openMe.classList.remove('hide');
    openMe.classList.add('show');
}

function toggleGroupRelation(relType) {
    console.log(relType);

    var charInput = document.getElementById('groupCharacter');
    var fandomInput = document.getElementById('groupFandom');
    var origin = document.getElementById('groupOrigin');

    if (relType == 'char') {
        charInput.classList.remove('hide');
        fandomInput.classList.add('hide');
        origin.classList.remove('hide');
    } else if (relType == 'fandom') {
        charInput.classList.add('hide');
        fandomInput.classList.remove('hide');
        origin.classList.remove('hide');
    } else {
        charInput.classList.add('hide');
        fandomInput.classList.add('hide');
        origin.classList.add('hide');
    }
}

function toggleOrigin(addOrigin) {
    console.log(addOrigin.checked);

    var originInput = document.getElementById('originInput');
    if (addOrigin.checked == true) {
        originInput.classList.remove('hide');
    } else {
        originInput.classList.add('hide');
    }
}