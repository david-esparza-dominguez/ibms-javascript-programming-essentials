fetch("./travel_recommendation_api.json")

    .then((response) => {
        return response.json();
    })