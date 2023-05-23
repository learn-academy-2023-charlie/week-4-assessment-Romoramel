// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("colorTones", () => {
  it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
    expect(ColorTones(colors1)).toEqual(["purple", "blue", "green", "yellow", "pink"])
    expect(ColorTones(colors2)).toEqual(["chartreuse",
    "indigo",
    "periwinkle",
    "ochre",
    "aquamarine",
    "saffron"])
  })
})

const ColorTones = (array) => {
  let newArray = array.slice(1)
return newArray.sort(() => Math.random() -0.3)
}

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]

// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// pseudo code
// input: a function that take in an array
// output: a subset array with the first item removed and shuffled content
// used the shift method to remove the first item in the array and the sort to shuffle the elements then .random

// b) Create the function that makes the test pass.

const colorTones = (array) => {
  let newArray = array.slice(1)
return newArray.sort(() => Math.random() -0.3)
}

console.log(colorTones(colors1))



// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally. 

// a) Create a test with expect statements for each of the variables provided.

describe("tally", () => {
  it("takes in an object that contains up votes and down votes and returns the end tally", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11

    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31
    expect(tally(votes1)).toEqual([11])
    expect(tally(votes2)).toEqual([-31])
  })
})

// b) Create the function that makes the test pass.

const tally = (votes) => {
  let netTally = object
  return votes.upVotes - votes.downVotes;
}

console.log(tally(netTally))

// pseudo code
// input: a function that take in an object
// output: upvotes and downvotes added
// used the .upvotes and .downvotes to return the end tally


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// pseudo code
// input: a function that take in two arrays as arguments 
// output: one array with no duplicate values
// used the concat method to combine two arrays then used the Set object to remove duplicates from the combined array then used the spread operator to convert the set back into a unique array 

// a) Create a test with an expect statement using the variables provided.

describe("dataTypes", () => {
  it("that takes in two arrays as arguments and returns one array with no duplicate values", () => {
    expect(dataTypes(dataTypesArray1)).toEqual(["array", "object", "number", "string", "Boolean"])
    expect(Datatypes(dataTypesArray2)).toEqual(["string", "null", "Boolean", "string", "undefined"])
  })
})

const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]

// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.

function dataTypes(arr1, arr2) {
  // Combine the arrays
  const combinedArray = arr1.concat(arr2)
  
  // Remove duplicates
  const uniqueArray = [...new Set(combinedArray)]
  
  return uniqueArray
}
