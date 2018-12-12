let athletes = ["bryce harper", "mike trout", "manny machado", "aaron judge", "chris sale", "lebron james", "steph curry", "joel embiid", "kevin durant", "giannis antetokounmpo", "tom brady", "todd gurley", "drew brees", "aaron rodgers", "antonio brown", "connor mcdavid", "alex ovechkin", "erik karlsson", "auston matthews", "nathan mackinnon"];


function createButtons (){
$("#button-row").empty();
for (let i = 0; i <athletes.length; i ++){
    let gifButton = $("<button>" +  athletes[i] + "</button>");
    $(gifButton).attr('data-name', athletes[i]);
    $(gifButton).addClass("btn btn-primary athlete-btn m-1");
    $("#button-row").append(gifButton);
};
};

$("#submit-button").on("click", function(){
    event.preventDefault();
    var newAthlete = $("#athlete-input").val().trim();
    athletes.push(newAthlete);
    createButtons();
    $("#athlete-input").val("");
});

function createGif (){
    
    $("#gif-container").empty();
    
    let gif = $(this).attr("data-name");
    let apiKey = "MVW6VrC0Lj9n9Rp8wg8TOVl2We174UvH";
    let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=" + apiKey + "&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        for (let i = 0; i<response.data.length; i++){
        
        let gifRating = JSON.stringify(response.data[i].rating);
        let rating = $("<p>").text("rating: " + gifRating);

        let gifURL = response.data[i].images.downsized.url;
        let getGif = $("<img>").attr('src', gifURL);
        
        $("#gif-container").prepend(getGif);
        $("#gif-container").prepend(rating);
        };
    });
};

$(document).on("click", ".athlete-btn", createGif);


createButtons();