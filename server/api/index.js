const express = require("express");
const router = express.Router();
const axios = require("axios");

/**
 * @description Will return the first 30 elements of an array
 * @param {Array} arr
 */
const retrieveFirst30 = arr => arr.slice(0, 30);

/**
 * @description Will return a new array with just id's
 * @param {Array} arr
 */
const getIds = arr => arr.map(obj => obj.id);

/**
 * @description Will return a formatted string for the api query
 * @param {Array} arr
 */
const createIdQueryString = arr =>
  arr.map((id, index) => `ids[]=${id}`).join("&");

/**
 * @description Will return a formatted array of object in our required format
 * @param {Array} arr
 */
const formatResponseData = arr =>
  arr.map(({ adId, currencySymbol, pricePerMonth, photoUrls, title }) => {
    return {
      adId,
      currencySymbol,
      pricePerMonth,
      photoUrls,
      title
    };
  });

router.get("/homecards", (req, res) => {
  let totalMarkers = 0;
  axios(
    "https://frontend-interview.spotahome.com/api/public/listings/search/markers/madrid"
  )
    .then(response => {
      totalMarkers = response.data.data.length;
      const query = createIdQueryString(
        getIds(retrieveFirst30(response.data.data))
      );

      return axios(
        `https://frontend-interview.spotahome.com/api/public/listings/search/homecards_ids?${query}`
      );
    })
    .then(response => {
      const listings = formatResponseData(response.data.data.homecards);

      res.send({ listings, totalMarkers });
    })
    .catch(response => {
      res.send(response.data).status(422);
    });
});

module.exports = router;
