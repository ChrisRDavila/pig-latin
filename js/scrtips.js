function pigLatin(text) {
  let inputArray = text.split(" ");
  const vowelArray = ["a", "e", "i", "o", "u"];
  let outputArray = [];
  inputArray.forEach(element => {
    for (let i = 0; i < element.length; i++) {
      if (vowelArray.includes(element.charAt(i).toLowerCase())) {
        if(i === 0){
          outputArray.push(element.slice(1, (element.length)) + element.slice(0, 1) + "way")
        } else if(i > 0){
          if(element.slice(0, i).includes("q")){
            if(element.charAt(i+1) === "u"){
              outputArray.push(element.slice(i+1, (element.length)) + element.slice(0, i+1) + "ay");
            }
          } else {
          outputArray.push(element.slice(i, (element.length)) + element.slice(0, i) + "ay");
        }
        }
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
