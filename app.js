console.log("GG WP")
console.log("hello world")

const button = document.querySelector('#button');

button.addEventListener('click',()=> {
    console.log("You clicked me!!!")
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