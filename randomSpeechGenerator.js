import { introList, setUpList, middleListSingular, middleListPlural, endList } from "./listOfPhrases.js";


function randomNumber() {
    return Math.floor(Math.random() * 10);
};

function speechGenerator(part1, part2, part3_1, part3_2, part4) {
    let generatedPart1 = part1[randomNumber()];

    let generatedPart2 = part2[randomNumber()];

    // Depending on contents of second block, third block should be selected from the list with verbs in singular or plural form so that the whole phrase would be logically structured.

    let generatedPart3 = ''

    if (generatedPart2.includes(' и ')) {
        generatedPart3 = part3_2[randomNumber()];
    } else {
        generatedPart3 = part3_1[randomNumber()];
    }

    let generatedPart4 = part4[randomNumber()];

// For the whole phrase to look correctly in text, first letter in the second block should be either capital or in lower case. This depends on the first block as it might end with exclamation mark.

    if (generatedPart1.includes('!')) {

        let firstLetter = generatedPart2.charAt(0);
        let slicedPart2 = generatedPart2.slice(1,);
        generatedPart2 = firstLetter.toUpperCase() + slicedPart2;
    };  

    return `${generatedPart1} ${generatedPart2} ${generatedPart3} ${generatedPart4}`

};



console.log(speechGenerator(introList, setUpList, middleListSingular, middleListPlural, endList))