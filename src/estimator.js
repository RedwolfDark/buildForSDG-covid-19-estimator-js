/* eslint-disable max-len */
const challengeOneFunction = require('./chalenge_1');
const challengeTwoFunction = require('./chalenge_2');
const challengeThreeFunction = require('./chalenge_3');

const Dataformater = (data) => {
  const formatType = data.periodType;
  const inputData = data;

  switch (formatType) {
    case 'days':
      data.timeToElapse = inputData.timeToElapse;
      break;

    case 'weeks':
      data.timeToElapse = inputData.timeToElapse * 7;
      break;
    case 'months':
      data.timeToElapse = inputData.timeToElapse * 30;
      break;
    default:
      break;
  }

  return data;
};

const covid19ImpactEstimator = (data) => {
  const finalData = {
    data: {},
    impact: {},
    severeImpact: {}
  };

  const inputData = Dataformater(data);

  const chOne = challengeOneFunction(inputData.reportedCases, inputData.timeToElapse);

  finalData.impact.currentlyInfected = chOne.impactCurrentlyInfected;
  finalData.severeImpact.currentlyInfected = chOne.severeImpactCurrentlyInfected;
  finalData.impact.infectionsByRequestedTime = chOne.impactInfectionsByRequestedTime;
  finalData.severeImpact.infectionsByRequestedTime = chOne.severeImpactInfectionsByRequestedTime;

  const chTwo = challengeTwoFunction(finalData.severeImpact.infectionsByRequestedTime, finalData.impact.infectionsByRequestedTime, inputData.totalHospitalBeds);

  finalData.impact.severeCasesByRequestedTime = chTwo.impactSevereCasesByRequestedTime;
  finalData.severeImpact.severeCasesByRequestedTime = chTwo.severeImpactSevereCasesByRequestedTime;
  finalData.impact.hospitalBedsByRequestedTime = chTwo.impactHospitalBedsByRequestedTime;
  finalData.severeImpact.hospitalBedsByRequestedTime = chTwo.severeImpactHospitalBedsByRequestedTime;

  const chThree = challengeThreeFunction(finalData.severeImpact.infectionsByRequestedTime, finalData.impact.infectionsByRequestedTime,
    inputData.region.avgDailyIncomeInUSD, inputData.region.avgDailyIncomeInUSD);

  finalData.impact.casesForVentilatorsByRequestedTime = chThree.impactCasesForVentilatorsByRequestedTime;
  finalData.severeImpact.casesForVentilatorsByRequestedTime = chThree.severeImpactCasesForVentilatorsByRequestedTime;
  finalData.impact.dollarsInFlight = chThree.impactDollarsInFlight;
  finalData.severeImpact.dollarsInFlight = chThree.severeImpactDollarsInFlight;

  finalData.data = data;

  return finalData;
};

export default covid19ImpactEstimator;
