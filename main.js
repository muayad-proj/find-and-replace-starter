// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")
const replaceOneButton = document.querySelector(".replace-one-button")

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")

// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements(currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}


// YOUR CODE GOES HERE
replaceAllButton.addEventListener("click", function () {
    let userInput = findInput.value
    let replacingData = replaceInput.value
    //console.log(userInput,replacingData)
    let sum=0;
    for (let count = 0; count < rowElements.length; count++) {
        let currenElement = rowElements[count]
        let Rowcell = getCellElements(currenElement)
        //    console.log(currentRowcell)
        for (let count1 = 0; count1 < Rowcell.length; count1++) {
            let currntcell = Rowcell[count1]
            let cellcontents = currntcell.innerHTML
            if (cellcontents.includes(userInput)) {
                currntcell.innerHTML = cellcontents.replace(userInput, replacingData)
               
                sum=sum+1;
                console.log(sum) 
            }
            


        }
    }

})


// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
replaceOneButton.addEventListener("click", function () {
    let userInput = findInput.value
    let replacingData = replaceInput.value
    //console.log(userInput,replacingData)
    let sum=0;

    for (let count = 0; count < 1; count++) {
        let currenElement = rowElements[count]
        let Rowcell = getCellElements(currenElement)
        //    console.log(currentRowcell)
        for (let count1 = 0; count1 < Rowcell.length; count1++) {
            let currntcell = Rowcell[count1]
            let cellcontents = currntcell.innerHTML
            if (cellcontents.includes(userInput)) {
                currntcell.innerHTML = cellcontents.replace(userInput, replacingData)
                sum=sum+1;
                console.log(sum)
            }


        }
    }

})