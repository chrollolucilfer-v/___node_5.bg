import { error } from "console";
import * as fs from "fs/promises";

// // this creates a new folder called "newfolder" inside mongoose
// try {
//     // here if there is a folder not created in the path using recursive true will create
//     // those folders for you till the end
//   await fs.mkdir("c:/Users/Dell/OneDrive/Desktop/Mongoose/newfolder", {recursive: true});
//   console.log("Folder Created");
// } catch (error) {
//   console.log(error);
// }

// creating directory
// creating folder

// that was about creating a folder

// reading from a folder

// try {
//     const files = await fs.readdir("c:/Users/Dell/OneDrive/Desktop/Mongoose/newfolder")
//     for (const file of files) {
//         console.log(file);

//     }
//   console.log("These are the files inside the directory/ reading them");
// } catch (error) {
//   console.log(error);
// }

// try {
//     const files = await fs.rmdir("c:/Users/Dell/OneDrive/Desktop/Mongoose/newfolder")
//     for (const file of files) {
//         console.log(file);

//     }
//   console.log("REmoving directory usign dir");
// } catch (error) {
//   console.log(error);
// }

// // Now how to create and write files
// // try {
// //     await fs.writeFile("README.md", "hello node js");
// //     console.log("Writing successfull");
// // } catch (error) {

// //   console.log(error);
// // }

// // now learning how to read a file

// try {
//   const data = await fs.readFile("README.md", "utf-8");
//   console.log(data);
//   // it will give buffer data
//   // and to get a actual data you need to provide file type
// } catch (error) {
//   console.log(error);
// }

// // this  is how you rad data

// // appeding data

// try {
//   await fs.appendFile("README.md", "This is the next line");
// } catch (error) {
//   console.log(error);
// }

// // learning how to copy a file
// try {
//   await fs.copyFile("README.md", "info.txt");
// } catch (error) {
//   console.log(error);
// }

// // learning to get file information
// try {
//   const info = await fs.stat("info.txt");
//   console.log(info);
// } catch (error) {
//   console.log(error);
// }

// or specific information

try {
  const info = await fs.stat("info.txt");
  console.log(info.isDirectory());
  console.log(info.isFile());
} catch (error) {
  console.log(error);
}
