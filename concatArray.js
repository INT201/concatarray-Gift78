const { template } = require("@babel/core");

function concatArray(array1, array2) {
  var a1 = new Array();
  a1 = array1;
  var a2 = new Array();
  a2 = array2;
  if (a1 == [] && a2 == []){
    return a1
  }else if (array1 === null && array2 === null) {
    return undefined;
  } else if (array1 === undefined && array2 === undefined) {
    return undefined;
  } else if (array1 === null && array2 === undefined) {
    return undefined;
  } else if (array1 === undefined && array2 === null) {
    return undefined;
  }else if ((array1 === null || array1 === undefined || a1 == [] || a1.length === 0 ) &&  ( a2 != null || a2 != undefined || a2 != [] || a2.length !=0)){
    return a2
  }else if((array1 != null || array1 != undefined ||a1 !=[] || a1.length != 0 ) &&  ( a2 === null || a2 === undefined || a2 == [] || a2.length ===0)){
    return a1
  }else{
    return a1.concat(a2)
  }
}
  // } else if(a1 === null || a1 === undefined || a1.length === 0 || a2 === null || a2 === undefined || a2.length ===0 ){

  // }


module.exports = concatArray;