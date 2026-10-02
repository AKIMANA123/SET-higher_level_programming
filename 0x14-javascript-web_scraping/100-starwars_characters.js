#!/usr/bin/node
const request = require('request');
const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const characters = JSON.parse(body).characters;
    for (const charUrl of characters) {
      request(charUrl, (charErr, charRes, charBody) => {
        if (charErr) {
          console.log(charErr);
        } else {
          console.log(JSON.parse(charBody).name);
        }
      });
    }
  }
});
