let temp = 150

// Logical And Operator - True if both sides are true. False otherwise
// Logical Or Operator - True if at least one side is true. False otherwise

if (temp >= 60 && temp <= 95) {
    console.log('It is pretty nice out.')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do no go outside.')
} else {
    console.log('Do what you want.')
}

// Challenge are

let isGuestOneVegan = true
let isGUestTwoVegan = false

// Are both vegan? Only offer up vegan dishes

// At least one vegan? Make sure to offer up some vegan options

// Else, Offer up anything on the menu

if (isGuestOneVegan && isGUestTwoVegan) {
    console.log('Only offer up vegan dishes.')
} else if (isGuestOneVegan || isGUestTwoVegan) {
    console.log('Make sure to offer up some vegan options.')
} else {
    console.log('Offer up anything on the menu.')
}