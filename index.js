const PDFDocument = require("pdfkit");
const fs = require("fs");

// Creating a new instance of PDFDocument class
const doc = new PDFDocument();

// Piping the output stream to a file
doc.pipe(fs.createWriteStream("output.pdf"));

// Setting the fill color to green and
doc.fillColor("green")
    .fontSize(30)
    .text("WELCOME TO NODE.JS WORLD");

// Setting the fill color to black and
doc.fillColor("black")
    .fontSize(15)
    .text("It is the best platform for :- ");

// Adding multiple lines of text to
doc.text("Programming");
doc.text("Data Structures");
doc.text("Web development");
doc.text("API Development");
doc.text("NOSQL Databases,etc.");

// Ending the document
doc.end();
