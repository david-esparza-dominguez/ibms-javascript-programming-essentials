// Create XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define variable with JSON file URL
var url = './news_article.json';

// Open the request
xhr.open('GET', url, true);

// Set response type to JSON
xhr.responseType = 'json';

// Define onload handler
xhr.onload = function() {
    // Get the articles array from the response
    var articles = xhr.response.articles;
    
    // Get the articles container div
    var articlesDiv = document.getElementById('articles');
    
    // Loop through each article
    articles.forEach(function(article) {
        // Create article container div
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        // Create title element
        var title = document.createElement('h2');
        title.textContent = article.title;

        // Create metadata (date and source)
        var meta = document.createElement('div');
        meta.classList.add('article-meta');
        meta.textContent = 'Date: ' + article.date + ' | Source: ' + article.source;

        // Create description element
        var description = document.createElement('p');
        description.textContent = article.description;

        // Create key points header
        var keyPointsHeader = document.createElement('h3');
        keyPointsHeader.textContent = 'Key Points:';

        // Create key points list
        var keyPointsList = document.createElement('ul');
        article.key_points.forEach(function(point) {
            var listItem = document.createElement('li');
            listItem.textContent = point;
            keyPointsList.appendChild(listItem);
        });

        // Create impact header
        var impactHeader = document.createElement('h3');
        impactHeader.textContent = 'Impact:';

        // Create impact list
        var impactList = document.createElement('ul');
        article.impact.forEach(function(impact) {
            var listItem = document.createElement('li');
            listItem.textContent = impact;
            impactList.appendChild(listItem);
        });

        // Append all elements to article div
        articleDiv.appendChild(title);
        articleDiv.appendChild(meta);
        articleDiv.appendChild(description);
        articleDiv.appendChild(keyPointsHeader);
        articleDiv.appendChild(keyPointsList);
        articleDiv.appendChild(impactHeader);
        articleDiv.appendChild(impactList);

        // Append article to articles container
        articlesDiv.appendChild(articleDiv);
    });
};

// Handle errors
xhr.onerror = function() {
    console.error('Error loading articles');
    document.getElementById('articles').innerHTML = '<p>Error loading articles. Please try again later.</p>';
};

// Send the request
xhr.send();
