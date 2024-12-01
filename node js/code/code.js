// Built in 

/*const fs = require("fs");

fs.readFile("./sample.txt", "utf-8",(err,data) =>{
    if (err) {
        return err;
    }
    console.log(data);
});
console.log("I am First");*/

const fs = require("fs");

const a = fs.readFileSync("./sample.txt", "utf-8");


console.log(a);
console.log("I am First");