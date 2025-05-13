const fs = require("fs");

// Reading Files
// fs.readFile("./docs/text.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// console.log("last line");

// Write Files
// fs.writeFile("./docs/text.txt", "hello world!", () => {
//   console.log("file was written");
// });

// If the filename or directory is wrong instead of error it will make a new file according to the given directory or filename
// fs.writeFile("./docs/text-1.txt", "hello world!", () => {
//   console.log("file was written");
// });

// Directory
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }

// Delete Files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
