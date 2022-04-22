console.log("GG WP")
console.log("hello world")

const button = document.querySelector('#button');
const colorButton = document.querySelector('.color-button');
const changeDivColor = document.querySelector('.change-div-color')
const div = document.querySelector('.block')

// click button to console log
button.addEventListener('click',() => {
    console.log("You clicked me!!!")
})

// click button to change background color of body

colorButton.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    let randColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = randColor;
    console.log(randColor)
})


changeDivColor.addEventListener('click', () => {
    let input = prompt('What color do you want to change the div to');
    div.style.backgroundColor = input;

})





// simple function to add 2 numbers together



let askUserForNumber1 = prompt("Enter first number");

if (askUserForNumber1 !== null){
    
    while (isNaN(parseInt(askUserForNumber1))) {
        askUserForNumber1 = prompt("You didn't enter a number, so enter a number")
        if (askUserForNumber1 === null){
            askUserForNumber1 = 0;
        }
    }
} else {
    askUserForNumber1 = 0;
}


let askUserForNumber2 = prompt("Enter second number")

if (askUserForNumber2 !== null){
    
    while (isNaN(parseInt(askUserForNumber2))) {
        askUserForNumber2 = prompt("You didn't enter a number, so enter a number")
        if (askUserForNumber2 === null){
            askUserForNumber2 = 0;
        }
    }

} else {
    askUserForNumber2 = 0;
}

const sum = parseInt(askUserForNumber1) + parseInt(askUserForNumber2)


const addInputs = () => {
    console.log("The sum of your inputs is ---->", sum)
    const tag = document.createElement("p");
    tag.innerText = `The sum of ${askUserForNumber1} and ${askUserForNumber2} is ${sum}`
    tag.classList.add('bold')
    document.body.appendChild(tag)
}

if (askUserForNumber1 || askUserForNumber2 !== null) {
    addInputs();
}







// const add2Numbers = (num1,num2) => {
//     if (typeof num1 !== 'number'|| typeof num2 !== 'number'){
//         console.log("unable to do addition")
//         return;
//     }

//     const sum = num1 + num2;
//     console.log("sum ---> ", sum)
// }

// add2Numbers("Hello my name is ", "Aphason")
// add2Numbers(2,2)
// add2Numbers(2,false)