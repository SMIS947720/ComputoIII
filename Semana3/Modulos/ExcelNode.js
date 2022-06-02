// Modulo excel4node
var excel = require('excel4node');

// crear clase Workbook
var workbook = new excel.Workbook();

// crea hoja de excel 
var worksheet = workbook.addWorksheet('Ejemplo 1');

// estilo 
var style = workbook.createStyle({
  font: {
    color: '#4472C4',
    size: 17
  },
  numberFormat: '$#,##0.00; ($#,##0.00); -'
});

//HOJA DE TRABAJO
//Titulo
worksheet.cell(1,2).string('PRECIOS DE PRODUCTOS').style(style);

//PA
worksheet.cell(3,1).string('Producto A').style(style);
//valor de producto A
worksheet.cell(4,1).number(150).style(style);

//PB
worksheet.cell(3,3).string('Producto B').style(style);
//valor de producto B
worksheet.cell(4,3).number(200).style(style);

//fromula de calculo, a4 y c4 ,son posiciones de los valores
worksheet.cell(4,5).formula('A4 + C4').style(style);

//generacion del archivo .xlsx
workbook.write('ExcelExample.xlsx');