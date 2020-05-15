/*
  Given a string `substr`, getMovieTitles() must perform the following tasks:
    1. Query https://jsonmock.hackerrank.com/api/movies/search/?Title=substr (replace substr). 
    2. Initialize the titles array to store total string elements. Store the Title of each movie meeting the search criterion in the titles array.
    3. Sort titles in ascending order and return it as your answer.
*/

const https = require('https');

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

function getAggregatedResults(resultPagesUrls, callback) {
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
    }).on('error', err => {
      return callback(err, null);
    })
  })
}

function getMovieTitles(substr) {
  if (substr === '') return null

  const baseURL = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=';
  const url = `${baseURL}${substr}`;

  getTotalPageCount(url, (err, totalPages) => {
    if (err) {
      console.log('Error:', err);
    } else {
      const resultPagesUrls = [];
      for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
        resultPagesUrls.push(`${url}&page=${pageNumber}`);
      }
      getAggregatedResults(resultPagesUrls, (err, titles) => {
        if (err) {
          console.log('Error:', err);
        } else {
          console.log(titles.sort());
        }
      })
    }
  })
}

getMovieTitles('spiderman')