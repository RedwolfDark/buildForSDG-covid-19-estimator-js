/* eslint-disable max-len */
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

const challengeOneFunction = (reportedCases, timeToElapse) => {
  const challengeOneData = {};
  let powerCasesIncrease = 0;

  challengeOneData.impactCurrentlyInfected = Math.trunc(reportedCases * 10);

  challengeOneData.severeImpactCurrentlyInfected = Math.trunc(reportedCases * 50);

  powerCasesIncrease = Math.trunc(timeToElapse / 3);

  challengeOneData.impactInfectionsByRequestedTime = challengeOneData.impactCurrentlyInfected * 2 ** powerCasesIncrease;
  challengeOneData.severeImpactInfectionsByRequestedTime = challengeOneData.severeImpactCurrentlyInfected * 2 ** powerCasesIncrease;

  return challengeOneData;
};

const challengeTwoFunction = (severeImpactInfectionsByRequestedTime, impactInfectionsByRequestedTime, totalHospitalBeds) => {
  const challengeTwoData = {};

  challengeTwoData.impactSevereCasesByRequestedTime = Math.trunc((15 * impactInfectionsByRequestedTime) / 100);
  challengeTwoData.severeImpactSevereCasesByRequestedTime = Math.trunc((severeImpactInfectionsByRequestedTime * 15) / 100);

  challengeTwoData.impactHospitalBedsByRequestedTime = Math.trunc(totalHospitalBeds * 0.35 - challengeTwoData.impactSevereCasesByRequestedTime);
  challengeTwoData.severeImpactHospitalBedsByRequestedTime = Math.trunc(totalHospitalBeds * 0.35 - challengeTwoData.severeImpactSevereCasesByRequestedTime);

  return challengeTwoData;
};

const challengeThreeFunction = (severeImpactInfectionsByRequestedTime, impactInfectionsByRequestedTime, regionAvgDailyIncomeInUSD, regionAvgDailyIncomePopulation) => {
  const challengeThreeData = {};

  challengeThreeData.impactCasesForVentilatorsByRequestedTime = Math.trunc(0.05 * impactInfectionsByRequestedTime);
  challengeThreeData.severeImpactCasesForVentilatorsByRequestedTime = Math.trunc(0.05 * severeImpactInfectionsByRequestedTime);
  challengeThreeData.impactCasesForICUByRequestedTime = Math.trunc(0.02 * impactInfectionsByRequestedTime);
  challengeThreeData.severeImpactCasesForICUByRequestedTime = Math.trunc(0.02 * severeImpactInfectionsByRequestedTime);

  challengeThreeData.impactDollarsInFlight = impactInfectionsByRequestedTime * regionAvgDailyIncomeInUSD * regionAvgDailyIncomePopulation;
  challengeThreeData.severeImpactDollarsInFlight = severeImpactInfectionsByRequestedTime * regionAvgDailyIncomeInUSD * regionAvgDailyIncomePopulation;

  return challengeThreeData;
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
