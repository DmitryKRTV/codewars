//Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized
// (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

function toCamelCase(str){
    return str.replace(/[_-]\w/gi, function(match, index) {
        if (+match === 0) return "";
        return index === 0 ? match.split("")[1].toLowerCase() : match.split("")[1].toUpperCase();
    });
}

function bestSolution(str){
    var regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
        return match.charAt(1).toUpperCase();
    });
}

console.log(toCamelCase("asd_asd_asd"))