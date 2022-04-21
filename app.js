console.log("GG WP")
console.log("hello world")

const button = document.querySelector('#button');
const colorButton = document.querySelector('.color-button');








button.addEventListener('click',() => {
    console.log("You clicked me!!!")
})

colorButton.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    let randColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = randColor;
    console.log('r --> ', r)
})






// simple function to add 2 numbers together
const add2Numbers = (num1,num2) => {
    if (typeof num1 !== 'number'|| typeof num2 !== 'number'){
        console.log("unable to do addition")
        return;
    }

    const sum = num1 + num2;
    console.log("sum ---> ", sum)
}

add2Numbers("Hello my name is ", "Aphason")
add2Numbers(2,2)
add2Numbers(2,false)