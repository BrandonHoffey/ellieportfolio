"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var fs_1 = require("fs");
var path_1 = require("path");
var cors_1 = require("cors"); // Import the cors middleware
var app = (0, express_1.default)();
app.use((0, cors_1.default)()); // Use cors middleware to enable CORS
app.get("/imageNames", function (req, res) {
    var folderPath = path_1.default.join(__dirname, "images", "PhotographyImages");
    fs_1.default.readdir(folderPath, function (err, files) {
        if (err) {
            console.error("Error reading directory:", err);
            res.status(500).send("Error reading directory");
        }
        else {
            var imageNames = files.filter(function (file) { return file.endsWith(".jpg"); }); // Adjust filter as per your image format
            res.json(imageNames);
        }
    });
});
app.listen(3000, function () {
    console.log("Server running on port 3000");
});
document.addEventListener("DOMContentLoaded", function () {
    var headerButton = document.getElementById("header");
    if (headerButton) {
        headerButton.addEventListener("click", function () {
            window.location.href = "http://127.0.0.1:5500/src/index.html";
        });
    }
});
console.log("It worked!");
window.onload = function () {
    // Fetch image names from the server
    fetch("http://localhost:3000/imageNames")
        .then(function (response) { return response.json(); })
        .then(function (imageNames) {
        // Specify the type of imageNames as string[]
        var folderPath = "../../images/PhotographyImages/";
        var photoContainer = document.getElementById("photoContainer");
        if (photoContainer) {
            imageNames.forEach(function (imageName) {
                // Specify the type of imageName as string
                var img = document.createElement("img");
                img.src = folderPath + imageName;
                img.alt = "Photo";
                photoContainer.appendChild(img);
            });
        }
    })
        .catch(function (error) {
        console.error("Error fetching image names:", error);
    });
};
