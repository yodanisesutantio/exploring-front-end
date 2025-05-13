const fs = require("fs");

const readStream = fs.createReadStream("./docs/text-1.txt", {
  encoding: "utf-8",
});

const writeStream = fs.createWriteStream("./docs/text-2.txt");

// readStream.on("data", (chunk) => {
//   console.log("----new chunk----");
//   console.log(chunk);

//   writeStream.write("\n-----NEW CHUNK-----\n");
//   writeStream.write(chunk);
// });

// Piping
readStream.pipe(writeStream);
