const { readdirSync, rename } = require("fs");
const { resolve } = require("path");

// Get path to image directory
const imageDirPath = resolve(__dirname, "./3.jpg");

// Get an array of the files inside the folder
const files = readdirSync(imageDirPath);

// Loop through each file that was retrieved
let i = 0;
files.forEach((file) => {
  i++;
  rename(imageDirPath + `/${file}`, imageDirPath + `/${i}.jpg`, (err) =>
    console.log(err)
  );
});
