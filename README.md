# Functional-Modal

A library that aims to provide a simple, function based way to just put a pop up on screen and make the user choose something.

## How to use

```lang=js

// An option for the modal has this shape

var option ={
    text: "Basic Earth Magic",
    id: 1
}

// Normally it only makes sense if you have more than 1 option

var options = [
                {
                    text: "Basic Earth Magic",
                    id: 1
                },

                {
                    text: "Master Holy Magic",
                    id: 2
                },

                {
                    text: "Advanced Mind Magic",
                    id: 3
                }
            ]

// Also required is some text to explain the context to the users

var text = "Congratulations on leveling up. Choose a skill: "

// The function returns a promise not encesary but I would suggest using it with async/await 

var result =  await functionalModal(text, options);

// Important is you don't need to put in a modal template anywhere in your components and the logic to get user input can be triggered for anywhere you run js from.

```