import { CONSTANTS, createUserModel } from "./data.js";
import { getInputValues } from "./dom-manager.js";
import { updateResults } from "./dom-manager.js";
import { updateCarComparison } from "./dom-manager.js";
import { updateButterflyComparison } from "./dom-manager.js";
import { updateStadiumsComparison } from "./dom-manager.js";
import { updateToMoonComparison } from "./dom-manager.js";
import { updatePoolComparison } from "./dom-manager.js";
import { updateWarAndPeace } from "./dom-manager.js";

// calculate life statistics
export const calculateStatistics = (input) => {
    const ageDays =  calculateAgeInDays(input.yearOfBirth, input.monthOfBirth, input.dayOfBirth);
    const lifestyleFactor = input.activeness * input.travelness * input.urbanness;

    return {
        ageInDays: ageDays,
        footsteps: Math.floor(ageDays * CONSTANTS.DAILY_FOOTSTEPS_BASE * lifestyleFactor),
        water: CONSTANTS.WATER_BASE * ageDays * lifestyleFactor,
        air: 11000 * ageDays * lifestyleFactor,
        calorie: CONSTANTS.CALORIE_BASE * ageDays * lifestyleFactor,
        words: 16000 * ageDays * input.talkativness
    }
}


// calculate age in days by birth date
function calculateAgeInDays(year, month, day) {
    let ageMs = new Date - new Date( year, month, day);
    return Math.round( ageMs/( 1000*60*60*24 ) )
}


const user = createUserModel();
const button = document.querySelector(".the-okay-button");
const handleCalculation = () => {
    user.input = getInputValues();
    user.calculated = calculateStatistics(user.input);
    updateResults(user.calculated);
    updateCarComparison(user.calculated.calorie);
    updateButterflyComparison(user.calculated.ageInDays);
    updateStadiumsComparison(user.calculated.air);
    updateToMoonComparison(user.calculated.footsteps);
    updatePoolComparison(user.calculated.water);
    updateWarAndPeace(user.calculated.words);
}

button.addEventListener("click", handleCalculation);






