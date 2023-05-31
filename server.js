const express = require("express");
const path = require("path");
//These lines import the express and path modules that are required for creating an Express application and working with file paths, respectively.
const api = require("./routes/routes");
//This line imports the router module from the ./routes directory, this module contains the route handlers for the API endpoints

const PORT = process.env.PORT || 3001;
//PORT number defaults to port 3001

const app = express();
//This line creates an instance of the Express application

//Middleware added below
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Mounts the API router at the /api path, it means that any requests to routes starting with /api will be handled by the api router module.
app.use("/api", api);

//This line serves static files from the public directory, and allows the server to directly serve static assets such as HTML, CSS and JavaScript files
app.use(express.static("public"));

//These lines define route handlers for specific routes and are responsible for sending the respective HTML files as responses.
app.get("/notes", handleNotesPage);
//^^ this handler is triggered when a GET request is made to the /notes path and it calls the handleNotesPage function
app.get("*", handleIndexPage);
//^^this handler is a wildcard route that matches any route that hasn't been handled previously and it calls the handleIndexPage function

app.listen(PORT, handleServerStart);
//^^This line starts the server and makes it listen on the specified PORT when the server starts successfully, it calls the handleServerStart function, which logs a message indicating that the server is running.

//The following function implements the handleNotesPage route handler function.  It constructs the file path to the notes.html file using path.join and sends the file as the respose using res.sendFile
function handleNotesPage(req, res) {
  const notesFilePath = path.join(__dirname, "./public/pages/notes.html");
  res.sendFile(notesFilePath);
}
//This function implements the handleIndexPage route handler function.  It constructs the file path to the index.html file using path.join and sends the file as the response using re.sendFile
function handleIndexPage(req, res) {
  const indexPath = path.join(__dirname, "./public/pages/index.html");
  res.sendFile(indexPath);
}

//This is the implementation of the handleServerStart function and logs a message indicating that the server is running including the URL where its accessible.  It also adds a lightning bolt, rock n roll horns and a guitar emoji.
function handleServerStart() {
  console.log(`App listening at http://localhost:${PORT} ⚡️🤘🏽🎸`);
}
