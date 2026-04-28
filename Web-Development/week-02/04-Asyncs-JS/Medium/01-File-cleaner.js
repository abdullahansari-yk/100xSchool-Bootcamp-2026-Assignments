// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

fs.readFile("demofile.txt", "utf-8", function (err, content) {
  //   console.log(content.trim().replace(/\s+/g," "));
  // console.log(content.split(/\s+/).join(" "))
  afterContent = content.trim().replace(/\s+/g, " ");

  fs.writeFile("demofile.txt", afterContent, "utf-8", function (err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("File updated successfully!");
  });
});
