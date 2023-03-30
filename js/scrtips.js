function pigLatin(text) {
  let inputArray = text.split(" ");
  const vowelArray = ["a", "e", "i", "o", "u"];
  let outputArray = [];
  inputArray.forEach(element => {
    for (let i = 0; i < element.length; i++) {
      if(element.charAt(0) === "q"){
        outputArray.push(element.slice(2, (element.length)) + element.slice(0, 2) + "ay");
        break;
      } else if (vowelArray.includes(element.charAt(0).toLowerCase())) {
        outputArray.push(element.slice(1, (element.length)) + element.slice(0, 1) + "way");
        break;
      } else if(vowelArray.includes(element.charAt(i).toLowerCase())){
          outputArray.push(element.slice(i, (element.length)) + element.slice(0, i) + "ay");
          break;
      }
    }
  })
  return outputArray;
}


//if (i === vowelArray)
//return  vowelArray + way



function splitSentence(text) {
  let inputArray = text.split(" ");
}

function convertToPigLatin(text) {
  let inputArray = splitSentence(text);
  const vowelArray = [a, e, i, o, u];
  inputArray.forEach(element => {
    for (let i = 0; i < element.length; i++) {
      if (vowelArray.includes(element.charAt(i).toLowerCase()){

      }
    }
  });
}
