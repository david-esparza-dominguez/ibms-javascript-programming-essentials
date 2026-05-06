const searchButton = document.getElementById("btnSearch");

const clearButton = document.getElementById("btnClear");

const searchInput = document.getElementById("travelSearchInput");

const resultsContainer = document.getElementById("recommendationResults");

const countryTimeZones = {

    australia: "Australia/Sydney",

    japan: "Asia/Tokyo",

    brazil: "America/Sao_Paulo"
};

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

function displayRecommendations(
    recommendations, 
    currentTime = ""
) {

    resultsContainer.innerHTML = "";

    if (currentTime !== "") {
        resultsContainer.innerHTML += `
            <div class="time-display">

                Current Time:
                ${currentTime}
            
            </div>
        `;
    }

    recommendations.forEach((place) => {

        resultsContainer.innerHTML +=
            createRecommendationCard(place);
    });
}

function getCountryTime(countryName) {

    const timeZone =
        countryTimeZones[countryName];



    if (!timeZone) {

        return "";
    }



    const options = {

        timeZone: timeZone,

        hour12: true,

        hour: "numeric",

        minute: "numeric",

        second: "numeric"
    };



    return new Date().toLocaleTimeString(
        "en-US",
        options
    );
}

function clearResults() {

    searchInput.value = "";

    resultsContainer.innerHTML = "";
}

searchButton.addEventListener("click", async () => {

    const searchValue = searchInput.value
        .toLowerCase()
        .trim();

    const data = await fetchRecommendations();

    let matchedResults = [];

    let currentTime = "";

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

            country.name.toLowerCase()
            === searchValue

        ) {

            matchedResults =
                country.cities;

            currentTime =
                getCountryTime(searchValue);



            console.log(
                "Current Time:",
                currentTime
            );
        }
    });
}

    displayRecommendations(
    matchedResults,
    currentTime
    );

});

clearButton.addEventListener("click", () => {

    clearResults();
});

fetch("./travel_recommendation_api.json")

    .then((response) => {
        return response.json();
    })

    .then((data) => {
        console.log(data);
    });