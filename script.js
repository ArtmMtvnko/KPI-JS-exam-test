// 1

// Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// For cancelled input show “Canceled.”
// If the word’s length is odd - show the middle character.If word’s length is even - show the middle 2 characters.
// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”.
// For user input use “prompt” function. For displaying result use “alert” function.

// Examples:
//  For user input “test” should return “es”
//  For user input “character” should return “a”
//  For user input “B” should return “B”
//  For user input “” should return “Invalid value”
// For user input “       “ should return “Invalid value”

function middleValue() {
    const input = prompt('Enter the value:')
    
    const size = input.length
    
    if (input === '' || input === null) {
        alert('Enter proper value')
    } 
    
    if (size % 2 === 0) {
        console.log(`${input[size / 2]}${input[size / 2 - 1]}`)
    } else {
        console.log(input[Math.floor(size / 2)])
    }
}

// middleValue()




const users = [   
    {
      id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      skills: ["ipsum", "lorem"],
      gender: "male",
      age: 37,
    },
    {
      id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
      gender: "female",
      age: 34,
    },
    {
      id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      skills: ["nulla", "anim", "proident", "ipsum", "elit"],
      gender: "male",
      age: 24,
    },
    {
      id: "249b6175-5c30-44c6-b154-f120923736f5",
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      skills: ["adipisicing", "irure", "velit"],
      gender: "female",
      age: 21,
    },
    {
      id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      skills: ["ex", "culpa", "nostrud"],
      gender: "male",
      age: 27,
    }
]
// Write function, which will get array above as a
// param and return an array with skills of all users, values should be unique

// Write function, which will get array above as a param and return total
// balance of all users, who has two friens and whose age is less than 30

function extractSkills(arr) {
    const skills = new Set()

    arr.forEach(user => {
        user.skills.forEach(skill => skills.add(skill))
    })

    return [...skills]
}

// console.log(extractSkills(users))





// Differences between operators spread and rest, examples of their use

// spread "розгортає масив", наприклад:

// const arr1 = [1, 2, 3, 4, 5]
// const arr2 = [10, 11, 12, ...arr1]

// output (arr2): [10, 11, 12, 1, 2, 3, 4, 5]

// rest навпаки "збирає" елементи масиву, синтаксис такий же як і spread. приклад:

// function addNums(a, b, ...rest) {
//   return a + b + rest.reduce((acc, num) => num + acc, acc)
// }



// 4

// Create list on user's names in html document.
// By click on name display alert 'Hello, {name}'

const list = document.querySelectorAll('#names')

list.forEach(elem => elem.addEventListener('click', event => {
  console.log(event.target)
  alert(`Hello, ${event.target.textContent}`)
}))