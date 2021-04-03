const express = require("express");
const Success = require("../helpers/succesHandler");
const { findCities } = require("../services/cityService");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const cities = async (req, res, next) => {
  try {
    const cities = await findCities(req.params.city);
    const success = new Success(cities);
    // res.json(new Success(await findCities(req.params.city))) una forma mas simplificada de res.
    res.json(success);
  } catch (error) {
    next(error);
  }
};

module.exports = { cities };
