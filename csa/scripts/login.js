var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("user").value;
    var password = document.getElementById("psw").value;
    if (username == "bradrocks4lyfe" && password == "IluvBrad42")  {
        alert("Login successfully");
        window.location = "ws-success.html"; // Redirecting to other page.
        return false;
    } 
    else if(username == "amysspecialsox" && password == "DontTouchMySox") {
        alert("Login successfully");
        window.location = "ws-success.html"; // Redirecting to other page.
        return false;
    } 
    else if(username == "forgetfulfreddy" && password == "forGot#123") {
        alert("Login successfully");
        window.location = "ws-success.html"; // Redirecting to other page.
        return false;
    } 
    else if(username == "james007bond" && password == "BondJamesBond") {
        alert("Login successfully");
        window.location = "ws-success.html"; // Redirecting to other page.
        return false;
    } 
    else if(username == "skywalkerl" && password == "ThatsImpossible") {
        alert("Login successfully");
        window.location = "ws-success.html"; // Redirecting to other page.
        return false;
    } 
    else {
        attempt--; // Decrementing by one.
        alert("You have " + attempt + " attempts left");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            alert("You failed this activity")
            return false;
        }
    }
}