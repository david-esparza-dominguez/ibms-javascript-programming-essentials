const searchButton = document.getElementById("btnSearch");

const searchInput = document.getElementById("travelSearchInput");

const resultsContainer = document.getElementById



fetch("./travel_recommendation_api.json")

    .then((response) => {
        return response.json();
    })

    .then((data) => {
        console.log(data);
    });