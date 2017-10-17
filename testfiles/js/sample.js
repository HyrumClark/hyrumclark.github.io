alert("You are entering the test page for Hyrum Clark. You may find that this page is not complete or has a lot of weird stuff going on. Continue at your own risk.");

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
