var heroEl = document.querySelector(".hero");
var descriptionEl = document.querySelector(".description");
var comicListEl = document.querySelector(".comic-list");
var marvelEl = document.querySelector(".marvel");
var coverEl = document.querySelector(".cover")
var backdropEl = document.querySelector(".backdrop")
var modalEl = document.querySelector(".modal");

// characters
var doctorDoomId = "1009281";
var wolverineId = "1009718";
var cableId = "1009214";

var displayDoomInfo = function(doom) {

    // hero image
    var image = doom.data.results[0].thumbnail.path + ".jpg";
    var imageEl = document.createElement("img");
    imageEl.setAttribute("src", image);
    imageEl.classList = "responsive";
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
    
         // backdrop and modal
         var backdrop = document.createElement('div');
         backdrop.classList = "backdrop"
         backdrop.setAttribute("data-number", 102)
         var modal = document.createElement('div');
         modal.classList = "modal"
    
         
         
    
    
         comicListEl.appendChild(backdrop);
         comicListEl.appendChild(modal);

    let comicTitle = "";

    
    for (let i = 0; i < DoomComicsArr.length; i++) {

    
       


        // title and cover image
        comicTitle = DoomComicsArr[i].title;
        var img = DoomComicsArr[i].thumbnail.path + "/portrait_xlarge.jpg";
        var imgEl = document.createElement("img");
        imgEl.setAttribute("src", img);
        imgEl.classList = "cover";
        imgEl.setAttribute("data-number", i);
        
        var listItemEl = document.createElement("li");
        listItemEl.textContent = comicTitle;
        listItemEl.classList = "list";
        listItemEl.setAttribute("data-number", i);
        // console.log(title);
        comicListEl.appendChild(imgEl);
        comicListEl.appendChild(listItemEl);


        
      }
      var buttonClickHandler = function(event) {
          
        var issue = event.target.getAttribute("data-number");
        if (issue <= 100) {
        console.log(issue);
        var heading = DoomComicsArr[issue].title; 
         var headingEl = document.createElement('h3')
         headingEl.classList = "modal-head";
         headingEl.textContent = heading;
         modal.appendChild(headingEl);

         // creator credits
         var creatorsArr = DoomComicsArr[issue].creators.items;
         for (var a = 0; a <= creatorsArr.length; a++) {
        var role = creatorsArr[a].role;
        var name = creatorsArr[a].name;
        console.log(role + ": " + name);

         
         displayComicModal();
         }
         // headingEl.textContent = "";
    } else {
        console.log(issue);
        }
    }
    
    var displayComicModal = function() {
        

        backdrop.style.display = "flex";
        
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
    }
    
    var closeComicModal = function() {
        modal.textContent = "";
        backdrop.style.display = "none";
        console.log("Close");
        modal.style.display = "none";
    }
    
    // imgEl.onclick = displayComicModal;
    // listItemEl.onclick = displayComicModal;
    // backdrop.onclick = closeComicModal;
    comicListEl.addEventListener('click', buttonClickHandler);
    backdrop.addEventListener('click', closeComicModal);
    //console.log(DoomComicsArr);
}




var getDoomComics = function(id) {
    var comicUrl = "https://gateway.marvel.com:443/v1/public/characters/" + id + "/comics?format=comic&formatType=comic&noVariants=true&dateRange=1962-01-01%2C2021-11-02&orderBy=onsaleDate&limit=100&apikey=4d2e0c623d661843745081ec1b70a4bb";

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
var getDoomData = function(id) {
    var apiUrl = "https://gateway.marvel.com:443/v1/public/characters/" + id + "?apikey=4d2e0c623d661843745081ec1b70a4bb";
    
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

