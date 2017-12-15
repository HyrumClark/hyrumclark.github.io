
var url = document.location.href;
var splitUrl = url.split('/');
var pageName = splitUrl[splitUrl.length - 1];

if (pageName === "franklin.html")
    {
        var page = "Franklin";
    }
if (pageName === "greenville.html")
    {
        var page = "Greenville";
    }
if (pageName === "springfield.html")
    {
        var page = "Springfield"
    }


var requestURL = 'https://byui-cit230.github.io/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townInfo = request.response;
    for (var i = 0; i < townInfo.towns.length; i++) {
        if (townInfo.towns[i].name === page) {
            document.getElementById("motto").innerHTML = townInfo.towns[i].motto;
            document.getElementById("yearFounded").innerHTML = townInfo.towns[i].yearFounded;
            document.getElementById("currentPopulation").innerHTML = townInfo.towns[i].currentPopulation;
            document.getElementById("averageRainfall").innerHTML = townInfo.towns[i].averageRainfall;
            for (var j = 0; j < townInfo.towns[i].events.length; j++) {
                var newListItem = document.createElement("li");
                newListItem.innerHTML = townInfo.towns[i].events[j];
                document.getElementById("events").append(newListItem);
            }
        }

    }
}
