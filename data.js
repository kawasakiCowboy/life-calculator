// creating the user object
export const createUserModel = () => ({
    input: {
        yearOfBirth: null,
        monthOfBirth: null,
        dayOfBirth: null,
        urbanness: null,
        activeness: null,
        travelness: null,
        talkativeness: null, 
    },
    calculated: {
        ageInDays: null,
        calorie: null,
        footsteps: null,
        distance: null,
        air: null,
        water: null,
        words: null,  
    }
})

// config
export const CONSTANTS = {
    DAILY_FOOTSTEPS_BASE: 5833,
    WATER_BASE: 2.5,
    CALORIE_BASE: 2960000,
    CAL_PER_KM: 315487,
    AIR_BASE: 11000,
    WORD_BASE: 16000,
    STADIUM_AIR_VOLUME: 126*185*35*1000,
    BUTTERFLY_LIFESPAN: 9,
    FOOTSTEP_LENGTH: 0.74,
    DISTANCE_TO_MOON: 384400000,
    POOL_VOLUME: 2234000,
    WAR_AND_PEACE_WORDS: 188088,
  };


