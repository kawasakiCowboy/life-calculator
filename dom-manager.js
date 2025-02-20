import { CONSTANTS } from "./data.js";


const RESULT_MAPPING = {
    '.age-result': 'ageInDays',
    '.air-result': 'air',
    '.calorie-result': 'calorie',
    '.footsteps-result': 'footsteps',
    '.water-result': 'water',
    '.words-result': 'words'
}

export const getInputValues = () => ({
    yearOfBirth: parseInt(document.querySelector('.year-input').value),
    monthOfBirth: parseInt(document.querySelector('.month-input').value) - 1,
    dayOfBirth: parseInt(document.querySelector('.day-input').value),
    activeness: parseFloat(document.querySelector('.activness-input').value),
    urbanness: parseFloat(document.querySelector('.urbanness-input').value),
    talkativness: parseFloat(document.querySelector('.talkativness-input').value),
    travelness: parseFloat(document.querySelector('.travelness-input').value)
  });

export const updateResults = (calculatedData) => {
    Object.entries(RESULT_MAPPING).forEach(([selector, key]) => {
        const element = document.querySelector(selector);
        if (element) element.textContent = calculatedData[key];
    });
};

// Comparison functions

export const updateCarComparison = (calories) => {
    const km = Math.round( calories / CONSTANTS.CAL_PER_KM );
    document.querySelector( '.car-result' ).textContent = km;
  };


  export const updateButterflyComparison = (ageInDays) => {
    const butterflyGen = Math.round( ageInDays / CONSTANTS.BUTTERFLY_LIFESPAN );
    document.querySelector( '.butterfly-result').textContent = butterflyGen;
  }


  export const updateStadiumsComparison = (air) => {
    const stadiums = ( air / CONSTANTS.STADIUM_AIR_VOLUME ).toFixed(4);
    document.querySelector( '.stadium-result' ).textContent = stadiums;
  }

  export const updateToMoonComparison = ( footsteps ) => {
    const moon = ( (footsteps * CONSTANTS.FOOTSTEP_LENGTH) / CONSTANTS.DISTANCE_TO_MOON ).toFixed(4);
    document.querySelector( '.moon-result' ).textContent = moon;
  }

  export const updatePoolComparison = ( water ) => {
    const pool = ( water / CONSTANTS.POOL_VOLUME ).toFixed(4);
    document.querySelector( '.pool-result' ).textContent = pool;
  }

  export const updateWarAndPeace = ( words ) => {
    const book = ( words / CONSTANTS.WAR_AND_PEACE_WORDS ).toFixed(1);
    document.querySelector( '.book-result' ).textContent = book;
  }