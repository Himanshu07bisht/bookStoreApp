const fs = require("fs");
let text = fs.readFileSync("hsb" , "utf-8");
text = text.replace("hi" , "Hello");

console.log(text);


console.log("Creating a new file.....");
fs.writeFileSync("himanshu.txt" , text);