var friendsArr = ["Dillon", "Jack", "Julie", "Cas", "Bobby"];
var locationArr = [
    "The poop deck",
    "The Treehouse",
    "The Tardis",
    "The Living Room",
    "The study",
    "The monistary",
    "backseat of a Prius",
    "The Bat Cave",
    "The lands between",
    "Riften",
];
var weaponsArr = [
    "Numchucks",
    "Double Barrel Shotgun",
    "Energy sword",
    "R-99",
    "Bowcheck Bow",
    "Poisened fruit loops",
    "Squash",
    "Nokie Phone",
    "MAGIKK",
    "Portal gun",
    "Kazoo",
    "Two handed Greatsword",
    "kitana",
    "alien boogers",
    "orbital strike",
    "Boomarang",
    " 360 no scope",
    "Catapult",
    "Ninja star",
    "TWO BOOMERANGS",
];
// var Accusations = `I accuse ${friendsArr[Math.floor(Math.random() * friendsArr.length)] }
//     "with the" ${weaponsArr[Math.floor(Math.random() * weaponsArr.length)]}
//      "in the" ${locationArr[Math.floor(Math.random() * locationArr.length)]}`;

// function displayAccusations() {
//     alert(Accusations)
// }

for (let i = 1; i < 101; i++) {
    var currentElement = document.createElement("h3");
    currentElement.innerText = "Accusation " + i + ".";
    document.body.appendChild(currentElement);
    currentElement.addEventListener('click', accusation(i));
}





function accusation(accusation) {

    function Alert() {
        var name = friendsArr[accusation % 5];
        var locations = locationArr[accusation % 10]
        var weapon = weaponsArr[accusation % 20]
        alert(`I accuse ${name} with the ${weapon} in the ${locations}!`);
    }
    return Alert;
}