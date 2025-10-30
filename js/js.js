/* File: js.js
GUI Assignment: Creating an Interactive Dynamic Table
Andrew Belyea, UMass Lowell Computer Science, Andrew_Belyea@student.uml.edu
Copyright (c) 2025 by Andrew. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by AB on October 29, 2025 
Sources: https://www.w3schools.com/
*/

function TableStart() {
    clearInvalid();
    clearTable();
    var isAllDone = false;
    /* Get data */
    var row1 = document.getElementById('row1').value;
    var row2 = document.getElementById('row2').value;
    var col1 = document.getElementById('col1').value;
    var col2 = document.getElementById('col2').value;

    /* Check all areas are filled */
    console.log(row1);
    console.log(row2);
    console.log(col1);
    console.log(col2);

    /* Check for invalid numbers */
    if (!row1 || Number(row1) < -50) {
        addInvalid('row1Text', 'Invalid input. Please enter a number greater than -50.')
        isAllDone = true;
    }
    if (!row2 || Number(row2) > 50) {
        addInvalid('row2Text', 'Invalid input. Please enter a number less than 50.')
        isAllDone = true;
    }
    if (!col1 || Number(col1) < -50) {
        addInvalid('col1Text', 'Invalid input. Please enter a number greater than -50.')
        isAllDone = true;
    }
    if (!col2 || Number(col2) > 50) {
        addInvalid('col2Text', 'Invalid input. Please enter a number less than 50.')
        isAllDone = true;
    }

    /* Check if start number greater than end number */
    if ((Number(row1) > Number(row2)) && (Number(row1) >= 0)) {
        addInvalid('row2Text', 'Invalid input for multiplier. The ending number must bigger than starting number.')
        isAllDone = true;
    }
    if ((Number(col1) > Number(col2)) && (Number(col1) >= 0)) {
        addInvalid('col2Text', 'Invalid input for multiplier. The ending number must bigger than starting number.')
        isAllDone = true;
    }

    /* Get row and column count */
    var rowlength = row2 - row1 + 1;
    var collength = col2 - col1 + 1;

    /* Check row length */
    if (rowlength > 101) {
        addInvalid('row2Text', 'Invalid Range. The range of row cannot exceed 100.')
        isAllDone = true;
    }

    /* Check column length */
    if (collength > 101) {
        addInvalid('col2Text', 'Invalid Range. The range of row cannot exceed 100.')
        isAllDone = true;
    }
    if (isAllDone) return;
    /* Initial table HTML */
    var TableFormat = "<table>";
    var i, j;

    /* Add table header to HTML */
    TableFormat += "<tr><th></th>";
    for (i = 0; i < rowlength; i++) {
        TableFormat += "<th>";
        var num = Number(row1) + i;
        TableFormat += num;
        TableFormat += "</th>";
    }
    TableFormat += "</tr>";

    /* Add table data to HTML */
    for (i = 0; i < collength; i++) {
        TableFormat += "<tr>";
        var colnum = Number(col1) + i;
        for (j = 0; j < rowlength + 1; j++) {
            TableFormat += "<td>";
            if (j == 0) {
                TableFormat += colnum;
            } else {
                var rownum = Number(row1) + j - 1;
                var num = colnum * rownum;
                TableFormat += num;
            }
            TableFormat += "</td>";
        }
        TableFormat += "</tr>";
    }
    TableFormat += "</table>";

    /* Output table to screen */
    document.getElementById('table').innerHTML = TableFormat;
}

function addInvalid(className, text) {
    var el = document.getElementsByClassName(className);
    console.log(el, text)
    el[0] && (el[0].innerText = text);
}

function clearInvalid() {
    addInvalid('row1Text', '');
    addInvalid('row2Text', '');
    addInvalid('col1Text', '');
    addInvalid('col2Text', '');
}

function clearTable() {
    document.getElementById('table').innerHTML = '';
}