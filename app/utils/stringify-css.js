/* Global $ */

//NOTE: This object currently maintains on state

export default function stringifyCss(css) {
    var result = "";

    var iterateCss = function(css) {
	$.each(css, function(index, value) {
	    result += index + ': ' + value + ';';
	});
    };

    $.each(arguments, function(index, value) {
	iterateCss(value);
    });

    return result;
}
