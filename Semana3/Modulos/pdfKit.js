//modulo PDFKit
const PDFDocument = require('pdfkit');
const fs = require('fs');

//Crear la vista del documento
//crear clas
let pdfDoc = new PDFDocument;
pdfDoc.pipe(fs.createWriteStream('InteligenciaArtificial.pdf'));
pdfDoc
    .fillColor('red')
    .fontSize(17)
    .text("Inteligencia Artificial", { align: 'center'});
pdfDoc
    .fillColor('black')
    .fontSize(12)

pdfDoc.text("El término inteligencia artificial fue adoptado en 1956, pero se ha vuelto más popular hoy día gracias al incremento en los volúmenes de datos, algoritmos avanzados, y mejoras en el poder de cómputo y el almacenaje.",{aling: 'justify'});
pdfDoc.text("La inteligencia artificial (IA) hace posible que las máquinas aprendan de la experiencia, se ajusten a nuevas aportaciones y realicen tareas como seres humanos.", {aling: 'justify'});

pdfDoc.end();









