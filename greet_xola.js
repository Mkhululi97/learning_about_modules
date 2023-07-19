// import greet function from greet.js file
import greet from "./greet.js";
// import figlet from figlet module
import figlet from "figlet";
// import chalk from chalk module
import chalk from "chalk";
const styledMessage = chalk.green(figlet.textSync(greet("Xola")));
console.log(styledMessage);
