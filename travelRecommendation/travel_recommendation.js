const searchButton = document.getElementById("btnSearch");

const searchInput = document.getElementById("travelSearchInput");

const resultsContainer = document.getElementById("recommendationResults");

async function fetchRecommendations() {

    const response = await fetch("./travel_recommendation_api.json");

    const data = await response.json();

    return data;
}

searchButton.addEventListener("click", async () => {

    const searchValue = searchInput.value
        .toLowerCase()
        .trim();

});

fetch("./travel_recommendation_api.json")

    .then((response) => {
        return response.json();
    })

    .then((data) => {
        console.log(data);
    });