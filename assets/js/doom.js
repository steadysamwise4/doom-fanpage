var heroEl = document.querySelector(".hero");
var descriptionEl = document.querySelector(".description");
var comicListEl = document.querySelector(".comic-list");

var displayDoomInfo = function(doom) {

    // hero image
    var image = doom.data.results[0].thumbnail.path + ".jpg";
    var imageEl = document.createElement("img");
    imageEl.setAttribute("src", image);
    heroEl.appendChild(imageEl);

    // hero data

    var info = doom.data.results[0].description;
    var infoEl = document.createElement("p");
    
    infoEl.classList = "info";
    infoEl.textContent = info;
    descriptionEl.appendChild(infoEl);


}

var displayDoomComics = function(comicData) {
    var DoomComicsArr = comicData.data.results;
    
    let title = "";

    
    for (let i = 0; i < DoomComicsArr.length; i++) {
        title = DoomComicsArr[i].title;
        var img = DoomComicsArr[i].thumbnail.path + "/portrait_xlarge.jpg";
        var imgEl = document.createElement("img");
        imgEl.setAttribute("src", img);
        var listItemEl = document.createElement("li");
        listItemEl.textContent = title;
        listItemEl.classList = "list";
        // console.log(title);
        comicListEl.appendChild(imgEl);
        comicListEl.appendChild(listItemEl);

        
      }
      
    //console.log(DoomComicsArr);
}


var getDoomComics = function() {
    var comicUrl = "https://gateway.marvel.com:443/v1/public/characters/1009281/comics?format=comic&formatType=comic&noVariants=true&dateRange=1962-01-01%2C1990-01-02&orderBy=onsaleDate&limit=100&apikey=4d2e0c623d661843745081ec1b70a4bb";

    fetch(comicUrl).then(function(response) {
        if(response.ok) {
        response.json().then(function(comics) {
            console.log(comics); 
            displayDoomComics(comics);          
        });
        } else {
            console.log("Try Again, Dummy");
        }
    });
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
getDoomComics();