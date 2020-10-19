"use strict";
var Cs142TemplateProcessor;

function Cs142TemplateProcessor(template) {
    this.template = template;
} 

Cs142TemplateProcessor.prototype.fillIn = function(str) {
    var months = String(str.month);
    var days = String(str.day);
    var years = String(str.year);
    var template = this.template;
    var re = /{{\s*[\w\.]+\s*}}/g;
    var prop = /[\w\.]+/;
    var string = template.replace(re, function(x) {
	    if(x.match(prop)[0] === "month") {return months; }
	    if(x.match(prop)[0] === "day") {return days; }
	    if(x.match(prop)[0] === "year") {return years; }
	});

    return string;
};

