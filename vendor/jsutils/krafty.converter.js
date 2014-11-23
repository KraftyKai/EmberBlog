function KraftyConverter() {
    this.stringifyCss = function(styles) {
	var result = '"';
	$.each(styles, function( index, value) {
	    result += index + ': ' + value ';';
	});
	return result + '"';
    }
}
