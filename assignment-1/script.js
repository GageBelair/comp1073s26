// Story choices

let people = [

    "The cat",
    "The dog",
    "A pirate",
    "A wizard",
    "A robot"
];

let actions = [

    "found",
    "chased",
    "jumped over",
    "discovered",
    "flew to"
];

let places = [

    "the forest",
    "the castle",
    "the moon",
    "the ocean",
    "the village"
];

let things = [

    "a treasure chest",
    "a magic tree",
    "a spaceship",
    "a giant cupcake",
    "a secret door"
];

let endings = [

    "and saved the day",
    "and became famous",
    "and made new friends",
    "and lived happily ever after",
    "and went home"
];

// Counters

let personNumber = 0;
let actionNumber = 0;
let placeNumber = 0;
let thingNumber = 0;
let endingNumber = 0;

// Create story text

function showStory(){

    let story =

    people[personNumber] + " " +
    actions[actionNumber] + " " +
    places[placeNumber] +
    " and found " +
    things[thingNumber] +
    " " +
    endings[endingNumber] +
    ".";

    document.getElementById("storyBox").value = story;
}

function changePerson(button) {

    personNumber++;

    if(personNumber == people.length){

        personNumber = 0;

    }

    button.value = people[personNumber];
    showStory();
}

function changeAction(button) {

    actionNumber++;

    if(actionNumber == actions.length){

        actionNumber = 0;

    }

    button.value = actions[actionNumber];
    showStory();
}

function changePlace(button) {

    placeNumber++;

    if(placeNumber == places.length){

        placeNumber = 0;

    }

    button.value = places[placeNumber];
    showStory();
}

function changeThing(button) {

    thingNumber++;

    if(thingNumber == things.length){

        thingNumber = 0;

    }

    button.value = things[thingNumber];
    showStory();
}

function changeEnding(button) {

    endingNumber++;

    if(endingNumber == endings.length){

        endingNumber = 0;
    }

    button.value = endings[endingNumber];
    showStory();
}

function randomStory(){

    personNumber = Math.floor(Math.random() * people.length);
    actionNumber = Math.floor(Math.random() * actions.length);
    placeNumber = Math.floor(Math.random() * places.length);
    thingNumber = Math.floor(Math.random() * things.length);
    endingNumber = Math.floor(Math.random() * endings.length);

    // Change button text
    let buttons = document.getElementsByClassName("storyButton")

    buttons[0].value = people[personNumber];
    buttons[1].value = actions[actionNumber];
    buttons[2].value = places[placeNumber];
    buttons[3].value = things[thingNumber];
    buttons[4].value = endings[endingNumber];
    showStory();
}

function resetStory(){

    personNumber = 0;
    actionNumber = 0;
    placeNumber = 0;
    thingNumber = 0;
    endingNumber = 0;

    arguments[0].value = people[0];
    arguments[1].value = actions[0];
    arguments[2].value = places[0];
    arguments[3].value = things[0];
    arguments[4].value = endings[0];

    showStory();
}