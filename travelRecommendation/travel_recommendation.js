const searchButton = document.getElementById("btnSearch");

const searchInput = document.getElementById("travelSearchInput");

const resultsContainer = document.getElementById("recommendationResults");

async function fetchRecommendations() {

    const response = await fetch("./travel_recommendation_api.json");

    const data = await response.json();

    return data;
}

function createRecommendationCard(place) {

    return `
        <div class="recommendation-card">
            <img
                src="${place.imageUrl}"
                alt="${place.name}"
            >

            <div class="recommendation-content">

                <h3>${place.name}</h3>

                <p>${place.description}</p>

            </div>
        </div>
    `;
}

searchButton.addEventListener("click", async () => {

    const searchValue = searchInput.value
        .toLowerCase()
        .trim();

    const data = await fetchRecommendations();

    let matchedResults = [];

    if (
        searchValue === "beach" ||
        searchValue === "beaches"
    ) {
        matchedResults = data.beaches;
    }

    else if (
        searchValue === "temple" ||
        searchValue === "temples"
    ) {
        matchedResults = data.temples;
    }

    else {
        data.countries.forEach((country) => {
            if (
                country.name.toLowerCase() === searchValue
            ) {
                matchedResults = country.cities;
            }
        });
    }

    console.log(matchedResults);

});

fetch("./travel_recommendation_api.json")

    .then((response) => {
        return response.json();
    })

    .then((data) => {
        console.log(data);
    });