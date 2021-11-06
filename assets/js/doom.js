var heroEl = document.querySelector(".hero");
var descriptionEl = document.querySelector(".description");


var displayDoomInfo = function(doom) {

    // hero image
    var image = doom.data.results[0].thumbnail.path + ".jpg";
    var imageEl = document.createElement("img");
    imageEl.setAttribute("src", image);
    heroEl.appendChild(imageEl);

    // hero data

    var info = doom.data.results[0].urls[0].url;
    var infoEl = document.createElement("a");
    infoEl.setAttribute("href" , info)
    infoEl.classList = "info";
    infoEl.textContent = "Doom Info";
    descriptionEl.appendChild(infoEl);


}

var getDoomData = function() {
    var apiUrl = "https://gateway.marvel.com:443/v1/public/characters/1009281?apikey=4d2e0c623d661843745081ec1b70a4bb";
    
    fetch(apiUrl).then(function(response) {
        if(response.ok) {
        response.json().then(function(data) {
            console.log(data); 
            displayDoomInfo(data);          
        });
        } else {
            console.log("Try Again, Dummy");
        }
    });
}

getDoomData();