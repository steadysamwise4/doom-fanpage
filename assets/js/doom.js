var getDoomData = function() {
    var apiUrl = "https://gateway.marvel.com:443/v1/public/characters/1009281?apikey=4d2e0c623d661843745081ec1b70a4bb";
    
    fetch(apiUrl).then(function(response) {
        if(response.ok) {
        response.json().then(function(data) {
            console.log(data);           
        });
        } else {
            console.log("Try Again, Dummy");
        }
    });
}

getDoomData();