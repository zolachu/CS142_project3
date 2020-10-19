"use strict";

//var TableTemplate; 

class TableTemplate {
    static fillIn(id, dict, columnName) {
	//	if (columnName === undefined) {

	//	}
	var matchedColumn;
	var index = -1;
	var re = /{{\s*[\w\.]+\s*}}/g;
	var prop = /[\w\.]+/;

        document.getElementById(id).style.visibility = "visible";
	var len = document.getElementById(id).rows[0].cells.length;
	console.log(len);

	for (var i = 0; i < len; i++) {
	    var th_first = document.getElementById(id).rows[0].cells[i].innerHTML;
	    console.log(th_first);
	    var template = new Cs142TemplateProcessor(th_first);
	   	
	    var string = th_first.replace(re, function(x) { return x.match(prop); });
	    var arr = string.split(''); 
	    console.log(arr);
	    if (string === columnName) {
		matchedColumn = th_first;
		index = i;
	    }
	    document.getElementById(id).rows[0].cells[i].innerHTML = string;
	}	
	var rowCount = document.getElementById(id).rows.length;
	if(columnName === undefined) {
            for(var k = 1; k < len; k++) {
                for (var s = 1; s < rowCount; s++) {
                    var cell =  document.getElementById(id).rows[s].cells[k].innerHTML;
                    
                    var everyCellText = cell.replace(re, function(x) { return x.match(prop)[0]; });
                    document.getElementById(id).rows[s].cells[k].innerHTML = everyCellText;
                }
            }
        } else {
	    if (index !== -1) { 
	
		for (var j = 1; j < rowCount; j++) {
		    var row =  document.getElementById(id).rows[j].cells[index].innerHTML;
		    var row_template = new Cs142TemplateProcessor(row);
		    
		    var cellText = row.replace(re, function(x) { return x.match(prop)[0]; });
		    document.getElementById(id).rows[j].cells[index].innerHTML = cellText;
		}
	    }
	}
    }
}




