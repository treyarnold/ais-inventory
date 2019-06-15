const queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkName

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(data) {
    console.log("this is the response: " + data.strDrink);
})