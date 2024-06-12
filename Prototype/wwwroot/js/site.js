// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    //console.log('DocumentReady');
    var setActiveTab = localStorage.getItem('activeTab');

    if (setActiveTab != null) {
        setActiveTab = document.getElementById(setActiveTab);       
    } 

    try {
        setActiveTab.click();
    } catch (e) {
        localStorage.removeItem('activeTab');

        var subNav = document.getElementById('groupsNav');
        var navLinks = subNav.getElementsByClassName('nav-link');
        var tabs = document.getElementsByClassName('tabcontent');
        navLinks[0].classList.toggle('active');
        tabs[0].classList.toggle('hide');
        navLinks[0].click();
    }

    scrollToBottom();
})

function setActiveTab(tabId) {
    localStorage.setItem('activeTab', tabId);
}