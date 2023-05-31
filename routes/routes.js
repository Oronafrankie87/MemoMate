const express = require("express");
//^Imports Express module

const router = express.Router();
//^Creates a new instance of the Express Router, Router class provides a way to create modular, mountable route handlers

const apiRouter = require("./api");
//^This line imports the apiRouter module from the api file, It represents the router for handling API related routes.

router.use("/", apiRouter);
//^This mounts the apiRouter as a middleware on the root path of the main router.  It means that any requests starting with "/" will be passed to the apiRouter for further handling.

module.exports = router;
//This code ^ exports the router instance so that it can be used in other files when this module is imported.  Other files can import this module and use the defined routes and middleware.
