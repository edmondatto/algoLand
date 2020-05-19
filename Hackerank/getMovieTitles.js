/*
  Given a string `substr`, getMovieTitles() must perform the following tasks:
    1. Query https://jsonmock.hackerrank.com/api/movies/search/?Title=substr (replace substr). 
    2. Initialize the titles array to store total string elements. Store the Title of each movie meeting the search criterion in the titles array.
    3. Sort titles in ascending order and return it as your answer.
*/

const https = require('https');

/**
 * Returns the number of number of pages of results fetched from a URL
 * @param {string} url - The URL from which the results are to be fetched
 * @param {function} callback - The callback to be executed when the function returns
 * @return {function}
 */
function getTotalPageCount(url, callback) {
  https.get(url, response => {
    let data = '';

    response.on('data', chunk => data += chunk);

    response.on('end', () => {
      return callback(null, JSON.parse(data).total_pages);
    })
  }).on('error', err => {
    return callback(err, null);
  })
}

/**
 * Returns the aggregated results from pages of results fetched from a URL
 * @param {string[]} resultPagesUrls - An array of URLs from which the titles are to be fetched and aggregated
 * @param {function} callback - The callback to be executed when the function returns
 * @return {function}
 */
function getAggregatedTitles(resultPagesUrls, callback) {
  let titles = [];
  let pagesRequested = 1;

  resultPagesUrls.forEach(url => {
    https.get(url, response => {
      let data = '';

      response.on('data', chunk => data += chunk);

      response.on('end', () => {
        const movies = JSON.parse(data).data;

        movies.forEach(movie => titles.push(movie.Title));

        if (pagesRequested === resultPagesUrls.length) {
          return callback(null, titles);
        }

        pagesRequested++;
      })
    }).on('error', error => {
      return callback(error, null);
    })
  })
}

/**
 * Returns all the movie titles fetched from an API endpoint when provided a search term
 * @param {string} substr - The search term to be matched against movie titles by the API
 * @return
 */
function getMovieTitles(substr) {
  if (typeof substr !== 'string' || !substr) return null;

  const baseURL = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=';
  const url = `${baseURL}${substr}`;

  getTotalPageCount(url, (error, totalPages) => {
    if (error) {
      console.log('Error:', error);
    } else {
      const resultPagesUrls = [];

      for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
        resultPagesUrls.push(`${url}&page=${pageNumber}`);
      }

      getAggregatedTitles(resultPagesUrls, (error, titles) => {
        if (error) {
          console.log('Error:', error);
        } else {
          console.log(titles.sort());
        }
      })
    }
  })
}

getMovieTitles('spiderman')