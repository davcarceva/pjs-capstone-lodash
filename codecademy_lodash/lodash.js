let _ = {
clamp(number,lower,upper) {
  let lowerClampedValue = Math.max(number,lower);
  let clampedValue = Math.min(lowerClampedValue,upper);
  return clampedValue;
},
  
inRange(number,start,end){
  if(end===undefined){
  end = start;
  start = 0;
}
	if (start>end){
    let temp = end;
    end = start;
    start = temp;
  }
let isInRange = false;
	if ((start<=number) && (number<end)){
    isInRange =  true;
  }
return isInRange;
},

words(string){
 let words = string.split(' ');
  return words;
},
  
pad(string,length){
  let totalPadding = length-string.length;
 
if (totalPadding<=0){
  return string;
}
  
  let beginningPadding = 0;
  let endPadding = 0;
  
  if (totalPadding%2===0){
    // even
    beginningPadding = totalPadding/2;
    endPadding = beginningPadding;
  } else {
    // odd
    beginningPadding = Math.floor(totalPadding/2);
    endPadding = beginningPadding+1;
  }
  
 	let bPaddingString = "";
  for (i=0; i<beginningPadding; i++){
  bPaddingString+=" ";
 }

  let ePaddingString = "";
  for (i=0; i<endPadding; i++){
  ePaddingString+=" ";
 }
  
return bPaddingString+string+ePaddingString; 
},

has(object,key){
if(object[key]!==undefined){
var hasValue = true;
} else {
var hasValue = false;
}
return hasValue;
  
},
  
invert(object){
let invertedObject = new Object();
for (const key in object) {
let originalValue = object.key;
invertedObject.originalValue = key;
}
return invertedObject;
},

findKey(object,predicate){
  for(key in object){
    var value = object[key];
    var predicateReturnValue = predicate(value);
    if(predicateReturnValue){
       return key;
       } 
}
  return undefined;
},
  
drop(array,n){
 if (!n){n=1;}
 var droppedArray =array.slice(n,array.length);
  return droppedArray;
},
  
dropWhile(array,predicate){
  var dropNumber = array.findIndex(
    function(element,index){
      return !predicate(element,index,array);
    }
  );
  
 	var droppedArray = this.drop(array,dropNumber);
  
  return droppedArray; 
},
  
chunk(array,size){
  if(size===undefined){size=1;}
  var arrayChunks = [];
  for (var i=0; i<array.length; i+size){
    	var arrayChunk = array.slice(i,i+size);
    	arrayChunks.push(arrayChunk);
  }
  return arrayChunks;
}

  
}