const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

let documentBody = document.querySelector("body")

//KATAS
//#1
let Kata1Div = document.createElement(`div`);
Kata1Div.classList.add(`KataDiv`)
documentBody.append(Kata1Div)
let Kata1Title = document.createElement(`h1`);
Kata1Title.classList.add(`KataTitle`)
Kata1Title.append("Kata #1")
Kata1Div.append(Kata1Title)

for (let index1 = 1; index1  <= 20; index1++) {
    let currentNumber = index1;
    Kata1Div.append(`${currentNumber}, `)
}

//#2
let Kata2Div = document.createElement(`div`);
Kata2Div.classList.add(`KataDiv`)
documentBody.append(Kata2Div)
let Kata2Title = document.createElement(`h1`);
Kata2Title.classList.add(`KataTitle`)
Kata2Title.append("Kata #2")
Kata2Div.append(Kata2Title)

for (let index2 = 2; index2 <= 20; index2 += 2) {
    let currentNumber = index2;
    Kata2Div.append(`${currentNumber}, `)
}

//#3
let Kata3Div = document.createElement(`div`);
Kata3Div.classList.add(`KataDiv`)
documentBody.append(Kata3Div)
let Kata3Title = document.createElement(`h1`);
Kata3Title.classList.add(`KataTitle`)
Kata3Title.append("Kata #3")
Kata3Div.append(Kata3Title)

for (let index3 = 1; index3 <= 20; index3 += 2) {
    let currentNumber = index3;
    Kata3Div.append(`${currentNumber}, `)
}

//#4
let Kata4Div = document.createElement(`div`);
Kata4Div.classList.add(`KataDiv`)
documentBody.append(Kata4Div)
let Kata4Title = document.createElement(`h1`);
Kata4Title.append("Kata #4")
Kata4Title.classList.add(`KataTitle`)
Kata4Div.append(Kata4Title)

for (let index4 = 5; index4 <= 100; index4 += 5) {
    let currentNumber = index4;
    Kata4Div.append(`${currentNumber}, `)
}

//#5
let Kata5Div = document.createElement(`div`);
Kata5Div.classList.add(`KataDiv`)
documentBody.append(Kata5Div)
let Kata5Title = document.createElement(`h1`);
Kata5Title.classList.add(`KataTitle`)
Kata5Title.append("Kata #5")
Kata5Div.append(Kata5Title)

for (let index5 = 1; index5 <= 10; index5++) {
    let currentSquare = index5 * index5;
    Kata5Div.append(`${currentSquare}, `)
}

//#6
let Kata6Div = document.createElement(`div`);
Kata6Div.classList.add(`KataDiv`)
documentBody.append(Kata6Div)
let Kata6Title = document.createElement(`h1`);
Kata6Title.classList.add(`KataTitle`)
Kata6Title.append("Kata #6")
Kata6Div.append(Kata6Title)

for (let index6 = 20; index6 >= 1; index6 -= 1) {
    let currentNumber = index6;
    Kata6Div.append(`${currentNumber}, `);
}

//#7
let Kata7Div = document.createElement(`div`);
Kata7Div.classList.add(`KataDiv`)
documentBody.append(Kata7Div)
let Kata7Title = document.createElement(`h1`);
Kata7Title.classList.add(`KataTitle`)
Kata7Title.append("Kata #7")
Kata7Div.append(Kata7Title)

for (let index7 = 20; index7 >= 1; index7 -= 2) {
    let currentNumber = index7;
    Kata7Div.append(`${currentNumber}, `);
}

//#8
let Kata8Div = document.createElement(`div`);
Kata8Div.classList.add(`KataDiv`)
documentBody.append(Kata8Div)
let Kata8Title = document.createElement(`h1`);
Kata8Title.classList.add(`KataTitle`)
Kata8Title.append("Kata #8")
Kata8Div.append(Kata8Title)

for (let index8 = 19; index8 >= 1; index8 -= 2) {
    let currentNumber = index8;
    Kata8Div.append(`${currentNumber}, `);
}

//#9
let Kata9Div = document.createElement(`div`);
Kata9Div.classList.add(`KataDiv`)
documentBody.append(Kata9Div)
let Kata9Title = document.createElement(`h1`);
Kata9Title.classList.add(`KataTitle`)
Kata9Title.append("Kata #9")
Kata9Div.append(Kata9Title)

for (let index9 = 100; index9 > 0; index9 -= 5) {
    let currentNumber = index9;
    Kata9Div.append(`${currentNumber}, `);
}

//#10
let Kata10Div = document.createElement(`div`);
Kata10Div.classList.add(`KataDiv`)
documentBody.append(Kata10Div)
let Kata10Title = document.createElement(`h1`);
Kata10Title.classList.add(`KataTitle`)
Kata10Title.append("Kata #10")
Kata10Div.append(Kata10Title)

for (let index10 = 10; index10 > 0; index10--) {
    let currentSquare = index10 * index10;
    Kata10Div.append(`${currentSquare}, `);
}

//#11
let Kata11Div = document.createElement(`div`);
Kata11Div.classList.add(`KataDiv`)
documentBody.append(Kata11Div)
let Kata11Title = document.createElement(`h1`);
Kata11Title.classList.add(`KataTitle`)
Kata11Title.append("Kata #11")
Kata11Div.append(Kata11Title)

for (let index11 = 0; index11 < sampleArray.length; index11 ++) {
    let currentNumber = String(sampleArray[index11]);
    Kata11Div.append(`${currentNumber}, `);
}

//#12
let Kata12Div = document.createElement(`div`);
Kata12Div.classList.add(`KataDiv`)
documentBody.append(Kata12Div)
let Kata12Title = document.createElement(`h1`);
Kata12Title.classList.add(`KataTitle`)
Kata12Title.append("Kata #12")
Kata12Div.append(Kata12Title)

for (let index12 = 0; index12 < sampleArray.length; index12 ++) {
    let currentNumber = sampleArray[index12];
    if (currentNumber % 2 === 0) {
        Kata12Div.append(`${currentNumber}, `)
    }
}

//#13
let Kata13Div = document.createElement(`div`);
Kata13Div.classList.add(`KataDiv`)
documentBody.append(Kata13Div)
let Kata13Title = document.createElement(`h1`);
Kata13Title.classList.add(`KataTitle`)
Kata13Title.append("Kata #13")
Kata13Div.append(Kata13Title)

for (let index13 = 0; index13 < sampleArray.length; index13 ++) {
    let currentNumber = sampleArray[index13];
    if (currentNumber % 2 === 1) {
        Kata13Div.append(`${currentNumber}, `)
    }
}

//#14
let Kata14Div = document.createElement(`div`);
Kata14Div.classList.add(`KataDiv`)
documentBody.append(Kata14Div)
let Kata14Title = document.createElement(`h1`);
Kata14Title.classList.add(`KataTitle`)
Kata14Title.append("Kata #14")
Kata14Div.append(Kata14Title)

for (let index14 = 0; index14 < sampleArray.length; index14++) {
    let currentNumber = sampleArray[index14];
    let currentSquare = currentNumber * currentNumber;
    Kata14Div.append(`${currentSquare}, `);
}

//#15
let Kata15Div = document.createElement(`div`);
Kata15Div.classList.add(`KataDiv`)
documentBody.append(Kata15Div)
let Kata15Title = document.createElement(`h1`);
Kata15Title.classList.add(`KataTitle`)
Kata15Title.append("Kata #15")
Kata15Div.append(Kata15Title)

let Div15Total = 0;
for (let index15 = 0; index15 <= 20; index15 ++) {
    let currentNumber = index15;
    Div15Total += currentNumber;
}
Kata15Div.append(Div15Total);

//#16
let Kata16Div = document.createElement(`div`);
Kata16Div.classList.add(`KataDiv`)
documentBody.append(Kata16Div)
let Kata16Title = document.createElement(`h1`);
Kata16Title.classList.add(`KataTitle`)
Kata16Title.append("Kata #16")
Kata16Div.append(Kata16Title)

let Div16Total = 0
for (let index16 = 0; index16 < sampleArray.length; index16++) {
    let currentNumber = sampleArray[index16];
    Div16Total += currentNumber;
}
Kata16Div.append(Div16Total);

//#17
let Kata17Div = document.createElement(`div`);
Kata17Div.classList.add(`KataDiv`);
documentBody.append(Kata17Div);
let Kata17Title = document.createElement(`h1`);
Kata17Title.classList.add(`KataTitle`);
Kata17Title.append("Kata #17");
Kata17Div.append(Kata17Title);

let Div17And18Array = [];
for (let index1718 = 0; index1718 < sampleArray.length; index1718++) {
    let currentNumber = parseInt(sampleArray[index1718]);
    Div17And18Array.push(currentNumber);
}
console.log(Div17And18Array);

//DEVELOPER COMMENT: I have no idea what the heck ... operator actually does or how it really works, but it seems to get the job done so...

Kata17Div.append(Math.min(...Div17And18Array));

//#18
let Kata18Div = document.createElement(`div`);
Kata18Div.classList.add(`KataDiv`);
documentBody.append(Kata18Div);
let Kata18Title = document.createElement(`h1`);
Kata18Title.classList.add(`KataTitle`);
Kata18Title.append("Kata #18");
Kata18Div.append(Kata18Title);

Kata18Div.append(Math.max(...Div17And18Array));

//BONUS STUFF
//19
let bonusBoxesContainer1 = document.createElement('div');
bonusBoxesContainer1.classList.add('bonusBoxContainer');
documentBody.append(bonusBoxesContainer1);

for (index19 = 0; index19 < 20; index19 ++) {
    let greyBox = document.createElement('div');
    greyBox.classList.add('greyBox');
    bonusBoxesContainer1.appendChild(greyBox);
}

//20
let bonusBoxesContainer2 = document.createElement('div');
bonusBoxesContainer2.classList.add('bonusBoxContainer');
documentBody.append(bonusBoxesContainer2);

let elementWidth = 100;
for (index20 = 1; index20 < 20; index20 ++) {
    let evenGrowthBoxes = document.createElement('div');
    evenGrowthBoxes.classList.add(`evenGrowthBoxes`);
    bonusBoxesContainer2.appendChild(evenGrowthBoxes);
    evenGrowthBoxes.style.width(`${elementWidth}px`)
    elementWidth += 5;
}
