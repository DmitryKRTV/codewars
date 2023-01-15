//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
    return x.split(" ").join("")
}

function noSpaceRegex(x){
    return x.replace(/\s/g, '');
}
