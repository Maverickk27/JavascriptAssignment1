/* Arrays containing movie-inspired words for each category */
const subjects = [
    "Luke Skywalker", "Harry Potter", "Tony Stark", "Simba", "Indiana Jones",
    "Frodo Baggins", "Katniss Everdeen", "Darth Vader", "The Hulk", "Elsa"
];
const verbs = [
    "battled", "discovered", "befriended", "defeated", "escaped from",
    "trained with", "teamed up with", "fought against", "saved", "destroyed"
];
const adjectives = [
    "a powerful", "a mysterious", "an ancient", "a giant", "a magical", 
    "an evil", "a fearless", "a terrifying", "a legendary", "a cursed"
];
const objects = [
    "dragon", "lightsaber", "T-Rex", "spaceship", "magic wand", 
    "Infinity Stone", "dinosaur", "robot army", "wizard", "alien"
];
const places = [
    "in Hogwarts", "on the Death Star", "in Wakanda", "on Pride Rock", "in Middle Earth",
    "at Jurassic Park", "in Gotham City", "in Asgard", "on Pandora", "on the Millennium Falcon"
];
const secondObjects = [
    "the Holy Grail", "a golden snitch", "the One Ring", "a Jedi's lightsaber", "the Infinity Gauntlet",
    "a Vibranium shield", "a mystical map", "a powerful spellbook", "the Heart of Te Fiti", "a time machine"
];
const prepositions = ["while", "as", "before", "after", "because", "during"];
const adverbs = ["bravely", "mysteriously", "dangerously", "gracefully", "fearlessly", "secretly", "reluctantly"];

// Variables to store the parts of the sentence
let subject = "";
let verb = "";
let adjective = "";
let object = "";
let place = "";
let secondObject = "";
let preposition = "";
let adverb = "";

// Function to get a random item from an array
function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to update the story output
function updateStory() {
    const story = `${subject} ${verb} ${adjective} ${object} ${place}, ${preposition} they found ${secondObject} ${adverb}.`;
    document.getElementById("storyOutput").textContent = story;
}

// Adding event listeners for each button
document.getElementById("subjectBtn").onclick = function() {
    subject = getRandomWord(subjects);
    updateStory();
};

document.getElementById("verbBtn").onclick = function() {
    verb = getRandomWord(verbs);
    updateStory();
};

document.getElementById("adjectiveBtn").onclick = function() {
    adjective = getRandomWord(adjectives);
    updateStory();
};

document.getElementById("objectBtn").onclick = function() {
    object = getRandomWord(objects);
    updateStory();
};

document.getElementById("placeBtn").onclick = function() {
    place = getRandomWord(places);
    updateStory();
};

// Adding secondObject, preposition, and adverb when generating a full random story
document.getElementById("randomStoryBtn").onclick = function() {
    subject = getRandomWord(subjects);
    verb = getRandomWord(verbs);
    adjective = getRandomWord(adjectives);
    object = getRandomWord(objects);
    place = getRandomWord(places);
    secondObject = getRandomWord(secondObjects);
    preposition = getRandomWord(prepositions);
    adverb = getRandomWord(adverbs);
    updateStory();
};

// Speaking the sentence
const synth = window.speechSynthesis;

document.getElementById("speakBtn").onclick = function() {
    const textToSpeak = `${subject} ${verb} ${adjective} ${object} ${place}, ${preposition} they found ${secondObject} ${adverb}.`;
    if (textToSpeak.trim() === "., they found .") {
        alert("Please complete the story first!");
    } else {
        const utterThis = new SpeechSynthesisUtterance(textToSpeak);
        synth.speak(utterThis);
    }
};


document.getElementById("resetBtn").onclick = function() {
    subject = "";
    verb = "";
    adjective = "";
    object = "";
    place = "";
    secondObject = "";
    preposition = "";
    adverb = "";
    updateStory();
};
