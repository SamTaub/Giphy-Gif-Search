let athletes = ["bryce harper", "mike trout", "manny machado", "aaron judge", "chris sale", "lebron james", "steph curry", "joel embiid", "kevin durant", "giannis antetokounmpo", "tom brady", "todd gurley", "drew brees", "aaron rodgers", "antonio brown", "connor mcdavid", "alex ovechkin", "erik karlsson", "auston matthews", "nathan mackinnon"];


function createButtons (){
$("#button-row").empty();
for (let i = 0; i <athletes.length; i ++){
    let gifButton = $("<button>" +  athletes[i] + "</button>");
    $(gifButton).addClass("btn btn-light");
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

createButtons();