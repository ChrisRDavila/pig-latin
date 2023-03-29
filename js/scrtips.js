function pigLatin(text) {
  let inputArray = text.split(" ");
  console.log(inputArray);
  const vowelArray = ["a", "e", "i", "o", "u"];
  let index = 0;
  let outputArray = [];
  inputArray.forEach(element => {
    for (let i = 0; i < element.length; i++) {
      if (vowelArray.includes(element.charAt(i).toLowerCase)) {
        if(i === 0){
          outputArray.push(element.slice(1, (element.length)) + element.slice(0, 1) + "way");
        }
      }
    }
    return outputArray;
  })
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
