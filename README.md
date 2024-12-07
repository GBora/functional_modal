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

// The result will be the id of the selected option in this case either 1, 2 or 3

// Important is you don't need to put in a modal template anywhere in your components and the logic to get user input can be triggered for anywhere you run js from.

```

## Dependencies

This modal is based on Bootstrap (5) html and css, so you need to have the bootstrap css and js in your site, for example in the head:

```lang=html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
```

## How to insert into site

Just insertit as any script

```lang=html

<head>
    <script src="../functionalModal.js"></script>
</head>

```