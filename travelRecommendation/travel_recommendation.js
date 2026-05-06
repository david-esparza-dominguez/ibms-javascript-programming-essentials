fetch("./travel_recommendation_api.json")

    .then((response) => {
        return response.json();
    })

    .then((data) => {
        console.log(data);
    });