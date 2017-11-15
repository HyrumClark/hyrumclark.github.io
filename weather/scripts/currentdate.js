function getDateFunc(){
    var now = new Date();
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }
    var d = now.toLocaleString('en-us', options);
    document.getElementById("getDate").innerHTML = d;
}
