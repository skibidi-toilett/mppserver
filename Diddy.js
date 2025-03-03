const fs = require("fs");
const path = require("path");

// Folders to scan
const directories = [
    path.join(__dirname, "public"),
    path.join(__dirname, "protocol"),
    path.join(__dirname, "fun"),
];

// Function to dynamically run JavaScript files
function runScripts() {
    directories.forEach(dir => {
        if (!fs.existsSync(dir)) {
            console.warn(`Warning: Directory not found: ${dir}`);
            return; // Skip if the directory doesn't exist
        }

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
