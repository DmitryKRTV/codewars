// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
//
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
//
// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""
//
// // "What was the name of your first pet?"
//
// "Skippy" --> "##ippy"
//
// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"
function maskify(cc) {
    return cc.length <= 4 ? cc : cc.split("").reduce((acc, curr, index, array) => {
      return array.length - index <= 4 ? acc += curr : acc += "#"
    }, "")
}

function maskifys(cc) {
    return cc.replace(/.(?=....)/g, '#');
}

function maskifysm(cc) {
    return cc.replace(/.+(?=.{4}$)/g, '#');
}

console.log(maskify(" cert"))