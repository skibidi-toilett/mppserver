const fs = require("fs");
const path = require("path");

// Folders to scan
const directories = ["./public", "./protocol", "./fun"];

// Function to dynamically run JavaScript files
function runScripts() {
    directories.forEach(dir => {
        fs.readdirSync(dir).forEach(file => {
            const filePath = path.join(dir, file);
            if (file.endsWith(".js")) {
                console.log(`Running: ${filePath}`);
                require(filePath);
            }
        });
    });
}

// Execute scripts
runScripts();
