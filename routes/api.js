const express = require("express");
const fs = require("fs");
const uniqid = require("uniqid");
const path = require("path");
//^the above code imports express, fs, unique identifiers and path modules

const router = express.Router();
//^This code creates an instance of an Express router which allows you to define routes

router.get("/notes", (req, res) => {
  const dbPath = path.join(__dirname, "../db/db.json");
  const db = fs.readFileSync(dbPath);
  res.json(JSON.parse(db));
});
//The code above ^ sets up a route to handle GET requests to the notes endpoint.  When the endpoint is accessed, it reads the contents of a JSON file, parses it into an object and sends the object as the response in JSON format.
