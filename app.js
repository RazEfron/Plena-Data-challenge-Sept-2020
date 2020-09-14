// get a pointer to the button on the page
let startButton = document.getElementById("start-btn");

// add a click event listner that prompts the user for input and calls the hadnler function on the input
startButton.addEventListener("click", () => {
  let userInput = prompt("Type A String Please");
  handleUserInput(userInput);
});

function handleUserInput(input) {
  // array to keep track on the first single
  let singlesArray = [];
  // object to keep track on the number of times each character appears
  let countingOccurrencesObject = {};

  //   a loop to iterarte over the input string
  for (let i = 0; i < input.length; i++) {
    //   taking each character
    const char = input[i];
    // downcasing it to have a logic that counts uppercase and lower case as the same character but saves them as they originally appear
    const downCaseChar = char.toLowerCase();

    // checking if the character already appeared
    if (!countingOccurrencesObject[downCaseChar]) {
      // adding it to the counting object
      countingOccurrencesObject[downCaseChar] = char;
      //   adding it to the singles array
      singlesArray.push(downCaseChar);
    } else {
      //   if the charcter already appeared and hasnt been deleted from the singles array yet
      if (singlesArray.indexOf(downCaseChar) !== -1) {
        //   deleting the character from the array
        singlesArray.splice(singlesArray.indexOf(downCaseChar), 1);
      }
      //   concating the character to the right string under the loweredcase key but in the original form (uuper or lower case)
      countingOccurrencesObject[downCaseChar] += char;
    }
  }
  // creating a div to display the first non occuring character
  let firstNoneRepeatingDiv = document.createElement("div");
  // taking the first character from the singles array, and extracting the right casing through the object (the array saves the lower case version while the object saves the original casing under the lower cased character) and assigning the text for the div
  firstNoneRepeatingDiv.innerHTML = `The first Letter that is not repeated is - ${countingOccurrencesObject[singlesArray[0]]}`;
  //   appending the element to the body of the document
  document.body.append(firstNoneRepeatingDiv);

  //   extracting the grouped strings
  let stringValues = Object.values(countingOccurrencesObject);
  //   sorting by length of each string
  let sortedArray = stringValues.sort(function (a, b) {
    return a.length - b.length;
  });
//   joining the sorted array to a string and repeating the process from the first non repeating letter
  let reorderedStringDiv = document.createElement("div");
  reorderedStringDiv.innerHTML = `The newly ordered string is - ${sortedArray.join(
    ""
  )}`;
  document.body.append(reorderedStringDiv);
}
